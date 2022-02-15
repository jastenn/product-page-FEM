import { FC } from "react"
import currencyFormat from "../util/currency-format"

import { Popover, Transition } from "@headlessui/react"

import { ReactComponent as IconCart } from "../assets/images/icon-cart.svg"
import { ReactComponent as IconDelete } from "../assets/images/icon-delete.svg"
import { Cart, CartItem } from "../types"
import Button from "./Button"

interface CartPopoverProp {
  className?: string
  cart: Cart
  onRemoveItem: (item: CartItem) => void
}

const CartPopover: FC<CartPopoverProp> = ({
  onRemoveItem,
  className = "",
  cart,
}) => {
  return (
    <Popover className={`${className}`}>
      <Popover.Button className="block group focus:outline-none relative">
        {cart.items.length && (
          <span
            aria-label="items on cart"
            className="bg-orange-400 text-white rounded-full font-bold absolute -top-2 -right-2 text-xs w-[1.125rem]"
          >
            {cart.items.length}
          </span>
        )}
        <IconCart className="svg-focus flex items-center justify-center h-full w-full" />
      </Popover.Button>

      <Transition
        as={Popover.Panel}
        className="fixed top-[4.75rem] origin-top md:origin-top-right !overflow-hidden inset-x-2 bg-white drop-shadow-xl motion-reduce:!transition-none rounded-lg sm:absolute sm:top-12 md:top-[3.125rem] lg:top-14 sm:right-0 sm:inset-x-[unset] sm:w-[22.5rem]"
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <h1 className="font-bold text-base text-left p-6">Cart</h1>
        <hr />
        <div className="p-6 min-h-[10rem]">
          {cart.items.length ? (
            <ul>
              {cart.items.map((item) => (
                <li
                  className="flex items-center justify-between gap-3 w-full"
                  key={item.productName}
                >
                  <div className="aspect-square min-w-[3.13rem] relative overflow-hidden rounded">
                    <img
                      src={item.image}
                      alt={`${item.productName}'s preview`}
                      className="w-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>

                  <div className="w-full min-w-0">
                    <div className="overflow-hidden inline-block whitespace-nowrap text-ellipsis w-11/12">
                      {item.productName}
                    </div>

                    <p>
                      {currencyFormat(item.price)} x {item.quantity}{" "}
                      <strong className="font-bold">
                        {currencyFormat(item.price * item.quantity)}
                      </strong>
                    </p>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item)}
                    aria-label="remove"
                    className="p-2 group"
                  >
                    <IconDelete className="svg-focus" />
                  </button>
                </li>
              ))}

              <Button className="w-full mt-6">Checkout</Button>
            </ul>
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="font-bold text-slate-600">Your cart is Empty</p>
            </div>
          )}
        </div>
      </Transition>
    </Popover>
  )
}

export default CartPopover
