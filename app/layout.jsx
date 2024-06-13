import Head from "next/head"
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
    "Andy is a front-end developer (fresh graduate) based in Indonesia 🇮🇩, with a passion for building digital services/stuffs he wants."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Andy's homepage" />
        <meta name="author" content="Andy Firmansyah" />
        <meta name="author" content="starkzcat" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Andy Firmansyah" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:site" content="@craftzdog" /> */}
        {/* <meta name="twitter:creator" content="@craftzdog" /> */}
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Andy Firmansyah" />
        <meta name="og:title" content="Andy Firmansyah" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
      </Head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
