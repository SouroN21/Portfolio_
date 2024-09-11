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
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing my projects, skills, and experience. Built with Next.js and TailwindCSS for a responsive and modern design.",
        stack: [{ name: "Next.js" }, { name: "TailwindCSS" }, { name: "JavaScript" }],
        image: '/project1.png',
        live: "https://portfolio-theta-five-91.vercel.app/",
        github: "https://github.com/SouroN21/Portfolio_",
    },
    {
        num: "02",
        category: "Full Stack",
        title: "Online Agriculture Store - FarmLink ",
        description: "A platform that allows farmers to sell their products directly to consumers without intermediaries. Customers can purchase fresh products straight from the farmers, ensuring quality and fair pricing. This is a complete e-commerce website designed to facilitate seamless transactions between producers and buyers.",
        stack: [{ name: "ReactJS" },{ name: "NodeJS" }, { name: "Express" }, { name: "MongoDB" }],
        image: '/project2.png',
        live: "https://liveproject2.com",
        github: "https://github.com/SouroN21/FarmLink--ITP-project",
    },
    {
        num: "03",
        category: "Full Stack",
        title: "Online Farmacy Portal ",
        description: "An online platform designed to help users easily find and order medicines from pharmacies across the island. Registered pharmacies are part of the system, allowing patients to upload their doctor’s prescriptions. Our pharmacists then review the prescriptions and process the medicine orders",
        stack: [{ name: "PHP" }, { name: "HTML" }, { name: "JS" }, { name: "CSS" }],
        image: '/project3.png',
        live: "https://liveproject3.com",
        github: "https://github.com/SouroN21/Pharmacy",
    }, 
    {
        num: "04",
        category: "Moblie Game",
        title: "Android Car Game - ",
        description: "An Android car game developed using Kotlin and Android Studio. The game features live scoring and a high score tracker with special notifications when a new high score is achieved. As the game progresses, players level up, the car speeds up, and they must avoid obstacles.",
        stack: [{ name: "Kotlin" }, { name: "Android Studio" }],
        image: '/game.jpg',
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
                    <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
                        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
                            <div className="flex flex-col gap-[30px] h-[50%] ">
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
                                                    <BsArrowUpRight className="text-3xl text-white transition-transform duration-300 group-hover:text-accent group-hover:rotate-45" />
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
                        <div className="w-full xl:w-[70%]">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                className="xl:h-[520px] mb-12 "
                                onSlideChange={handleSlideChange}
                            >
                                {projects.map((project, index) => (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-primary  border-2 border-accent rounded-lg">
                                            {/* Overlay */}
                                            <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
                                            {/* Image */}
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    layout="fill"
                                                    className="object-cover rounded-lg"
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
