"use client";
import React, { useState } from "react";
import Modal from "../components/Modal";
import { IProjeto } from "../Interfaces/IProjeto";
import Item from "../components/Item";
import { motion } from "framer-motion";
import { projetos } from "../helpers/constants";

export default function Projetos() {
  const [conteudoModal, setConteudoModal] = useState<IProjeto | undefined>();
  const [isVisivel, setIsVisivel] = useState<boolean>(false);


  return (
    <div className="p-10">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-purple-500 font-bold text-2xl"
      >
        Projects
      </motion.h1>
      {isVisivel && (
        <Modal
          projeto={conteudoModal}
          isVisivel={isVisivel}
          setIsVisivel={setIsVisivel}
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {projetos.map((projeto, index) => {
          return (
            <Item
              key={index}
              projeto={projeto}
              setConteudoModal={setConteudoModal}
              setIsVisivel={setIsVisivel}
            />
          );
        })}
      </div>
    </div>
  );
}
