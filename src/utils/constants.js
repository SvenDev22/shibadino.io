import { PublicKey } from "@solana/web3.js";
//presale program id
export const presaleProgramId = new PublicKey(
  "2tFfBvRfgyXXRo6eaRijAmpvC69zCdqTzGy7z8B8cTX3",
);

//associate Program Id
export const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new PublicKey(
  "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
);

//token
export const mint = new PublicKey(
  "EgoQYRxgKhkzUdK9pcXg2WHi7ZcBA2X3NXY3JUH3odKm",
);
//usdt token
export const usdtMint = new PublicKey(
  "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
);
// chainlink price feed
export const chainlinkFeed = new PublicKey(
  // "99B2bTijsU6f1GCT73HmdR7HCFFjGMBcPZY6jZ96ynrR" // testnet
  "CH31Xns5z3M1cTAbKW34jcxPPciazARpijcHj9rxtemt", //mainnet
);
// chainlink program id
export const chainlinkProgram = new PublicKey(
  "HEvSKofvBgfaexv23kMabbYqxasxU3mQ4ibBMEmJWHny",
);
//Admin Publickey ;
export const adminPublickey = new PublicKey(
  "FnU9FkCK44tJVPtahS8DgyVrb4TCTRqocR2CR88H7dt",
  // "FnU9FkCK44tJVPtahS8DgyVrb4TCTRqocR2CR88H7dt"
  // "DrLT8BVndHwxJaKBY3fHdMbcBFfG2Vy66c28kLgS2pe1"
  // "5dMg7H3ZGTc5x5KdP4ofrenvxb4vc3ASLixsF55BZM6s"
);

export const toLocalFormat = (val) => {
  return val?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
