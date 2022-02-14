import React, { FC, Fragment } from "react"

import { Popover, Transition } from "@headlessui/react"

import { ReactComponent as IconCart } from "../assets/images/icon-cart.svg"

interface CartPopoverProp {
  className?: string
}

const CartPopover: FC<CartPopoverProp> = ({ className = "" }) => {
  return (
    <Popover className={`${className}`}>
      <Popover.Button className="block group focus:outline-none">
        <IconCart className="svg-focus flex items-center justify-center h-full w-full" />
      </Popover.Button>
      <Transition
        as={Popover.Panel}
        className="fixed top-[4.75rem] inset-x-2 bg-white drop-shadow-xl motion-reduce:transition-none rounded-lg min-h-[16rem] sm:absolute sm:top-12 md:top-[3.125rem] lg:top-14 sm:right-0 sm:inset-x-[unset] sm:w-[22.5rem]"
        enter="transition-all ease-out duration-200"
        enterFrom="opacity-0 !min-h-[0rem]"
        enterTo="opacity-100 !min-h-[16rem]"
        leave="transition-all ease-in duration-150"
        leaveFrom="opacity-100 !min-h-[16rem]"
        leaveTo="opacity-0 !min-h-[0rem]"
      >
        <div>
          <h1 className="font-bold text-base text-left p-6">Cart</h1>
          <hr />
        </div>
      </Transition>
    </Popover>
  )
}

export default CartPopover
