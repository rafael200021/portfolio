import { motion, MotionProps } from "framer-motion";
import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        whileHover={{ scale: 1.1 }}
        onClick={onClick}
        className="border border-gray-200 dark:border-white p-4 font-bold rounded-lg hover:bg-purple-500 w-52 hover:text-white duration-300 transition-all text-gray-400 dark:text-white"
      >
        {children}
      </motion.button>
    </>
  );
}
