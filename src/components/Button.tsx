import { RiArrowRightUpLine } from "react-icons/ri"

const Button = ({text}:{text:string}) => {
  return (
    <button className="w-52.5 h-13.5 py-1.25 pl-2.5 flex items-center justify-between min-w-50 group bg-accent">
      <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase">
        {text}
      </div>
      <div className="w-11 h-11 bg-primary flex items-center justify-center mr-1">
        <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200"/>
      </div>
    </button>
  )
}

export default Button;