/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from "react"

import { Transition } from "@headlessui/react"

import CartPopover from "./CartPopover"

import { ReactComponent as Logo } from "../assets/images/logo.svg"
import { ReactComponent as IconMenu } from "../assets/images/icon-menu.svg"
import { ReactComponent as IconClose } from "../assets/images/icon-close.svg"
import ImgAvatar from "../assets/images/image-avatar.png"

interface NavItem {
  route: string
  name: string
}

interface NavigationProps {
  items?: NavItem[]
}

const navList: NavItem[] = [
  { route: "#", name: "Collection" },
  { route: "#", name: "Men" },
  { route: "#", name: "Women" },
  { route: "#", name: "About" },
  { route: "#", name: "Contact" },
]

/**
 * TODO:
 *  -- Position popover correctly on breakpoint sm and up
 *  -- Fix the layout on navigation item on breakpoint md and up
 */

const Navigation: FC<NavigationProps> = ({ items = navList }) => {
  const [active, setActive] = useState(false)

  const menuHandler = () => {
    setActive((prev) => !prev)
  }
  return (
    <nav className="">
      <div className="flex items-center justify-between w-[87%] max-w-5xl mx-auto py-5 md:py-0 md:h-24 lg:h-28 md:border-b md:border-gray-200">
        <div className="flex md:h-full md:items-center justify-between">
          {/* BACKDROP */}
          <Transition
            className="bg-black/25 absolute inset-0 origin-top transition-opacity"
            onClick={menuHandler}
            show={active}
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          ></Transition>

          <button
            onClick={menuHandler}
            className="md:hidden focus:outline-none group mr-4"
            aria-label="menu"
          >
            <IconMenu className="svg-focus" />
          </button>

          <a className="md:mr-8 lg:mr-14" href="#">
            <Logo />
          </a>

          <Transition
            show={active}
            as="ul"
            unmount={false}
            className={`${
              active ? "block" : "hidden"
            } absolute motion-reduce:!transition-none font-bold text-lg inset-y-0 left-0 text-left bg-white w-60 p-6 md:static md:!flex md:items-baseline md:justify-between md:p-0 md:gap-4 lg:gap-8 md:font-normal md:text-base md:h-full md:w-[unset]`}
            enter="transition-transform !block duration-200"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform !block duration-200"
            leaveTo="-translate-x-full"
            leaveFrom="translate-x-0"
          >
            <button
              onClick={menuHandler}
              className="md:hidden mb-8 group focus:outline-none"
              aria-label="close"
            >
              <IconClose className="svg-focus" />
            </button>

            {items.map((item) => (
              <li
                className="mt-3 md:mt-0 md:h-full relative md:flex md:items-center"
                key={item.name}
              >
                <a
                  className="peer focus:opacity-75 md:focus:opacity-[unset] focus:outline-none"
                  href={item.route}
                >
                  {item.name}
                </a>
                <span
                  className="hidden md:block peer-hover:opacity-100 peer-focus:opacity-100 absolute bg-orange-400 h-1 bottom-0 w-full opacity-0 transition-opacity motion-reduce:transition-none"
                  aria-hidden
                ></span>
              </li>
            ))}
          </Transition>
        </div>

        <div className="flex sm:relative justify-between items-center">
          <CartPopover className="mr-5" />
          <a
            className="h-6 focus:outline-none group sm:h-[2.125rem] md:h-[2.63rem] lg:h-[3.125rem]"
            href="#"
          >
            <img
              className="h-full group-focus:ring-2 md:group-hover:ring-2 rounded-full ring-orange-400  aspect-square"
              src={ImgAvatar}
              alt="user's avatar"
            />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
