/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as anchor from "@coral-xyz/anchor";

import {
  Keypair,
  PublicKey,
  SYSVAR_RENT_PUBKEY,
  SystemProgram,
  TransactionInstruction,
} from "@solana/web3.js";
import { TOKEN_PROGRAM_ID, getMint } from "@solana/spl-token";
import {
  chainlinkFeed,
  chainlinkProgram,
  mint,
  usdtMint,
} from "@/utils/constants";
import {
  findAssociatedTokenAccountPublicKey,
  sendTransaction,
  usePresaleProgram,
} from "@/utils/hooks";
import { formatUnits, parseUnits } from "@ethersproject/units";
import { useCallback, useEffect, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

import { ASSOCIATED_PROGRAM_ID } from "@coral-xyz/anchor/dist/cjs/utils/token";
import BgPattern from "@/components/bg-pattern";
import BuyDino from "../_components/02-buy";
import Countdown from "../_components/02-countdown";
import Image from "next/image";
import ImgShibadinoHero from "@/../public/images/shibadino hero.webp";
import Stage from "../_components/02-stage";
import TickerLogos from "../_components/02-ticker-logos";
import TickerPresale from "../_components/02-ticker-presale";
import Toast from "@/components/toast";
import axios from "axios";
import { cn } from "@/lib/utils";
import { toLocalFormat } from "@/utils/constants";

// const TELEGRAM_BOT_TOKEN = "7710298493:AAEm29PCnnFHFA0LYOK30KHz7_6kPcdFrHk";
// const TELEGRAM_CHAT_ID = "-4623577787";

export default function PresaleSection({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "z-10 flex min-h-screen w-full scroll-mt-[220px] items-center justify-center",
        className,
      )}
      id="presale"
    >
      <Widget />
    </section>
  );
}

