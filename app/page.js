"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";
import { useState } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import Teams from "@/components/Teams";
import Hero from "@/components/Hero";
import { IoClose } from "react-icons/io5";
import exiles from "../assets/exiles.png";
import Form from "@/components/Form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Home() {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
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
      <main className="font-unbounded ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            x: { duration: 2 },
          }}
          className="flex items-center justify-center flex-col px-5"
        >
          <div className="flex flex-col h-screen justify-center  ">
            <motion.div className="font-black text-left text-2xl sm:text-4xl md:text-8xl ">
              Next Generation
            </motion.div>
            <div className="text-right  font-black text-2xl md:text-8xl ">
              Digital Agency
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-right">
              <p className="text-xs  text-center md:text-right md:text-base my-4 ">
                We are digital agency that helps businesses develop immersive
                and engaging user experiences that drive top level growth.
              </p>
              <Button handleClick={handleClick} text="Hello" />
            </div>
          </div>
        </motion.div>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white w-full h-screen fixed top-0 z-50 p-10"
          >
            <IoClose
              className="w-10 cursor-pointer absolute top-5 right-5 font-bold text-4xl"
              onClick={handleCloseClick}
            />
            <Form />
          </motion.div>
        )}
        <motion.div className="px-5 py-5 md:py-0  2xl:px-32 flex flex-col md:flex-row items-center justify-between gap-1 md:gap-10 bg-black min-h-full w-full">
          <div className="w-full  md:w-1/2 -mt-7 h-auto">
            <Image
              width={800}
              height={500}
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <motion.div className="w-full  md:w-1/2">
            <h1 className="font-semibold text-xl md:text-3xl my-5 text-white">
              Unlock Revenue Growth for Your Business
            </h1>
            <p className="text-white text-sm md:text-base font-thin">
              If you ask our clients what it's like working with 36, they'll
              talk about how much we care about their success. For us, real
              relationships fuel real success. We love building brands. <br />{" "}
              <br /> We are a creative agency working with brands building
              insightful strategy, creating unique designs and crafting value.
            </p>
          </motion.div>
        </motion.div>

        <div>
          <motion.div className="px-5 2xl:px-32 pt-10 mt-10 flex flex-col items-center justify-center h-1/2">
            <h1 className="font-bold text-2xl text-center md:text-3xl">
              What We Can <br /> do for Our Clients
            </h1>
            
          <div className="mt-8 w-full md:w-1/2">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className='text-lg'>Branding Design</AccordionTrigger>
                <AccordionContent className='font-light text-sm'>
                text-black text-sm md:text-base font-thin 
                  We design high quality websites that make users come back for
                  more. A good website tells a story that will make users fully
                  immerse themselves operating
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className='text-lg'>Is it styled?</AccordionTrigger>
                <AccordionContent className='font-light text-sm'>
                text-black text-sm md:text-base font-thin 
                  We design high quality websites that make users come back for
                  more. A good website tells a story that will make users fully
                  immerse themselves operating
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className='text-lg'>Is it animated?</AccordionTrigger>
                <AccordionContent className='font-light text-sm'>
                text-black text-sm md:text-base font-thin 
                  We design high quality websites that make users come back for
                  more. A good website tells a story that will make users fully
                  immerse themselves operating
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className='text-lg'>Is it?</AccordionTrigger>
                <AccordionContent className='font-light text-sm'>
                text-black text-sm md:text-base font-thin 
                  We design high quality websites that make users come back for
                  more. A good website tells a story that will make users fully
                  immerse themselves operating
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>
          </motion.div>
        </div>
        <div className="px-5 2xl:px-32 gap-5 pt-10 flex flex-col  items-center">
          <div className="flex flex-col md:flex-row gap-5 items-center w-full justify-between">
            <PortfolioCard
              img="https://images.unsplash.com/photo-1619852182277-79aa23f82c8e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              category="Branding / Design / Development"
              title="Exiles - Web based gaming platform"
              btnTitle="View Project"
            />
            <PortfolioCard
              img="https://images.unsplash.com/photo-1619852182277-79aa23f82c8e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              category="Branding / Design / Development"
              title="Centarius - Web based gaming platform"
              btnTitle="View Project"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5 items-center w-full justify-between">
            <PortfolioCard
              img="https://images.unsplash.com/photo-1506377711776-dbdc2f3c20d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              category="Branding / Development / Marketing"
              title="Decentralized Lending Platform for Students"
              btnTitle="View Project"
            />
            <PortfolioCard
              img="https://images.unsplash.com/photo-1506377711776-dbdc2f3c20d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              category="Branding / Development / Marketing"
              title="Decentralized Lending Platform for Students"
              btnTitle="View Project"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5 items-center w-full justify-between">
            <PortfolioCard
              img="https://images.unsplash.com/photo-1506377711776-dbdc2f3c20d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              category="Branding / Development / Marketing"
              title="Decentralized Lending Platform for Students"
              btnTitle="View Project"
            />
            <PortfolioCard
              img="https://images.unsplash.com/photo-1506377711776-dbdc2f3c20d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              category="Branding / Development / Marketing"
              title="Decentralized Lending Platform for Students"
              btnTitle="View Project"
            />
          </div>
        </div>
        {/* <motion.div className="mt-10">
        <h1 className="font-bold text-2xl text-center md:text-5xl">
          Our Team Behind The Studio
        </h1>
        <Teams />
      </motion.div> */}
      </main>
    </>
  );
}
