"use client"
import { articles } from "@/lib/articles"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const Article = ({ params }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="container mx-auto mb-10"
    >
      {articles
        .filter(filteredArticle => filteredArticle.id === params.articleId)
        .map((article, index) => (
          <div
            key={index}
            className="flex justify-center items-center flex-col px-10 pt-16 pb-12 bg-[#232329] rounded-xl relative"
          >
            <span className="absolute top-6 left-10 flex gap-3">
              <Link
                href="/articles"
                className="hover:text-accent transition-all"
              >
                Articles
              </Link>
              &gt;
              <span className="text-gray-500 pointer-events-none">
                {article.category}
              </span>
            </span>
            <Image
              src={article.image}
              alt=""
              width={700}
              height={300}
              className="text-center rounded-lg object-cover mt-5"
            />
            <h3 className="text-center md:text-4xl text-2xl font-bold mt-10 mb-5">
              {article.title}
            </h3>
            <div className="flex flex-col gap-5">
              {article.content.map((paragraph, index) => (
                <p key={index} className="indent-14 text-justify">
                  {paragraph.pg}
                </p>
              ))}
            </div>
          </div>
        ))}
    </motion.div>
  )
}

export default Article
