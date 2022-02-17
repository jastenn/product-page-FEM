import { useEffect, useRef, useState } from "react"
import type { Cart, CartItem, Product, User } from "./types"

import { ReactComponent as IconClose } from "./assets/images/icon-close.svg"

import Navigation from "./components/Navigation"
import Carousel from "./components/Carousel"
import Details from "./components/Details"

import ProductThumbnail1 from "./assets/images/image-product-1-thumbnail.jpg"
import UserAvatar from "./assets/images/image-avatar.png"

const product: Product = {
  brand: "Sneaker Company",
  name: "Fall Limited Edition Sneakers",
  desc: "This low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything weather can offer",
  price: 250,
  discount: 50,
  discountedPrice: 125,
  stock: 10,
}

const defaultCart: Cart = {
  items: [
    {
      image: ProductThumbnail1,
      productName: "Fall Limited Edition Sneakers",
      price: 112,
      quantity: 3,
    },
  ],
  total: 0,
}

const defaultUser: User = {
  avatar: UserAvatar,
}

function App() {
  // -1 only if no slide is focused
  const [isLightboxActive, setIsLightboxActive] = useState(false)
  const [cart, setCart] = useState<Cart>(defaultCart)
  const [user] = useState<User>(defaultUser)

  const closeLightboxBtn = useRef(null)

  const removeItemHandler = (item: CartItem) => {
    setCart((curCart) => ({
      items: [
        ...curCart.items.filter(
          (curItem) => item.productName !== curItem.productName
        ),
      ],
      total: 0,
    }))
  }

  const showLightbox = () => {
    setIsLightboxActive(true)
  }

  useEffect(() => {
    if (isLightboxActive && closeLightboxBtn.current) {
      ;(closeLightboxBtn.current as HTMLButtonElement).focus()
    }
  })

  return (
    <div className="App overflow-hidden relative text-slate-700 text-[.875rem] sm:text-base">
      {isLightboxActive && (
        <div
          aria-live="polite"
          aria-relevant="additions"
          className="absolute  h-[100rem] modal inset-0 bg-black/75 z-30"
        >
          <div className="max-w-[25.375rem] pt-[5rem] md:max-w-[30.44rem] lg:max-w-[34.44rem] min-w-0 w-4/5 mx-auto">
            <button
              ref={closeLightboxBtn}
              className="group block ml-auto p-2 aspect-square mb-3"
              onClick={() => setIsLightboxActive(false)}
              aria-label="close-lightbox"
            >
              <IconClose className="svg-fill-white svg-focus-orange scale-125" />
            </button>
            <Carousel id="lightbox" focused />
          </div>
        </div>
      )}

      <Navigation
        cart={cart}
        user={user}
        onRemoveCartItem={removeItemHandler}
      />
      <main className="max-w-[63.5rem] mx-auto mb-20 md:flex md:items-center md:justify-between md:mt-16 lg:mt-[5.5rem] md:w-[87%]">
        <Carousel
          onClick={showLightbox}
          id="carousel"
          className="w-full min-w-0 md:w-[47%] xm:w-[45%]"
        />
        <Details
          product={product}
          className="w-[87%] mx-auto md:mx-[unset] md:w-[47%] xm:w-[45%] my-6 md:my-0"
        />
      </main>
    </div>
  )
}

export default App
