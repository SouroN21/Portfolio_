"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextJs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
    title: 'About me',
    description: "Description about yourself.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Naveen",
        },
        {
            fieldName: "Age",
            fieldValue: "25",
        },
        {
            fieldName: "Location",
            fieldValue: "Sri Lanka",
        },
        {
            fieldName: "Experience",
            fieldValue: "3 years",
        },
        {
            fieldName: "Email",
            fieldValue: "example@example.com",
        },
        {
            fieldName: "Phone",
            fieldValue: "+123456789",
        },
        {
            fieldName: "Website",
            fieldValue: "https://example.com",
        },
        {
            fieldName: "LinkedIn",
            fieldValue: "https://linkedin.com/in/example",
        },
    ]
};

// experience data
const experience = {
    icon: 'badge.svg',
    title: "My Experience",
    description: "Details about your professional experience.",
    items: [
        {
            company: "Company 1",
            position: "Position 1",
            duration: "Duration 1",
        },
        {
            company: "Company 2",
            position: "Position 2",
            duration: "Duration 2",
        },
        {
            company: "Company 1",
            position: "Position 1",
            duration: "Duration 1",
        },
        {
            company: "Company 2",
            position: "Position 2",
            duration: "Duration 2",
        },
        {
            company: "Company 1",
            position: "Position 1",
            duration: "Duration 1",
        },
        {
            company: "Company 2",
            position: "Position 2",
            duration: "Duration 2",
        },
        {
            company: "Company 2",
            position: "Position 2",
            duration: "Duration 2",
        },
        {
            company: "Company 1",
            position: "Position 1",
            duration: "Duration 1",
        },
        {
            company: "Company 2",
            position: "Position 2",
            duration: "Duration 2",
        },
        // More experience items...
    ]
};

// education data
const education = {
    icon: 'badge.svg',
    title: "My Education",
    description: "Details about your educational background.",
    items: [
        {
            institute: "Institute 1",
            degree: "Degree 1",
            duration: "Duration 1",
        },
        {
            institute: "Institute 2",
            degree: "Degree 2",
            duration: "Duration 2",
        },
        {
            institute: "Institute 2",
            degree: "Degree 2",
            duration: "Duration 2",
        },
        {
            institute: "Institute 2",
            degree: "Degree 2",
            duration: "Duration 2",
        },
        {
            institute: "Institute 2",
            degree: "Degree 2",
            duration: "Duration 2",
        },
        {
            institute: "Institute 1",
            degree: "Degree 1",
            duration: "Duration 1",
        },
        {
            institute: "Institute 2",
            degree: "Degree 2",
            duration: "Duration 2",
        },
        // More education items...
    ]
};

// skill data
const skill = {
    title: "My Skills",
    description: "Description about your skills.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS3",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        // More skills...
    ]
};


const Resume = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
                }}
                className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
            >
                <div className="container mx-auto">
                    <Tabs
                        defaultValue="experience"
                        className="flex flex-col xl:flex-row gap-[60px]"
                    >
                        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 mt-1">
                            <TabsTrigger value="experience">Experience</TabsTrigger>
                            <TabsTrigger value="education">Education</TabsTrigger>
                            <TabsTrigger value="skill">Skills</TabsTrigger>
                            <TabsTrigger value="about">About</TabsTrigger>
                        </TabsList>

                        <div className="min-h-[70vh] w-full">
                            <TabsContent value="experience" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{experience.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {experience.description}
                                    </p>
                                    <ScrollArea className="h-[400px] ">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {experience.items.map((item, index) => {
                                                return(
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                                    );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>

                            <TabsContent value="education" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{education.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {education.description}
                                    </p>
                                    <ScrollArea className="h-[400px] ">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {education.items.map((item, index) => {
                                                return(
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institute}</p>
                                                    </div>
                                                </li>
                                            );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>

                            <TabsContent value="skill" className="w-full h-full">
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                                        <h3 className="text-4xl font-bold">{skill.title}</h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                            {skill.description}
                                        </p>
                                    </div>
                                    <ScrollArea className="h-[400px] ">
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                        {skill.skillList.map((item, index) => (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                                                                {item.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{item.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        ))}
                                    </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>

                            <TabsContent value="about" className="w-full text-center xl:text-left">
                                <div className="flex flex-col gap-[30px]">
                                    <h3 className="text-4xl font-bold">{about.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {about.description}
                                    </p>
                                    <ScrollArea className="h-[400px] ">
                                    <ul className="grid w-auto grid-cols-1 mx-auto xl:grid-cols-2 gap-y-6 gap-x-6 xl:mx-0">
                                        {about.info.map((item, index) => (
                                            <li
                                            key={index}
                                            className="flex flex-col xl:flex-row items-center justify-center xl:justify-start gap-2 xl:gap-4 p-4 bg-[#232329] rounded-lg shadow-md w-auto"
                                            >
                                                <span className="text-sm text-white/60">{item.fieldName}:</span>
                                                <span className="text-lg font-semibold text-white">{item.fieldValue}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </motion.div>
        </div>
    );
};

export default Resume;