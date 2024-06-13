import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import PageTransition from "@/components/PageTransition"
import StairTransition from "@/components/StairTransition"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
})

export const metadata = {
  title: "Andy Firmansyah | Homepage",
  description:
    "Andy is a front-end developer (fresh graduate) based in Indonesia 🇮🇩, with a passion for building digital services/stuffs he wants.",
  openGraph: {
    title: "Andy Firmansyah",
    siteName: "Andy Firmansyah",
    images: [
      {
        url: "https://starkzcat.vercel.app/card.png" // Must be an absolute URL
      }
    ],
    locale: "en_US",
    type: "website"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
