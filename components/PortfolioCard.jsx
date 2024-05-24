import React from 'react';
import Image from 'next/image';
import { CgArrowsExpandUpRight } from "react-icons/cg";

const PortfolioCard = ({img, category, title, btnTitle}) => {
  return (
    <div className='flex items-start justify-center cursor-pointer w-auto md:w-screen flex-col my-5'>
        <div className='overflow-hidden w-full h-full '>
            <Image src={img} width={400} height={400} className='w-full h-full object-cover hover:scale-105  transition ease-in-out delay-75 hover:duration-300 ' alt="potfolio" />
        </div>
        <h4 className='text-xs my-2'>{category}</h4>
        <h1 className='text-xl md:text-2xl font-semibold'>{title}</h1>
        <div className='cursor-pointer text-center overflow-hidden font-light border-[1px] bg-black text-white mt-4 py-2 px-4 flex items-center'>{btnTitle}<CgArrowsExpandUpRight  className='ml-2 '/></div>
    </div>
  )
}

export default PortfolioCard;