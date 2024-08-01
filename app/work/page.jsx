"use client";

import { motion } from "framer-motion"; 
import React, { useState } from "react"; 

import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css"; 

import { BsArrowUpRight, BsGithub } from "react-icons/bs"; 

import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger 
} from "@radix-ui/react-tooltip";

import Link from "next/link"; 
import Image from "next/image"; 
import BtnWork from "@/components/BtnWork";

const projects = [
    {
        num: "01",
        category: "Frontend",
        title: "Project 1",
        description: "Description for Description for Project 1Description for Project 1Description for Project 1Description for Project 1Description for Project 1Project 1",
        stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
        image: '/image.png',
        live: "https://liveproject1.com",
        github: "https://github.com/project1",
    },
    {
        num: "02",
        category: "Backend",
        title: "Project 2",
        description: "Description for Project 2",
        stack: [{ name: "Node.js" }, { name: "Express" }, { name: "MongoDB" }],
        image: '/image.png',
        live: "https://liveproject2.com",
        github: "https://github.com/project2",
    },
    {
        num: "03",
        category: "Full Stack",
        title: "Project 3",
        description: "Description for Project 3",
        stack: [{ name: "React" }, { name: "Node.js" }, { name: "PostgreSQL" }],
        image: '/image.png',
        live: "https://liveproject3.com",
        github: "https://github.com/project3",
    }, 
    
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <div>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: "easeIn" } }}
                className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
            >
                <div className="container mx-auto">
                    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                            <div className="flex flex-col gap-[30px] h-[50%]">
                                {/* Outline num */}
                                <div className="font-extrabold leading-none text-transparent text-8xl text-outline">
                                    {project.num}
                                </div>
                                {/* Project category */}
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                    {project.category}
                                </h2>
                                {/* Description */}
                                <p className="text-white/60">{project.description}</p>
                                {/* Stack */}
                                <ul className="flex gap-4">
                                    {project.stack.map((item, index) => (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    ))}
                                </ul>
                                {/* Border */}
                                <div className="border border-white"></div>
                                {/* Buttons */}
                                <div className="flex items-center gap-4">
                                    {/* Live project */}
                                    {project.live && (
                                        <Link href={project.live}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>Live Project</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </Link>
                                    )}
                                    {/* GitHub repo */}
                                    {project.github && (
                                        <Link href={project.github}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>GitHub Repo</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="w-full xl:w-[50%]">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                className="xl:h-[520px] mb-12"
                                onSlideChange={handleSlideChange}
                            >
                                {projects.map((project, index) => (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            {/* Overlay */}
                                            <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
                                            {/* Image */}
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    className="object-cover"
                                                    alt={project.title}
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default Work;
