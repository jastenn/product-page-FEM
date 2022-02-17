import { ButtonHTMLAttributes, FC } from "react"

import { ReactComponent as IconPlus } from "../assets/images/icon-plus.svg"
import { ReactComponent as IconMinus } from "../assets/images/icon-minus.svg"

interface CounterProps {
  value: number
  onIncrement: () => void
  onDecrement: () => void
  className?: string
}

const CtrlButton: FC<
  ButtonHTMLAttributes<HTMLButtonElement> & { onClick: () => void }
> = ({ children, className, ...props }) => (
  <button
    {...props}
    className={`group focus:outline-none w-14 flex items-center justify-center aspect-square ${className}`}
    type="button"
  >
    {children}
  </button>
)

const Counter: FC<CounterProps> = ({
  value,
  onIncrement,
  onDecrement,
  className = "",
}) => {
  const incrementHandler = () => {
    onIncrement()
  }

  const decrementHandler = () => {
    onDecrement()
  }

  return (
    <div
      className={`flex items-stretch justify-between bg-slate-300 min-h-[3.5rem] rounded-xl ${className}`}
    >
      <CtrlButton onClick={incrementHandler}>
        <IconPlus className="svg-focus-orange svg-fill-orange" />
      </CtrlButton>
      <div
        className="font-bold text-[.875rem] self-center text-stale-600"
        aria-label="Quantity"
        aria-live="polite"
      >
        {value}
      </div>
      <CtrlButton onClick={decrementHandler}>
        <IconMinus className="svg-focus-orange svg-fill-orange" />
      </CtrlButton>
    </div>
  )
}

export default Counter
