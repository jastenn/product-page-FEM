import React, { FC, ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary"
}

const btnClasses = {
  primary: "bg-orange-400 md:hover:bg-orange-300 focus:bg-orange-300 ",
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`${className} font-bold text-center text-white text-base py-[1.125rem] px-12 rounded-xl transition-colors motion-reduce:transition-none ${btnClasses[variant]}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
