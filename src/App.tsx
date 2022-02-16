import { useState } from "react"
import type { Product } from "./types"

import { ReactComponent as IconClose } from "./assets/images/icon-close.svg"

import Navigation from "./components/Navigation"
import Carousel from "./components/Carousel"
import Details from "./components/Details"

const product: Product = {
  brand: "Sneaker Company",
  name: "Fall Limited Edition Sneakers",
  desc: "This low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything weather can offer",
  price: 250,
  discount: 50,
  discountedPrice: 125,
  stock: 10,
}

function App() {
  const [isPreviewFocused, setIsPreviewFocused] = useState(false)
  const carouselClickHandler = () => {
    setIsPreviewFocused(true)
  }

  return (
    <div className="App overflow-hidden relative text-slate-700 text-[.875rem] sm:text-base">
      {isPreviewFocused && (
        <div className="absolute  h-[100rem] modal inset-0 bg-black/75 z-30">
          <div className="max-w-[25.375rem] pt-[5rem] md:max-w-[30.44rem] lg:max-w-[34.44rem] min-w-0 w-4/5 mx-auto">
            <button
              className="group block ml-auto p-2 aspect-square mb-3"
              onClick={() => setIsPreviewFocused(false)}
            >
              <IconClose className="svg-fill-white svg-focus-orange scale-125" />
            </button>
            <Carousel focused />
          </div>
        </div>
      )}

      <Navigation />
      <div className="max-w-[63.5rem] mx-auto mb-20 md:flex md:items-center md:justify-between md:mt-16 lg:mt-[5.5rem] md:w-[87%]">
        <Carousel
          onClick={carouselClickHandler}
          className="w-full min-w-0 md:w-[47%] xm:w-[45%]"
        />
        <Details
          product={product}
          className="w-[87%] mx-auto md:mx-[unset] md:w-[47%] xm:w-[45%] my-6 md:my-0"
        />
      </div>
    </div>
  )
}

export default App
