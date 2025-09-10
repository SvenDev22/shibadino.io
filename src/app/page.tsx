"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ImgJungle1 from "@/../public/images/jungle1.webp";
import ImgJungle2 from "@/../public/images/jungle2.webp";
import ImgJungle3 from "@/../public/images/jungle3.webp";
import ImgJungle4 from "@/../public/images/jungle4.webp";
import ImgJungle5 from "@/../public/images/jungle5.webp";
import ImgJungle6 from "@/../public/images/jungle6.webp";
import ImgJungle7 from "@/../public/images/jungle7.webp";
import ImgJungle8 from "@/../public/images/jungle8.webp";
import ImgShibadinoHero from "@/../public/images/shibadino hero.webp";

export default function Home() {
  return (
    <main className="font-primary min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Jungle Background Layers */}
      <div className="absolute inset-0">
        {/* Back layers */}
        <div className="absolute inset-0 z-[1]">
          <Image
            src={ImgJungle8}
            alt="jungle background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-[2]">
          <Image
            src={ImgJungle7}
            alt="jungle background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-[3]">
          <Image
            src={ImgJungle6}
            alt="jungle background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-[4]">
          <Image
            src={ImgJungle5}
            alt="jungle background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-[5]">
          <Image
            src={ImgJungle4}
            alt="jungle background"
            fill
            className="object-cover"
          />
        </div>
        <motion.div
          className="absolute inset-0 z-[6]"
          animate={{
            y: [0, 3, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Image
            src={ImgJungle3}
            alt="jungle background"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 z-[7]">
          <Image
            src={ImgJungle2}
            alt="jungle background"
            fill
            className="object-cover"
          />
        </div>
        {/* Front layer with subtle animation */}
        <motion.div
          className="absolute inset-0 z-[8]"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src={ImgJungle1}
            alt="jungle background"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* ShibaDino Hero at the bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[44%] z-[9] w-auto h-[400px] md:h-[600px] lg:h-[800px]">
          <Image
            src={ImgShibadinoHero}
            alt="ShibaDino Hero"
            width={1000}
            height={1000}
            className="object-contain object-bottom h-full w-auto drop-shadow-2xl"
          />
        </div>

        {/* Animated Leaves */}
        <motion.div
          className="absolute top-10 left-10 text-4xl opacity-60 z-[11]"
          animate={{
            rotate: [0, 10, -10, 0],
            y: [0, -20, 0],
            x: [0, 5, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🍃
        </motion.div>

        <motion.div
          className="absolute top-32 right-16 text-3xl opacity-50 z-[11]"
          animate={{
            rotate: [0, -15, 15, 0],
            y: [0, -15, 0],
            x: [0, -8, 8, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          🌿
        </motion.div>

        <motion.div
          className="absolute top-64 left-20 text-2xl opacity-40 z-[11]"
          animate={{
            rotate: [0, 20, -20, 0],
            y: [0, -10, 0],
            x: [0, 3, -3, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          🍃
        </motion.div>

        <motion.div
          className="absolute bottom-40 right-8 text-3xl opacity-45 z-[11]"
          animate={{
            rotate: [0, -12, 12, 0],
            y: [0, -18, 0],
            x: [0, -6, 6, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          🌿
        </motion.div>

        <motion.div
          className="absolute top-80 right-32 text-2xl opacity-35 z-[11]"
          animate={{
            rotate: [0, 25, -25, 0],
            y: [0, -12, 0],
            x: [0, 4, -4, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          🍃
        </motion.div>

        <motion.div
          className="absolute bottom-60 left-16 text-4xl opacity-55 z-[11]"
          animate={{
            rotate: [0, -18, 18, 0],
            y: [0, -25, 0],
            x: [0, -7, 7, 0]
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          🌿
        </motion.div>

        <motion.div
          className="absolute top-96 left-32 text-3xl opacity-30 z-[11]"
          animate={{
            rotate: [0, 15, -15, 0],
            y: [0, -14, 0],
            x: [0, 5, -5, 0]
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
        >
          🍃
        </motion.div>

        <motion.div
          className="absolute bottom-80 right-20 text-2xl opacity-40 z-[11]"
          animate={{
            rotate: [0, -22, 22, 0],
            y: [0, -16, 0],
            x: [0, -4, 4, 0]
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          🌿
        </motion.div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 z-[10] bg-black/30"></div>
      </div>

      {/* Main content */}
      <div className="text-center px-6 max-w-4xl mx-auto relative z-20 transform -translate-y-16 md:-translate-y-24 lg:-translate-y-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Logo/Title */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white mb-8 drop-shadow-2xl"
            style={{
              textShadow: "0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)"
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            ShibaDino
          </motion.h1>

          {/* Main message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading text-sd-green-300 mb-6 drop-shadow-xl"
              style={{
                textShadow: "0 0 15px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.6)"
              }}>
              Back to Our Roots
            </h2>

            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
                Sometimes the greatest adventures lead us back to where we started.
                ShibaDino has returned to its origins, embracing the simplicity and
                authenticity that made us who we are. Please find us at 
              </p>
           <span className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
                    www.shibadino.xyz
            </span> 
      


            </div>
        

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12"
            >
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute -top-10 -right-10 text-6xl opacity-20"
          animate={{
            rotate: 360,
            y: [-10, 10, -10]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          🦕
        </motion.div>

        <motion.div
          className="absolute -bottom-10 -left-10 text-4xl opacity-20"
          animate={{
            rotate: -360,
            y: [10, -10, 10]
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          🌿
        </motion.div>
      </div>
    </main>
  );
}
