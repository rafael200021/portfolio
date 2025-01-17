"use client";
import React from "react";
import email from "@/app/assets/lotties/email.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

export default function Contato() {
  return (
    <div className="h-full lg:py-0 py-20 px-32 flex flex-col lg:flex-row gap-8 ">
      <div className="w-full lg:w-2/4 hidden lg:flex justify-center items-center">
        <Lottie animationData={email} loop={true} />
      </div>
      <div className="w-full lg:w-2/4 h-full flex justify-center items-center flex-col gap-4">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-purple-500 font-bold text-center text-5xl"
        >
          <Typewriter
            options={{
              strings: ["Contact me via LinkedIn"],
              autoStart: true,
              delay: 100,
              loop: true,
            }}
          />
        </motion.h1>
        <div className="flex gap-4">
          <motion.a
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            href="https://www.linkedin.com/in/rafael-rodrigues-de-sousa-113387190/"
            target="_blank"
            className="p-4 rounded-full mt-10 bg-purple-500 hover:bg-purple-700 hover:scale-125 duration-300 transition-all cursor-pointer flex justify-center items-center text-white"
          >
            <i className="pi pi-linkedin" style={{ fontSize: "40px" }}></i>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
