"use client";
import React, { useState } from "react";
import HabilidadesProgramacao from "./components/HabilidadesProgramacao";
import HabilidadesIdiomas from "./components/HabilidadesIdiomas";
import { motion } from "framer-motion";
import Button from "../components/Button";

export default function Habilidades() {
  const [habilidade, setHabilidade] = useState(1);

  return (
    <main className="flex bg-white dark:bg-neutral-900 flex-col lg:h-full h-max justify-center items-center w-full px-10 py-20 lg:p-20">
      <div className="w-full flex lg:flex-row flex-col text-neutral-500  text-sm justify-center items-center gap-5 mb-10">
        <Button onClick={() => setHabilidade(1)}>Programming Languages</Button>
        <Button onClick={() => setHabilidade(2)}>Languagues</Button>
      </div>
      <div className="flex flex-col lg:flex-row mt-20 gap-20">
        <div className="w-full lg:w-2/4">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-purple-500 font-bold text-5xl"
          >
            Skills
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mt-10 text-gray-400 dark:text-white"
          >
            Currently, my focus has been on improving skills in web systems
            development. In this regard, I&apos;ve been delving deep into the
            React library for front-end development, while for back-end
            development, I&apos;ve been opting for the Django framework. Lastly,
            I&apos;m using Flutter for mobile application development.
          </motion.p>
        </div>

        <div className="w-full lg:w-2/4 font-bold text-purple-500 items-center flex flex-col ">
          {habilidade == 1 ? (
            <HabilidadesProgramacao />
          ) : (
            <HabilidadesIdiomas />
          )}
        </div>
      </div>
    </main>
  );
}
