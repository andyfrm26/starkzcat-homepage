"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@radix-ui/react-tooltip"
import Link from "next/link"
import Image from "next/image"
import ProjectSliderBtns from "@/components/ProjectSliderBtns"

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "SIMABA Website",
    description:
      "It was a student orientation website of my faculty, and I worked in group of 7 great developers.",
    stack: [
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "Inertia.js" },
      { name: "Laravel" }
    ],
    image: "/assets/projects/simaba.png",
    live: "",
    github: ""
  },
  {
    num: "02",
    category: "fullstack",
    title: "BAPENDA Website",
    description:
      "This was my intern project at Local Government Office (BAPENDA), and being an 'indie' Full-stack for the first time.",
    stack: [{ name: "Bootstrap" }, { name: "Laravel" }, { name: "MySQL" }],
    image: "/assets/projects/bapenda.png",
    live: "https://bapenda.jemberkab.go.id/",
    github: "https://github.com/starkzcat/bapenda-website"
  },
  {
    num: "03",
    category: "fullstack",
    title: "WOWSI Website",
    description:
      "It was also a student orientation website, but it's for the study program (prodi). Worked in group of 3.",
    stack: [{ name: "Bootstrap" }, { name: "CodeIgniter" }, { name: "MySQL" }],
    image: "/assets/projects/wowsi.png",
    live: "",
    github: ""
  },
  {
    num: "04",
    category: "frontend",
    title: "ISOMETRIX Website",
    description:
      "ISOMETRIX stands for 'Information System Entrepreneur and IT Expo', and it was a website for the registration to the event.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Javascript" },
      { name: "CodeIgniter" }
    ],
    image: "/assets/projects/isometrix.png",
    live: "",
    github: ""
  }
]

const Projects = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = swiper => {
    // get current slide index
    const currentIndex = swiper.realIndex
    // update project state based on current slide index
    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project title */}
              <div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {project.title}
                </h2>
                <div className="flex items-center gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/60 capitalize italic tracking-wider">
                    {project.category} project
                  </p>
                </div>
              </div>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-3 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              {/* <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Respository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              loop={true}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 backdrop-blur-sm">
                    {/* OVERLAY */}
                    <div className="absolute top0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider button */}
              <ProjectSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
