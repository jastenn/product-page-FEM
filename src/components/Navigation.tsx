/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState, useEffect, useRef } from "react"

import { useFocusWithin } from "@react-aria/interactions"

import { Cart, CartItem, User } from "../types"

import { Transition } from "@headlessui/react"

import CartPopover from "./CartPopover"

import { ReactComponent as Logo } from "../assets/images/logo.svg"
import { ReactComponent as IconMenu } from "../assets/images/icon-menu.svg"
import { ReactComponent as IconClose } from "../assets/images/icon-close.svg"

interface NavItem {
  route: string
  name: string
}

interface NavigationProps {
  items?: NavItem[]
  cart: Cart
  onRemoveCartItem: (item: CartItem) => void
  user: User
}

const navList: NavItem[] = [
  { route: "#", name: "Collection" },
  { route: "#", name: "Men" },
  { route: "#", name: "Women" },
  { route: "#", name: "About" },
  { route: "#", name: "Contact" },
]

const Navigation: FC<NavigationProps> = ({
  items = navList,
  cart,
  onRemoveCartItem,
  user,
}) => {
  const { focusWithinProps } = useFocusWithin({
    onBlurWithin() {
      hideMenu()
    },
  })

  const closeMenuBtn = useRef<HTMLButtonElement>(null)

  const [active, setActive] = useState(false)

  useEffect(() => {
    if (active) {
      closeMenuBtn.current?.focus()
    }
  }, [active])

  const showMenu = () => {
    setActive(true)
  }

  const hideMenu = () => {
    setActive(false)
  }

  const checkoutHandler = (cart: Cart) => {
    console.log(cart)
  }

  useEffect(() => {
    console.log(active)
  }, [active])
  return (
    <nav className="">
      <div className="flex items-center justify-between w-[87%] max-w-[69.5rem] mx-auto py-5 md:py-0 md:h-24 lg:h-28 md:border-b md:border-gray-200">
        <div className="flex md:h-full md:items-center justify-between">
          {/* BACKDROP */}
          <Transition
            className="bg-black/25 absolute z-10 inset-0 origin-top transition-opacity"
            onClick={hideMenu}
            show={active}
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          ></Transition>

          <button
            onClick={showMenu}
            className="md:hidden group mr-4 focus:outline-none"
            aria-label="menu"
          >
            <IconMenu aria-hidden className="svg-focus-slate" />
          </button>

          <a
            aria-label="Logo"
            className="md:mr-8 lg:mr-14 focus:outline-offset-2"
            href="#"
          >
            <Logo aria-hidden />
          </a>

          <Transition
            show={active}
            as="div"
            unmount={false}
            className={`${
              active ? "block" : "hidden"
            } absolute z-20 motion-reduce:!transition-none font-bold text-lg inset-y-0 left-0 text-left bg-white w-60 p-6 md:static md:!block md:font-normal md:text-base md:h-full md:p-0 md:w-[unset]`}
            enter="transition-transform !block duration-200"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform !block duration-200"
            leaveTo="-translate-x-full"
            leaveFrom="translate-x-0"
            {...focusWithinProps}
          >
            <button
              ref={closeMenuBtn}
              onClick={hideMenu}
              className="md:hidden focus:outline-none mb-8 group"
              aria-label="close"
            >
              <IconClose aria-hidden className="svg-focus-slate" />
            </button>

            <ul className="md:!flex md:items-baseline md:h-full md:justify-between md:gap-4 lg:gap-8 ">
              {items.map((item) => (
                <li
                  className="mt-3  md:mt-0 md:h-full relative md:flex md:items-center"
                  key={item.name}
                >
                  <a
                    className="peer md:text-slate-600 md:hover:text-slate-700 md:focus:text-slate-700 transition-colors motion-reduce:transition-none focus:opacity-60 md:focus:opacity-[unset] focus:outline-none"
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
            </ul>
          </Transition>
        </div>

        <div className="flex sm:relative justify-between items-center">
          <CartPopover
            onCheckout={checkoutHandler}
            onRemoveItem={onRemoveCartItem}
            cart={cart}
            className="mr-5"
          />
          <a
            className="h-6 focus:outline-none group sm:h-[2.125rem] md:h-[2.63rem] lg:h-[3.125rem]"
            href="#"
          >
            <img
              className="h-full group-focus:ring-2 md:group-hover:ring-2 rounded-full ring-orange-400  aspect-square"
              src={user.avatar}
              alt="user's avatar"
            />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
