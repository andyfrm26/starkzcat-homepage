import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa"

const socials = [
  { icon: <FaGithub />, path: "https://github.com/starkzcat" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/andy-firmansyah/"
  },
  { icon: <FaInstagram />, path: "https://instagram.com/andyfrm_" }
]
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social
