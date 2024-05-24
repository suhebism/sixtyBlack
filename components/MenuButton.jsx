"use client";
import React from "react";
import { motion } from "framer-motion";

const MenuButton = () => {
  return (
    <motion.div
      className="bg-black w-10 h-10 md:hidden flex flex-wrap items-center justify-center rounded-md gap-1 "
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
        <div className="w-3 h-3 bg-white rounded-md"></div>
        <div className="w-3 h-3 bg-white rounded-md"></div>
        <div className="w-3 h-3 bg-white rounded-md"></div>
        <div className="w-3 h-3 bg-white rounded-md"></div>
    </motion.div>
  );
};

export default MenuButton;
