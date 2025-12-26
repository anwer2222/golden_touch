import Link from "next/link"

import {
  RiFacebookBoxFill,
  RiYoutubeFill,
  RiTwitterFill,
  RiInstagramFill,

} from "react-icons/ri";

const socials = [
  {
    icon: <RiFacebookBoxFill/>,
    path:"",
  },
  {
    icon: <RiYoutubeFill/>,
    path:"",
  },
  {
    icon: <RiTwitterFill/>,
    path:"",
  },
  {
    icon: <RiInstagramFill/>,
    path:"",
  },
]

type Props ={
    containerStyles:string, iconStyles:string
}

const Socials = ({containerStyles, iconStyles}:Props) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index}  className={`${iconStyles}`}>
            {item.icon}
          </Link>
        );

      })}
    </div>
  )
}

export default Socials