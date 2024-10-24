import { motion } from "framer-motion";
import { ProgressBar } from "primereact/progressbar";
import React from "react";

interface HabilidadeItemProps {
  nome: string;
  valor: number;
}

export default function HabilidadeItem({ valor, nome }: HabilidadeItemProps) {
  return (
    <div className="w-full  mt-4">
      <div className="flex justify-between items-center">
        <span className="font-medium text-lg">{nome}</span>
        <span className="text-sm font-semibold">{valor}%</span>
      </div>
      <div className="relative w-full bg-gray-200 rounded-full h-4 mt-1">
        <motion.div
          className="bg-purple-500 h-4 rounded-full"
          initial={{ width: 0 }} 
          animate={{ width: `${valor}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          aria-valuenow={valor}
        ></motion.div>
      </div>
    </div>
  );
}
