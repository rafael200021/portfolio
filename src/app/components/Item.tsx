import React, { useState } from "react";
import { IProjeto } from "../Interfaces/IProjeto";
import Badge from "./Badge";
import Image from "next/image";
import { motion } from "framer-motion";

interface ItemProps {
  projeto: IProjeto | undefined;
  setConteudoModal: React.Dispatch<React.SetStateAction<IProjeto | undefined>>;
  setIsVisivel: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Item({
  projeto,
  setConteudoModal,
  setIsVisivel,
}: ItemProps) {
  return (
    <motion.div initial={{ opacity: 0, y:-100 }} animate={{ opacity: 1,y:0 }} transition={{ duration: 0.5 }} className="max-w-sm mx-auto rounded-xl overflow-hidden bg-white dark:bg-neutral-900 shadow-lg transform hover:scale-105 transition-transform duration-300">
      {projeto?.imagens && (
        <div className="h-48 overflow-hidden">
          <img
            src={projeto.imagens[0]}
            alt={projeto.titulo}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 flex flex-col justify-between max-h-64 h-64 overflow-y-auto  w-full">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {projeto?.titulo}
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {projeto?.linguagens?.map((linguagem, index) => (
            <span
              key={index}
              className="inline-block bg-purple-100 text-purple-600 dark:bg-purple-700 dark:text-purple-200 py-1 px-2 rounded-full text-xs font-semibold"
            >
              {linguagem}
            </span>
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {projeto?.descricao?.slice(0, 80) + "..."}
        </p>
        <div className="flex justify-end items-center">
          <button
            type="button"
            className="bg-purple-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-purple-400 dark:bg-purple-600 dark:hover:bg-purple-500 transition-colors"
            onClick={() => {
              setIsVisivel(true);
              setConteudoModal(projeto);
            }}
          >
            Open Project
          </button>
        </div>
      </div>
    </motion.div>
  );
}