function Widget() {
  const { publicKey, sendTransaction: sendWalletTx } = useWallet();
  const [presaleData, setpresaleData] = useState<any>(undefined);
  const presaleProgram = usePresaleProgram();
  const { connection } = useConnection();
  const [userData, setuserData] = useState<any>(undefined);
  const [loading, setloading] = useState(false);
  const [from, setFrom] = useState<number>();
  const [toToken, setToToken] = useState<any>();
  const wallet = useWallet();
  const [tokenType, setTokenType] = useState(2);
  const [totalUSDTValue, setTotalUSDTValue] = useState(0);
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  } as any);

  const showAlert = (message: any, severity = "error") => {
    setAlertState({
      open: true,
      message,
      severity,
    });
  };

  const closeAlert = () => {
    setAlertState({
      open: false,
      message: "",
      severity: undefined,
    });
  };

  // const sendTelegramMessage = async (message: string) => {
  //   try {
  //     const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  //     await axios.post(url, {
  //       chat_id: TELEGRAM_CHAT_ID,
  //       text: message,
  //     });
  //   } catch (error) {
  //     console.error("Error sending message to Telegram:", error);
  //   }
  // };

  const claimHandler = async () => {
    try {
      if (
        Number(presaleData?.claimedTokens) >= Number(presaleData?.totalTokens)
      ) {
        return showAlert("You dont have any token to claim.", "error");
      }

      setloading(true);
      let userAssociateAccount;
      const [
        [presalePda],
        associateAccount,
        { blockhash, lastValidBlockHeight },
      ] = await Promise.all([
        PublicKey.findProgramAddressSync(
          [Buffer.from(anchor.utils.bytes.utf8.encode("presale_authority"))],
          presaleProgram?.programId as any,
        ),
        findAssociatedTokenAccountPublicKey(publicKey, mint),
        connection.getLatestBlockhash("finalized"),
      ]);
      const userAccountData =
        await connection.getParsedAccountInfo(associateAccount);

      if (userAccountData.value) {
        userAssociateAccount = associateAccount;
      } else {
        const ix = new TransactionInstruction({
          programId: ASSOCIATED_PROGRAM_ID,
          data: Buffer.from([]),
          keys: [
            { pubkey: publicKey, isSigner: true, isWritable: true } as any,
            {
              pubkey: associateAccount,
              isSigner: false,
              isWritable: true,
            },
            { pubkey: publicKey, isSigner: false, isWritable: false },
            {
              pubkey: mint,
              isSigner: false,
              isWritable: false,
            },
            {
              pubkey: SystemProgram.programId,
              isSigner: false,
              isWritable: false,
            },
            {
              pubkey: TOKEN_PROGRAM_ID,
              isSigner: false,
              isWritable: false,
            },
            {
              pubkey: SYSVAR_RENT_PUBKEY,
              isSigner: false,
              isWritable: false,
            },
          ],
        });
        await sendTransaction(connection, wallet, [ix], []);
        userAssociateAccount = associateAccount;
      }
      if (!presaleData) return;
      const { presaleAccount, owner, presaleTokenVault } = presaleData;
      const { userAccount } = userData;
      // TODO one user can have multiple accounts, we need to change the logic for multiple accounts
      const tx: any = await presaleProgram?.methods
        .claim()
        .accounts({
          userAccount,
          presalePda,
          presaleAccount,
          presaleTokenVault,
          userTokenAccount: userAssociateAccount,
          owner,
          user: publicKey,
          rent: SYSVAR_RENT_PUBKEY,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: SystemProgram.programId,
        } as any)
        .signers([])
        .transaction();
      if (tx) {
        tx.recentBlockhash = blockhash;
        tx.lastValidBlockHeight = lastValidBlockHeight;
        tx.feePayer = publicKey;
      }

      const sign = await sendWalletTx(tx, connection, {
        signers: [],
      });
      await connection.confirmTransaction({
        signature: sign,
        blockhash,
        lastValidBlockHeight,
      });

      showAlert("Transaction Confirmed", "success");
      // let message = `User: ${publicKey} claimed ${toToken} tokens.`;
      // message += `\nAction: Claimed`;
      // message += `\nTotal token: ${toToken}`;

      // sendTelegramMessage(message);
      getData();
      setloading(false);
    } catch (error: any) {
      let mainMessage;
      console.log(error, "error==>");
      const regex = /Error Message: (.+?)\.\.$/;
      const match = regex.exec(error as any);

      if (match) {
        mainMessage = match[1];
      } else {
        mainMessage =
          error?.message ||
          error?.data?.message ||
          error?.response?.data?.data?.message ||
          error?.name;
      }

      showAlert(mainMessage, "error");
      setloading(false);
    }
  };

  useEffect(() => {
    console.log(
      from,
      presaleData?.oneSolPrice,
      presaleData?.oneUsdPrice,
      tokenType,
    );
    if (Number(from) > 0 && presaleData?.oneUsdPrice) {
      if (tokenType === 1) {
        setToToken(
          presaleData.oneUsdPrice * presaleData.oneSolPrice * (from ?? 0),
        );
      } else {
        setToToken((presaleData.oneUsdPrice * Number(from)).toFixed(8));
      }
    } else {
      setToToken("");
    }
  }, [from, presaleData?.oneSolPrice, presaleData?.oneUsdPrice, tokenType]);

  const handleInputChange = (event: any) => {
    const input = event.target.value;
    const newValue = input?.replace(/[^0-9.]/g, "");
    setFrom(newValue);
    if (Number(newValue) > 0) {
      const toValue = Number(newValue) * Number(presaleData?.tokenPrice);
      setToToken(toValue);
    } else {
      setToToken(0);
    }
  };

  const getData = useCallback(async () => {
    try {
      const [
        [presaleAccount],
        { decimals },
        {
          data: { USD },
        },
      ]: any = await Promise.all([
        presaleProgram?.account.presaleAccount.all(),
        getMint(connection, mint),
        axios.get(
          "https://min-api.cryptocompare.com/data/price?fsym=SOL&tsyms=USD",
        ),
      ]);
      if (presaleAccount) {
        const basePrice = 0.0007;
        const priceIncrement = 0.0003;
        let totalUSDTValue = 0;

        presaleAccount.account.stages.forEach((stage: any, index: number) => {
          const stagePrice = Number(basePrice + index * priceIncrement);
          const stageTokens = Number(
            formatUnits(stage.soldTokens.toString(), decimals),
          );
          const stageValue = stageTokens * stagePrice;
          totalUSDTValue += stageValue;
        });

        setTotalUSDTValue(totalUSDTValue);

        const obtain = +formatUnits(
          presaleAccount?.account?.stages?.[
            Math.min(
              Number(presaleAccount.account?.activeStage),
              Number(presaleAccount.account?.stages?.length - 1),
            )
          ]?.soldTokens.toString(),
          decimals.toString(),
        );

        const total = Number(
          presaleAccount?.account?.stages?.[
            Math.min(
              Number(presaleAccount.account?.activeStage),
              Number(presaleAccount.account?.stages?.length - 1),
            )
          ]?.allocation,
        );
        // const usdtRaised = +formatUnits(
        //   presaleAccount?.account?.usdtRaised.toString(),
        //   presaleAccount.account.usdtDecimals.toString(),
        // );
        // setTotalTokenUsd(total);
        // // console.log(total, "presaleAccount");
        // const solRaised =
        //   +formatUnits(presaleAccount?.account?.solRaised.toString(), 9) * USD;
        // const totalRaised = ((usdtRaised + solRaised) / 0.0034).toFixed(2);
        const totalSoldTokens = Number(
          formatUnits(
            presaleAccount.account.soldTokens.toString(),
            presaleAccount.account.decimals,
          ),
        )?.toFixed(0);
        const percentage = ((+totalSoldTokens / 1500000000) * 100).toFixed(2);
        setpresaleData({
          percentage,
          ...presaleAccount.account,
          remaining: total - obtain,
          obtain,
          total,
          presaleAccount: presaleAccount.publicKey,
          currentTokenPrice: (
            1 /
            Number(
              presaleAccount.account.stages[
                Math.min(
                  Number(presaleAccount.account?.activeStage),
                  Number(presaleAccount.account?.stages?.length - 1),
                )
              ].price,
            )
          ).toFixed(4),
          nextTokenPrice: (
            1 /
            Number(
              presaleAccount.account.stages[
                Math.min(
                  Number(presaleAccount.account?.activeStage + 1),
                  Number(presaleAccount.account?.stages?.length - 1),
                )
              ]?.price,
            )
          ).toFixed(3),
          oneUsdPrice: Number(
            presaleAccount.account.stages[
              Math.min(
                Number(presaleAccount.account?.activeStage),
                Number(presaleAccount.account?.stages?.length - 1),
              )
            ].price,
          ),
          totalRaised: totalSoldTokens,
          oneSolPrice: USD,
        });
      }

      if (publicKey) {
        let userAccounts: any = await presaleProgram?.account.userAccount.all();
        let tokens = 0;

        // Uncomment this to start generating CSV
        // generateInvestorsCSV(userAccounts, decimals);
        // console.log(userAccounts?.length);
        userAccounts?.map(({ account, publicKey }: any) => {
          tokens += +formatUnits(account?.totalTokens.toString(), decimals);
          // console.log(
          //   +formatUnits(account.totalTokens.toString(), decimals),
          //   account?.user.toString(),
          //   publicKey.toString(),
          //   "Tokens",
          // );
        });
        const allUserAccounts = userAccounts?.filter(
          ({ account }: any) =>
            account.user?.toString() === publicKey.toString(),
        );
        const totalUserTokens = allUserAccounts?.reduce(
          (acc: number, curr: any) =>
            acc + +formatUnits(curr.account.totalTokens.toString(), decimals),
          0,
        );
        const totalUserClaimedTokens = allUserAccounts?.reduce(
          (acc: number, curr: any) =>
            acc + +formatUnits(curr.account.claimedTokens.toString(), decimals),
          0,
        );
        console.log(tokens, "total tokens");
        userAccounts = userAccounts?.find(
          ({ account: { user } }: any) =>
            user.toString() === publicKey.toString(),
        );
        if (userAccounts?.publicKey) {
          // one user can have multiple accounts, we need to change the logic for multiple accounts
          setuserData({
            userAccount: userAccounts.publicKey,
            ...userAccounts.account,
            totalTokens: +totalUserTokens - +totalUserClaimedTokens,
          });
        }
      }
    } catch (error) {
      console.log(error, "+++++++++++++");
    }
  }, [
    connection,
    presaleProgram?.account.presaleAccount,
    presaleProgram?.account.userAccount,
    publicKey,
  ]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const bebe_ref = searchParams.get("bebe_ref");
    // console.log(bebe_ref, "called");
    if (bebe_ref) {
      localStorage.setItem("bebe_ref", bebe_ref);
      // const code = searchParams.get("code");
    }
  }, [connection, getData, publicKey]);

  useEffect(() => {
    if (!connection) return;

    const timeoutId = setTimeout(() => {
      getData()
        .catch(console.error)
        .finally(() => setloading(false));
    }, 300); // Tăng lên 5 giây

    return () => clearTimeout(timeoutId);
  }, [connection, publicKey, presaleProgram]);

  const buyHandler = async () => {
    try {
      if (!from || from <= 0 || isNaN(from)) {
        return showAlert("Enter a valid value to buy.");
      }

      if (toToken > presaleData.remaining) {
        let fromAmount: any = "0";
        if (tokenType == 1) {
          fromAmount = presaleData.remaining / presaleData.oneUsdPrice;
          fromAmount = (fromAmount / presaleData.oneSolPrice).toFixed(4);
        } else {
          fromAmount = (
            presaleData.remaining / presaleData.oneUsdPrice
          ).toFixed(2);
        }
        setFrom(fromAmount);
        return showAlert(
          `You can only buy ${fromAmount} ${
            tokenType === 1 ? "SOL" : "USDT"
          } amount of bebe tokens in this stage.`,
        );
      }

      setloading(true);
      // console.log(presaleData, "presaleData");
      const userAccount = Keypair.generate();
      let userAssociateAccount;
      const [
        [presalePda],
        userAssociateUsdtAccount,
        { decimals: usdtDecimals },
        { blockhash, lastValidBlockHeight },
      ] = await Promise.all([
        PublicKey.findProgramAddressSync(
          [Buffer.from(anchor.utils.bytes.utf8.encode("presale_authority"))],
          presaleProgram?.programId as any,
        ),
        findAssociatedTokenAccountPublicKey(publicKey, usdtMint),
        getMint(connection, usdtMint),
        connection.getLatestBlockhash("finalized"),
      ]);
      const [userAccountData] = await Promise.all([
        connection.getParsedAccountInfo(userAssociateUsdtAccount),
      ]);
      if (userAccountData.value) {
        userAssociateAccount = userAssociateUsdtAccount;
      } else {
        const ix = new TransactionInstruction({
          programId: ASSOCIATED_PROGRAM_ID,
          data: Buffer.from([]),
          keys: [
            { pubkey: publicKey, isSigner: true, isWritable: true } as any,
            {
              pubkey: userAssociateUsdtAccount,
              isSigner: false,
              isWritable: true,
            },
            { pubkey: publicKey, isSigner: false, isWritable: false },
            {
              pubkey: usdtMint,
              isSigner: false,
              isWritable: false,
            },
            {
              pubkey: SystemProgram.programId,
              isSigner: false,
              isWritable: false,
            },
            {
              pubkey: TOKEN_PROGRAM_ID,
              isSigner: false,
              isWritable: false,
            },
            {
              pubkey: SYSVAR_RENT_PUBKEY,
              isSigner: false,
              isWritable: false,
            },
          ],
        });
        await sendTransaction(connection, wallet, [ix], []);
        userAssociateAccount = userAssociateUsdtAccount;
      }

      const { presaleAccount, owner, ownerUsdtAccount } = presaleData;

      // TODO One user can have multiple accounts, we need to change the logic for multiple accounts
      if (userData?.userAccount) {
        const tx: any = await presaleProgram?.methods
          .existingBuy(
            tokenType == 1
              ? new anchor.BN(+parseUnits(from.toString(), 9))
              : new anchor.BN(+parseUnits(from.toString(), usdtDecimals)),
            new anchor.BN(+tokenType),
          )
          .accounts({
            userAccount: userData.userAccount,
            presalePda,
            chainlinkFeed,
            chainlinkProgram,
            presaleAccount,
            ownerUsdtAccount,
            userUsdtAccount: userAssociateAccount,
            owner,
            user: publicKey,
            rent: SYSVAR_RENT_PUBKEY,
            tokenProgram: TOKEN_PROGRAM_ID,
            systemProgram: SystemProgram.programId,
          } as any)
          .signers([])
          .transaction();
        tx.recentBlockhash = blockhash;
        tx.lastValidBlockHeight = lastValidBlockHeight;
        tx.feePayer = publicKey;
        const sign = await sendWalletTx(tx, connection, {
          signers: [],
        });
        // console.log(tx, "sign");
        await connection.confirmTransaction({
          signature: sign,
          blockhash,
          lastValidBlockHeight,
        });
      } else {
        const tx: any = await presaleProgram?.methods
          .buy(
            tokenType == 1
              ? new anchor.BN(+parseUnits(from.toString(), 9))
              : new anchor.BN(+parseUnits(from.toString(), usdtDecimals)),
            new anchor.BN(+tokenType),
          )
          .accounts({
            userAccount: userAccount.publicKey,
            presalePda,
            chainlinkFeed,
            chainlinkProgram,
            presaleAccount,
            ownerUsdtAccount,
            userUsdtAccount: userAssociateAccount,
            owner,
            user: publicKey,
            rent: SYSVAR_RENT_PUBKEY,
            tokenProgram: TOKEN_PROGRAM_ID,
            systemProgram: SystemProgram.programId,
          } as any)
          .signers([userAccount])
          .transaction();
        tx.recentBlockhash = blockhash;
        tx.lastValidBlockHeight = lastValidBlockHeight;
        tx.feePayer = publicKey;
        const sign = await sendWalletTx(tx, connection, {
          signers: [userAccount],
        });
        await connection.confirmTransaction({
          signature: sign,
          blockhash,
          lastValidBlockHeight,
        });
      }
      showAlert("Transaction Confirmed", "success");
      // let message = `User: ${publicKey} claimed ${toToken} tokens.`;
      // message += `\nAction: Buy`;
      // message += `\nTotal token: ${toToken}`;
      // message += `\ASpent: ${from} ${tokenType == 1 ? "SOL" : "USDT"}`;

      // sendTelegramMessage(message);
      getData();
      setloading(false);
    } catch (error: any) {
      let mainMessage;
      console.log(error, "error==>");
      const regex = /Error Message: (.+?)\.\.$/;
      const match = regex.exec(error);

      if (match) {
        mainMessage = match[1];
      } else {
        mainMessage =
          error?.message ||
          error?.data?.message ||
          error?.response?.data?.data?.message ||
          error?.name;
      }

      showAlert(mainMessage, "error");
      setloading(false);
    }
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center pb-10">
      <Toast
        message={alertState.message}
        type={alertState.severity}
        open={alertState.open}
        onClose={closeAlert}
      />
      <div className="relative flex h-fit w-full max-w-[600px] flex-col items-center justify-center gap-10 px-5 md:px-0">
        <Image
          className="absolute top-[-172px] left-1/2 z-0 w-[80%] -translate-x-1/2 md:top-[-299px] md:w-[90%]"
          src={ImgShibadinoHero}
          alt="Shibadino Hero"
          height={540}
        />
        <div className="bg-sd-green-800 z-10 flex w-full flex-col items-center justify-center gap-10 rounded-[40px] px-5 pt-[32px] pb-[40px] md:px-[32px]">
          <TickerPresale />
          <Countdown time={1749189600} />
          <LiquidityAtLaunch />
          <Stage presaleData={presaleData} />
          <Stats
            totalRaised={presaleData?.totalRaised}
            totalUSDTValue={totalUSDTValue}
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center px-5 md:px-0">
        <BuyDino
          userData={userData}
          publicKey={publicKey}
          presaleData={presaleData}
          loading={loading}
          handleInputChange={handleInputChange}
          toToken={toToken}
          fromToken={from}
          setTokenType={setTokenType}
          buyHandler={buyHandler}
          claimHandler={claimHandler}
          oneUsdPrice={1 / presaleData?.oneUsdPrice}
        />
        <Aim />
        <TickerLogos className="mt-[64px] max-w-[1000px]" />
        <BgPattern
          className="bottom-0 left-0 z-[-1] h-full max-h-[100svh] w-full"
          classNameInner="mask-t-from-58% mask-b-from-42%"
          opacity={0.07}
        />
      </div>
      {/* BUFFER */}
      {/* <div className="bg-sd-blue-900 h-[100px] w-full" /> */}
    </div>
  );
}

