"use client"
import React from 'react'
import { motion} from "framer-motion";

const Button = ({text,handleClick}) => {
  return (
    <motion.div 
    whileHover={{ scale: 1.2, rotate: -10 }}
    whileTap={{
      scale: 0.8,
      rotate: -10,
    }}            
    onClick={handleClick}
    className="bg-black w-44 h-12 text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-2 cursor-pointer">
      
      {text}
      {handleClick}
    </motion.div>
  )
}

export default Button
