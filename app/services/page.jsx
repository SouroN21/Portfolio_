"use client"

import {BaArrowDownRight, BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

const services=[
    {
        num:'01',
        title:'Web Develope',
        description:'fdsfd',
        href:""
    },
    {
        num:'02',
        title:'UI',
        description:'fdsfd',
        href:""
    },
    {
        num:'03',
        title:'CEO',
        description:'fdsfd',
        href:""
    },
    {
        num:'04',
        title:'LOGO',
        description:'fdsfd',
        href:""
    },
];

import { motion } from "framer-motion";
import { Key } from "lucide-react";

const Services=()=>{
    return <div>
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
            {services.map((service,index)=>{
                return (
                    <div Key={index} className="flex flex-col justify-center gap-6 group">
                        <div className="flex items-center justify-between w-full">
                            <div className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover">{service.num}</div>
                            <Link 
                                className="w-[70px] h-[70px] rounded-full bg-white
                                group-hover:bg-accent transition-all duration-500 flex
                                justify-center items-center hover:rotate-45"
                                href={service.href}>
                                <BsArrowDownRight className="text-3xl text-primary"/>
                            </Link>
                        </div>
                        {/* title */}
                        <h2 className="text-[42px] font-bold leading-none text-white
                        group-hover:text-accent transition-all duration-500">{service.title}</h2>
                        {/* desiciption */}
                        <p className="text-white/60">{service.description}</p>
                        {/* border */}
                        <div className="w-full border-b border-white/60"></div>
                    </div>
                );
            })}
        </motion.div>

    </div>
</section></div>;
};

export default Services;