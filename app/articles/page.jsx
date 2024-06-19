"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

import { articles } from "@/lib/articles"

const Articles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
    >
      <div className="container mx-auto pb-10">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={`/articles/${article.id}`}
              className=" min-h-[260px] py-6 px-10 rounded-xl flex flex-col justify-center gap-1 bg-cover bg-center relative overflow-hidden hover:scale-[1.02] transition-all group"
              style={{ backgroundImage: `url(${article.image})` }}
            >
              <span className="w-full h-full bg-[#232329]/60 absolute top-0 left-0 z-10 group-hover:bg-[#232329]/80 transition-all"></span>
              <div className="z-20">
                <h3 className="text-xl max-w-[410px] min-h-[60px]">
                  {article.title}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/60">{article.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default Articles
