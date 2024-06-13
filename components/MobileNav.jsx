"use client"

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries } from "react-icons/ci"
import { useEffect, useState } from "react"

const links = [
  {
    name: "home",
    path: "/"
  },
  // {
  //     name: 'services',
  //     path: '/services'
  // },
  {
    name: "resume",
    path: "/resume"
  },
  {
    name: "projects",
    path: "/projects"
  },
  {
    name: "contact",
    path: "/contact"
  }
]

const MobileNav = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-48 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Andy<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
