"use client";
import React,{useState,useEffect} from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedIn from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import dribble from '../assets/dribble.png'
import { IoClose } from "react-icons/io5";
import Form from "@/components/Form";
const page = () => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    if(modal){
      document.body.style.overflow='hidden';
    } else{
      document.body.style.overflow ='auto'
    }
  }, [modal]);
  function handleClick() {
    setModal(true);
  }
  function handleCloseClick() {
    setModal(false);
  }
  return (
    <>
      <div className="px-5 2xl:px-32 pt-10">
        <div className="flex md:flex-row flex-col justify-between items-start w-full">
          <h1 className="text-xl md:text-6xl font-black w-full md:w-1/2">
            Let's work <br className="hidden md:flex" /> Together
          </h1>
          <div className="w-full text-xs md:text-base  md:w-1/3">
            <p className="my-2">
              We are digital agency that helps businesses develop immersive and
              engaging user experiences.
            </p>
            <Button handleClick={handleClick} text="let's talk with us" />
        
          </div>
        </div>
        <div className="w-full bg-black h-[2px] my-5"></div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-wrap md:flex-row gap-2 md:gap-20">
            <Link className="font-bold" href="/about">
              SERVICES
            </Link>
            <Link className="font-bold" href="/about">
              PORTFOLIO
            </Link>
            <Link className="font-bold" href="/about">
              ABOUT
            </Link>
            <Link className="font-bold" href="/about">
              BLOG
            </Link>
          </div>
          <div className="flex flex-wrap md:flex-row gap-1 md:gap-20">
            <Link className="font-bold" href="/about">
              PRIVACY
            </Link>
            <Link className="font-bold" href="/about">
              TERMS
            </Link>
          </div>
        </div>

        <div className="w-full bg-black h-[2px] my-5"></div>
        <div className="flex flex-col md:flex-row md:items-center items-start gap-3 justify-between mb-5">
          <div className="flex flex-col md:flex-row gap-20">
            <p className="font-light text-xs" >
            Copyright © 2024 <span className="font-semibold">SIXTY BLACK</span>
            </p>
          </div>
          <div className="flex flex-row items-start md:items-center justify-center gap-3 ">
            <Link className="font-bold" href="https://www.instagram.com/"><Image src={facebook} width={20} height={20} /></Link>
            <Link className="font-bold" href="/about"><Image src={instagram} width={20} height={20} /></Link>
            <Link className="font-bold" href="/about"><Image src={linkedIn} width={20} height={20} /></Link>
            <Link className="font-bold" href="/about"><Image src={twitter} width={20} height={20} /></Link>
            <Link className="font-bold" href="/about"><Image src={dribble} width={20} height={20} /></Link>
          </div>
        </div>
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
    </>
  );
};

export default page;
