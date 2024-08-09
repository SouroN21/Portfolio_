"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaPhp,
    FaJava,
    FaReact,
    FaNodeJs,
    FaGithub,
    FaDatabase,
    FaAndroid,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs ,SiMongodb} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// Function to calculate age 
const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    let ageYears = today.getFullYear() - birthDateObj.getFullYear();
    let ageDays = Math.floor((today - birthDateObj) / (1000 * 60 * 60 * 24));

    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
        ageYears--;
        ageDays = Math.floor((today - new Date(today.getFullYear() - 1, birthDateObj.getMonth(), birthDateObj.getDate())) / (1000 * 60 * 60 * 24));
    } else {
        const thisYearBirthday = new Date(today.getFullYear(), birthDateObj.getMonth(), birthDateObj.getDate());
        ageDays = Math.floor((today - thisYearBirthday) / (1000 * 60 * 60 * 24));
    }

    return `${ageYears} years and ${ageDays} days`;
};

const birthDate = '2002-07-03';

// about data
const about = {
    title: 'About me.. ',
    description: "I am Naveen Dasunpriya, a passionate IT undergraduate with a keen interest in technology and design. I strive to blend creativity with technical skills to build innovative solutions and explore new opportunities in the tech world.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Naveen Dasunpriya",
        },
        {
            fieldName: "Age",
            fieldValue: calculateAge(birthDate),
        },
        {
            fieldName: "Location",
            fieldValue: "Sri Lanka",
        },
        {
            fieldName: "Education",
            fieldValue: "BSc(Hons)in Information Technology (UG)",
        },
        {
            fieldName: "Email",
            fieldValue: "dasunpriyanaveen@gmail.com",
        },
        {
            fieldName: "Phone",
            fieldValue: "+94766876368",
        },
       /* {
            fieldName: "Website",
            fieldValue: "https://example.com",
        },
        {
            fieldName: "LinkedIn",
            fieldValue: "https://linkedin.com/in/example",
        },*/
    ]
};

// experience data
const experience = {
    icon: 'badge.svg',
    title: "My Experience",
    description: "Details about my project experience.",
    items: [
        {
            project: "Online Pharmacy Portal",
            role: "Medicine Store Management",
            technology: "HTML, CSS, JS, MySQL",
            description: "A group project where I worked on managing the medicine store component."
        },
        {
            project: "Online Help Desk",
            role: "FAQ Management",
            technology: "Java (OOP, MVC Architecture)",
            description: "A group project where I developed the FAQ management component using Java, OOP, and MVC architecture."
        } ,{
            project: "Online Agriculture Store",
            role: "Shopping Cart, Order Management, and Payment",
            technology: "MERN (MongoDB, Express, React, Node.js)",
            description: "A group project that implemented a real shopping cart, dynamic order confirmation emails, and order details. And Payment Gateway"
        },
        {
            project: "My Portfolio Website",
            role: "Full Stack Developer",
            technology: "Next.js",
            description: "A personal project where I created my portfolio website using Next.js and hosted it on Vercel."
        }, {
            project: "Car Game",
            role: "Developer",
            technology: "Android Studio, Kotlin",
            description: "A mobile app development project completed at SLIIT, where I created a car game using Android Studio and Kotlin."
        },         
    ]
};

// education data
const education = {
    icon: 'badge.svg',
    title: "My Education",
    description: "Details about my academic journey and achievements.",
    items: [
        {
            institute: "SLIIT",
            degree: "BSc(Hons)in Information Technology",
            duration: "",
        },
        {
            institute: "Badulla Centran Collage",
            degree: "GCE A/L",
            duration: "Physical Stream - 2C and 1S",
        },
        {
            institute: "Badulla Central College",
            degree: "GCE O/L",
            duration: "A9 Passes",
        },
        /*{
            institute: "Badulla Dharmadutha Collage",
            degree: "Grade 5 Scholership",
            duration: "155",
        },*/
       
    ]
};

// skill data
const skill = {
    title: "My Skills",
    description: "Explore the range of technologies and tools I've mastered. From front-end development to back-end solutions, these skills highlight my proficiency and passion for coding.",
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
            icon: <FaGithub />,
            name: "GitHub",
        },
        {
            icon: <FaAndroid />,
            name: "AndroidStudio",
        },
        {
            icon: <FaPhp />,
            name: "PHP",
        },
        {
            icon: <SiNextdotjs />,
            name: "NextJs",
        },
        {
            icon: <FaJava />,
            name: "JAVA",
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <SiTailwindcss />,
            name: "TailWindCSS",
        },
        {
            icon: <FaNodeJs />,
            name: "NodeJS",
        },
        {
            icon: <SiMongodb />,
            name: "MongoBD",
        },
        {
            icon: <FaDatabase />,
            name: "MySQL",
        },
        
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
                className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
            >
                <div className="container mx-auto ">
                    <Tabs
                        defaultValue="experience"
                        className="flex flex-col xl:flex-row gap-[60px] "
                    >
                        <TabsList className="flex flex-col w-full max-w-[350px] mx-auto xl:mx-0 gap-6 mt-1">
                            <TabsTrigger value="experience">Experience</TabsTrigger>
                            <TabsTrigger value="education">Education</TabsTrigger>
                            <TabsTrigger value="skill">Skills</TabsTrigger>
                            <TabsTrigger value="about">About</TabsTrigger>
                        </TabsList>

                <div className="min-h-[85vh] w-full  ">
                        
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#232329] p-6 rounded-lg shadow-lg flex flex-col gap-4 lg:gap-6 "
                                            >
                                                <h4 className="text-2xl font-semibold text-accent">{item.project}</h4>
                                                <p className="text-lg font-medium text-white">{item.role}</p>
                                                <p className="text-sm text-gray-400">{item.technology}</p>
                                                <p className="text-base text-white mt-2">{item.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                            <TabsContent value="education" className="w-full h-full">
                                <div className="flex flex-col gap-[30px] ">
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
                                                    <h3 className="text-xl max-w-[500px] min-h-[60px] text-center lg:text-left font-bold">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[10px] h-[10px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institute}</p>
                                                    </div>
                                                    <span className="">{item.duration}</span>
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

                            <TabsContent value="about" className="w-full text-center xl:text-left ">
                                <div className="flex flex-col gap-[30px] ">
                                    <h3 className="text-4xl font-bold ml-16">{about.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-2 xl:mx-0 ">
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
                                                <span className="text-base font-semibold text-white">{item.fieldValue}</span>
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