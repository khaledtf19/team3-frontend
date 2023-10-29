import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "gray";
  variant: "primary" | "secondary" | "tertiary";
}

const Button = ({
  children,
  size,
  variant,
  color,
  className,
  ...props
}: Props) => {
  let classes: string = "";

  if (!color) {
    color = "primary";
  }

  if (!size) {
    size = "medium";
  }

  switch (size) {
    case "small":
      classes += "px-2 py-1 text-sm";
      break;
    case "medium":
      classes += "px-4 py-2 text-base";
      break;
    case "large":
      classes += "px-8 py-4 text-lg";
      break;
  }
  if (variant === "primary") {
    switch (color) {
      case "primary":
        classes += " bg-[#FF6636] hover:bg-[#CC522B] text-white";
        break;
      case "secondary":
        classes += " bg-[#564FFD] hover:bg-[#453FCA] text-white";
        break;
      case "gray":
        classes += " bg-[#1D2026] hover:bg-[#363B47] text-white";
        break;
    }
  } else if (variant === "secondary") {
    switch (color) {
      case "primary":
        classes += " bg-[#FFEEE8] hover:bg-[#FFDDD1] text-[#FF6636]";
        break;
      case "secondary":
        classes += " bg-[#EBEBFF] hover:bg-[#CDCBFE] text-[#453FCA]";
        break;
      case "gray":
        classes += " bg-[#F5F7FA] hover:bg-[#E9EAF0] text-[#363B47]";
        break;
    }
  } else if (variant === "tertiary") {
    switch (color) {
      case "primary":
        classes += " hover:bg-[#FFEEE8] text-[#CC522B]";
        break;
      case "secondary":
        classes += " hover:bg-[#EBEBFF] text-[#453FCA]";
        break;
      case "gray":
        classes += " hover:bg-[#F5F7FA] text-[#1D2026]";
        break;
    }
  }
  return (
    <button className={cn(classes, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
