"use client";
import Brain from '@/components/Brain';
import { motion, useInView, useScroll } from 'framer-motion';
import { ArrowBigDown } from 'lucide-react';
import React, { useRef, useState } from 'react'

function AboutPage() {

    const [hoverIndex, setHoverIndex] = useState(null);

    const containerRef = useRef();

    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillRef = useRef();
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

    const skills = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "Php",
        "Laravel",
        "MySql",
        "PostgreSQL",
        "Git",
        "GitHub",
    ];

    const jobs = [
        {
            title: "Desarrollador",
            description: "Desarrollo de aplicaciones web",
            company: "Fundación Universitaria Tecnológico Comfenalco",
            date: "2023 - 2023",
        },
        {
            title: "Desarrollador",
            description: "Desarrollo de soluciones tecnológicas",
            company: "Ikatron Smart Solutions",
            date: "2023 - 2023",
        },
        {
            title: "Desarrollador Full Stack",
            description: "Desarrollo de aplicaciones web",
            company: "Professional Diving Institute",
            date: "2023 - 2024",
        }
    ];


    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}  >

            {/* contenedor principal */}
            <div className="h-[100vh] overflow-y-scroll lg:flex" ref={containerRef}>

                {/* contenedor de texto */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">

                    {/* contenedor de sobre mi */}
                    <div className="flex flex-col gap-12 justify-center">

                        <h1 className='font-bold text-2xl'>
                            SOBRE MI
                        </h1>

                        <p className='text-lg'>
                            Soy un joven de 21 años apasionado por la tecnología desde siempre. Me caracterizo por ser honesto, creativo, responsable y divertido. Disfruto del trabajo en equipo y de aprender de mis errores para mejorar continuamente. Siempre estoy dispuesto a adquirir nuevos conocimientos y a innovar en todo lo que hago.
                        </p>

                        <span className='italic'>
                            "El verdadero viaje del descubrimiento no consiste en buscar nuevos paisajes, sino en mirar con nuevos ojos".

                            <div className='text-end'>
                                <span className=''>Marcel Proust.</span>
                            </div>

                        </span>

                        {/* about me arrow */}
                        <motion.div className=""
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        >

                            <div className="rounded-full border-4 w-12 border-red-600 hover:border-white transition-all duration-300 ease-in">
                                <ArrowBigDown size={40} className='fill-red-600 text-red-600 hover:fill-white hover:text-white transition-all duration-300 ease-in' />
                            </div>
                        </motion.div>


                    </div>

                    {/* contenedor de habilidades */}
                    <div className=" flex flex-col gap-12 justify-center" ref={skillRef}>

                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            HABILIDADES
                        </motion.h1>

                        {/* lista de habilidades */}
                        <motion.div
                            className=" flex gap-4 flex-wrap"
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                        >
                            {skills.map((skill, index) => (
                                <div key={index}
                                    className={`p-2 text-sm font-medium cursor-pointer rounded-md bg-white text-black hover:bg-black hover:text-white ${hoverIndex == index ? "hover:border-2 hover:border-white" : ""} transition-all duration-300 ease-in`}
                                    onMouseEnter={() => setHoverIndex(index)}
                                    onMouseLeave={() => setHoverIndex(null)}
                                >

                                    {skill}

                                </div>
                            ))}
                        </motion.div>

                        {/* skills arrow */}
                        <motion.div className=""
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        >
                            <div className="rounded-full border-4 w-12 border-red-600 hover:border-white transition-all duration-300 ease-in">
                                <ArrowBigDown size={40} className='fill-red-600 text-red-600 hover:fill-white hover:text-white transition-all duration-300 ease-in' />
                            </div>
                        </motion.div>
                    </div>

                    {/* contenedor de experiencia */}
                    <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>

                        <motion.h1 className='font-bold text-2xl'
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            EXPERIENCIA
                        </motion.h1>

                        {/* lista de experiencia */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            className=""
                        >
                            {jobs.map((job, index) => (
                                <div key={index} className="flex justify-between h-48">

                                    {/* left */}
                                    <div className="w-1/3">
                                        {index % 2 == 0 && (
                                            <>
                                                <div className='bg-white text-black p-3 font-semibold rounded-b-lg rounded-s-lg'>
                                                    {job.title}
                                                </div>
                                                <div className='p-3 text-sm italic'>
                                                    {job.description}
                                                </div>

                                                <div className='p-3 text-[#ff0000] text-sm font-semibold'>
                                                    {job.date}
                                                </div>
                                                <div className='px-3 rounded bg-white text-black font-semibold text-sm w-fit'>
                                                    {job.company}
                                                </div>

                                            </>
                                        )}
                                    </div>

                                    {/* center */}
                                    <div className="w-1/6 flex justify-center">
                                        <div className="w-1 h-full bg-gray-600 rounded relative">
                                            <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#ff0000] bg-black -left-2"></div>
                                        </div>
                                    </div>

                                    {/* right */}
                                    <div className="w-1/3">
                                        {index % 2 != 0 && (
                                            <>
                                                <div className='bg-white text-black p-3 font-semibold rounded-b-lg rounded-s-lg'>
                                                    {job.title}
                                                </div>
                                                <div className='p-3 text-sm italic'>
                                                    {job.description}
                                                </div>

                                                <div className='p-3 text-[#ff0000] text-sm font-semibold'>
                                                    {job.date}
                                                </div>
                                                <div className='px-3 rounded bg-white text-black font-semibold text-sm w-fit'>
                                                    {job.company}
                                                </div>

                                            </>
                                        )}
                                    </div>
                                </div>

                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* contenedor del svg */}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.main>
    );
}

export default AboutPage;