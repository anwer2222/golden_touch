import { RiArrowRightUpLine } from "react-icons/ri"

const Button = ({ text }: { text: string }) => {
  // Convert text to lowercase to make the check case-insensitive
  const lowerText = text.toLowerCase();

  // Determine the target ID based on the keyword within the string
  let href = "#";
  if (lowerText.includes("gallery")) href = "#projects";
  else if (lowerText.includes("contact")) href = "#contact";
  else if (lowerText.includes("work")) href = "#contact";
  else if (lowerText.includes("about")) href = "#about";

  return (
    <a 
      href={href} 
      className="w-52.5 h-13.5 py-1.25 pl-2.5 flex items-center justify-between min-w-50 group bg-accent cursor-pointer no-underline"
    >
      <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase">
        {text}
      </div>
      <div className="w-11 h-11 bg-primary flex items-center justify-center mr-1">
        <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200"/>
      </div>
    </a>
  )
}

export default Button;