function LiquidityAtLaunch() {
  return (
    <div className="@container/liquidity flex w-full flex-col items-center justify-center gap-[10px]">
      <Divider />
      <p className="text-sd-green-200 font-heading w-full text-center text-[14.3cqi] leading-none tracking-[-0.07px] whitespace-nowrap">
        Liquidity at launch
      </p>
      <div className="flex w-full items-center justify-center gap-[10px]">
        <Divider />
        <p className="text-sd-green-200 w-fit text-[20px] leading-[20px] whitespace-nowrap">
          2,222,222 USDT
        </p>
        <Divider />
      </div>
    </div>
  );
}

function Stats({ totalUSDTValue, totalRaised }: any) {
  return (
    <div className="font-heading text-sd-green-300 flex w-full flex-col items-center justify-start gap-6 text-[24px] leading-[24px]">
      <div className="flex w-full items-center justify-between">
        <p className="text-nowrap">Dino Sold</p>
        <p className="w-fit text-right">
          {" "}
          {toLocalFormat(
            !isNaN(parseFloat(totalRaised))
              ? parseFloat(totalRaised).toFixed(0)
              : 0,
          )}{" "}
          / 1,500,000,000
        </p>
      </div>
      <div className="flex w-full items-center justify-between">
        <p>USDT raised</p>
        <p>
          $
          {toLocalFormat(
            !isNaN(parseFloat(totalUSDTValue))
              ? parseFloat(totalUSDTValue).toFixed(0)
              : 0,
          )}
        </p>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="bg-sd-green-200 h-[2px] w-full rounded-[2px]" />;
}

function Aim() {
  return (
    <p className="text-sd-green-400 w-full max-w-[500px] pt-10 text-center text-[16px] leading-[1.4em] font-bold">
      The aim is to sell all the tokens inserted in each stage. Only after all
      tokens have been sold do we move on to the next stage.
    </p>
  );
}
