import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import formImg from "../assets/sixty-black-form-image.png";
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedIn from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import dribble from '../assets/dribble.png'

import { useState } from "react";
import { useForm } from "react-hook-form"
import Button from "./Button";

const Form = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2 h-3/4 md:h-full relative bg-transparent md:bg-white    border-black flex flex-col items-center justify-center p-1 md:p-10">
        {/* <h1 className="text-white">The one stop for your needs</h1> */}
        <div className="w-full h-full  flex flex-col items-center gap-2 md:gap-0 md:items-start justify-center">
          <h1 className="text-black text-7xl md:text-9xl font-black">LET'S</h1>
          <h1 className="text-black text-6xl md:text-8xl font-black">GET IN</h1>
          <h1 className="text-black text-6xl md:text-9xl font-black" >T<span className="text-orange-600">O</span>UCH</h1>
        </div>
        {/* <Image src={formImg} alt="" width={300} height={300} /> */}
        <div className="w-full h-[40px] absolute bottom-0 flex items-center justify-center gap-6">
    
        <div className="flex flex-row items-center md:items-center justify-center gap-3">
            <Link className="font-bold" href="https://www.instagram.com/"><Image src={facebook} width={20} height={20} /></Link>
            <Link className="font-bold" href="/about"><Image src={instagram} width={20} height={20} /></Link>
            <Link className="font-bold" href="/about"><Image src={linkedIn} width={20} height={20} /></Link>
            <Link className="font-bold" href="/about"><Image src={twitter} width={20} height={20} /></Link>
            <Link className="font-bold" href="/about"><Image src={dribble} width={20} height={20} /></Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full  relative   flex flex-col items-center justify-center p-10">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="flex flex-col gap-2">
      {submitted && <p className="">Form submitted successfully!</p>}
      
      <div className="flex flex-row gap-2">
        {/* <label className="" htmlFor="name">Name:</label> */}
        <h1 className="text-sm" >I am</h1>
        <input id="name" placeholder="" autocomplete="off" className="border-b-[1px] border-black outline-none text-orange-600 w-[200px]  text-center" {...register("name", { required: "Name is required" })} />
        {errors.name && <span className="text-xs font-light text-red-600">*</span>}
        <h1 className="text-sm">, my company is</h1>
      </div>

      <div className="flex flex-row gap-2">
        {/* <label htmlFor="phone">Mobile:</label> */}
        {/* <h1>my company is called</h1> */}
        <h1 className="text-sm">called</h1>
        <input id="phone" type="text" placeholder="" autocomplete="off" className="border-b-[1px] border-black outline-none text-orange-600 w-[200px] text-center" {...register("phone", { required: "Phone is required" })} />
        {errors.phone && <span className="text-xs font-light text-red-600">*</span>}
        <h1 className="text-sm">and my</h1>
      </div>


      <div className="flex flex-row gap-2">
        {/* <label htmlFor="phone">Mobile:</label> */}
        <h1 className="text-sm">phone number is</h1>
        <input id="phone" type="number" autocomplete="off" maxlength="10" placeholder="" className="border-b-[1px] border-black outline-none text-orange-600 " {...register("phone", { required: "Phone is required" })} />
        {errors.phone && <span className="text-xs font-light text-red-600">*</span>}
        <h1 >.</h1>
      </div>

      <div className="flex flex-row gap-2">
        {/* <label htmlFor="email">Email:</label> */}
        <h1 className="text-sm">My email address is</h1>
        <input id="email" placeholder="" autocomplete="off" className="border-b-[1px] border-black outline-none text-center text-orange-600 w-[250px]" {...register("email", { required: "Email is required" })} />
        {errors.email && <span className="text-xs font-light text-red-600">*</span>}
        <h1>.</h1>
      </div>


      

      <button className="bg-orange-600 text-white p-2" type="submit">Submit</button>
    </form>
   
    
      </div>
    </div>
  );
};

export default Form;






// <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="flex flex-col gap-2 w-full">
// {submitted && <p className="">Form submitted successfully!</p>}

// <div className="flex flex-row gap-2 w-full">
//   <input id="name" placeholder="Full name" autocomplete="off" className="border-b-[1px] font-thin border-black outline-none px-2 w-full " {...register("name", { required: "Name is required" })} />
//   {errors.name && <span className="text-xs font-light text-red-600">*</span>}
  
// </div>

// <div className="flex flex-row gap-2">

//   <input id="phone" type="number" placeholder="0987654321" maxlength="10" autocomplete="off" className="border-b-[1px] px-2  font-thin border-black outline-none  w-1/2 " {...register("phone", { required: "Phone is required" })} />
//   {errors.phone && <span className="text-xs font-light text-red-600">*</span>}
//   <input id="phone" type="text" autocomplete="off"  placeholder="company name" className="border-b-[1px] px-2   font-thin border-black outline-none w-1/2" {...register("phone", { required: "Phone is required" })} />
//   {errors.phone && <span className="text-xs font-light text-red-600">*</span>}
// </div>


// <div className="flex flex-row gap-2">
//   <input id="email" placeholder="message" autocomplete="off" className="border-b-[1px] border-black outline-none font-thin  w-full" {...register("email", { required: "Email is required" })} />
//   {errors.email && <span className="text-xs font-light text-red-600">*</span>}
// </div>
// <button className="bg-orange-600 text-white p-2" type="submit">Submit</button>
// </form>