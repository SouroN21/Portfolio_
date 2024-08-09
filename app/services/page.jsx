"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: '01',
        title: 'Web Development',
        description: 'Professional web development services, including the creation of responsive, high-performance websites using modern technologies. Specializing in creating user-friendly and visually appealing web experiences.',
        href: "https://www.fiverr.com/"
    },
    {
        num: '02',
        title: 'Content Creation',
        description: 'Expert content creation services for various platforms, including engaging copywriting, informative blog posts, and multimedia content. Tailored to enhance your brand’s presence and reach your target audience effectively.',
        href: "https://www.tiktok.com/@souron21?"
    },
];


const Services = () => {
    return (
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
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col justify-center gap-6 group">
                            <div className="flex items-center justify-between w-full">
                                <div className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover">
                                    {service.num}
                                </div>
                                <Link
                                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                    href={service.href}
                                >
                                    <BsArrowDownRight className="text-3xl text-primary" />
                                </Link>
                            </div>
                            {/* title */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                {service.title}
                            </h2>
                            {/* description */}
                            <p className="text-white/60">{service.description}</p>
                            {/* border */}
                            <div className="w-full border-b border-white/60"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
