"use client"
import React,{useState,useEffect} from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../assets/sixtBlack-logo.png";
import Button from '../components/Button';
import { IoClose } from "react-icons/io5";
import Form from "@/components/Form";
const page = () => {
  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState(false);
useEffect(() => {
  if(modal){
    document.body.style.overflow='hidden';
  } else{
    document.body.style.overflow ='auto'
  }
}, [modal]);
useEffect(() => {
  if(toggle){
    document.body.style.overflow='hidden';
  } else{
    document.body.style.overflow ='auto'
  }
}, [toggle]);
function handleClick() {
  setModal(true);
}
function handleCloseClick() {
  setModal(false);
}
  return (
    <>
    <div className="flex justify-between items-center px-5 2xl:px-32  z-10 py-1  w-screen h-14 bg-white fixed top-0">

      <Link href='/' className="font-extrabold">SixtyBlack</Link>
      <div className=" flex-row items-center gap-10 hidden md:flex">
        <Link className="text-black" href="/">
          Home
        </Link>
        <Link className="text-black" href="/about">
          Projects
        </Link>
        <Link className="text-black" href="/about">
          Services
        </Link>
        <Link className="text-black" href="/about">
          About
        </Link>
        <Button handleClick={handleClick} text="Call" />
        
       
      </div>
      <motion.div
      className="bg-black text-white w-[40px] h-[40px] md:hidden flex flex-col items-center justify-center rounded-md gap-[2px] "
      whileHover={{ rotate: 90 }}
      whileTap={{ scale: 0.9,  rotate: 180 }}
      onClick={()=>setToggle(true)}
    >
      <div className="flex gap-1">
        <div className="w-[10px] h-[10px] bg-white rounded-md"></div>
        <div className="w-[10px] h-[10px] bg-white rounded-md"></div>
      </div>
      <Image src={logo} width={25} height={25} alt="sixty-black-logo"/>
      <div className="flex gap-1">
        <div className="w-[10px] h-[10px] bg-white rounded-md"></div>
        <div className="w-[10px] h-[10px] bg-white rounded-md"></div>
      </div>
    </motion.div>
    </div>
    {modal && (
         <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         className="bg-white w-full h-screen fixed top-0 z-50 p-10 ">
           <IoClose className="w-10 cursor-pointer absolute top-5 right-5 font-bold text-4xl" onClick={handleCloseClick}/>
           <Form/>
         </motion.div>
      )}
    {
      toggle && (
        <motion.div 
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="fixed w-screen h-screen bg-black flex flex-col items-center justify-center gap-3 z-10">
          <h1 className="text-white cursor-pointer absolute top-2 left-2 " onClick={()=>setToggle(false)}>Close</h1>
          <motion.div className="flex flex-col items-center justify-center gap-3">
          <Link className="text-white" href="/about">
          Projects
        </Link>
        <Link className="text-white" href="/about">
          Services
        </Link>
        <Link className="text-white" href="/blog">
          Blogs
        </Link>
        <Link className="text-white" href="/about">
          About
        </Link>
          </motion.div>
          <div className="bg-white w-[80%] h-[2px]"></div>
          <p className="text-white">Frazer town Bangalore</p>
          <p className="text-white">support@sixtyblack.com</p>
          <div>

          </div>
        </motion.div>
      )
    }
    </>
  );
};

export default page;
