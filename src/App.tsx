import type { Product } from "./types"
import Navigation from "./components/Navigation"
import Carousel from "./components/Carousel"
import Details from "./components/Details"
import { Swiper, SwiperSlide } from "swiper/react"

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
  return (
    <div className="App text-slate-700 text-[.875rem] sm:text-base">
      <Navigation />
      <div className="max-w-[63.5rem] mx-auto mb-20 md:flex md:items-center md:justify-between md:mt-16 lg:mt-[5.5rem] md:w-[87%]">
        <Carousel className="w-full min-w-0 md:w-[47%] xm:w-[45%]" />
        <Details
          product={product}
          className="w-[87%] mx-auto md:mx-[unset] md:w-[47%] xm:w-[45%] my-6 md:my-0"
        />
      </div>
    </div>
  )
}

export default App
