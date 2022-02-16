import React, { FC, useState } from "react"

import { Navigation, Thumbs, FreeMode, Keyboard } from "swiper"

import SampleImage1 from "../assets/images/image-product-1.jpg"
import SampleImage2 from "../assets/images/image-product-2.jpg"
import SampleImage3 from "../assets/images/image-product-3.jpg"
import SampleImage4 from "../assets/images/image-product-4.jpg"

import SampleImage1Thumb from "../assets/images/image-product-1-thumbnail.jpg"
import SampleImage2Thumb from "../assets/images/image-product-2-thumbnail.jpg"
import SampleImage3Thumb from "../assets/images/image-product-3-thumbnail.jpg"
import SampleImage4Thumb from "../assets/images/image-product-4-thumbnail.jpg"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "swiper/css/keyboard"
import "swiper/css/free-mode"

interface CarouselProps {
  productAlt?: string
  productImages?: {
    images: string[]
    thumbnails: string[]
  }
  className?: string
  onClick?: () => void
  focused?: boolean
}

const defaultImage = {
  images: [SampleImage1, SampleImage2, SampleImage3, SampleImage4],
  thumbnails: [
    SampleImage1Thumb,
    SampleImage2Thumb,
    SampleImage3Thumb,
    SampleImage4Thumb,
  ],
}

const Carousel: FC<CarouselProps> = ({
  productImages = defaultImage,
  productAlt = "Shoe",
  className = "",
  onClick,
  focused = false,
}) => {
  const [thumbSwiper, setThumbSwiper] = useState<any>()

  return (
    <>
      <div className={`${className} ${focused && "focused-swiper "}`}>
        <div className="relative">
          <Swiper
            className={`product-carousel w-full aspect-[5/4] md:aspect-square ${
              focused && "!aspect-square rounded-xl"
            } md:w-[unset] md:rounded-xl`}
            navigation
            thumbs={{
              swiper: thumbSwiper,
              slideThumbActiveClass: "product-active-thumb",
            }}
            slidesPerView={1}
            modules={[Navigation, Thumbs, Keyboard]}
            keyboard={true}
            enabled={true}
            onClick={() => onClick && onClick()}
          >
            {(productImages.images as string[]).map((image: string) => (
              <SwiperSlide key={image}>
                <img className="w-full" src={image} alt={productAlt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Swiper
          onSwiper={setThumbSwiper}
          slidesPerView={4}
          freeMode={true}
          modules={[Thumbs, FreeMode]}
          spaceBetween={30}
          className={`product-carousel-thumb w-full mt-8 ${
            focused ? "block max-w-[27.94rem]" : "hidden"
          } md:block `}
        >
          {(productImages.thumbnails as string[]).map((image: string) => (
            <SwiperSlide key={image}>
              <div className="product-thumb-item relative">
                <img className="w-full" src={image} alt={productAlt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

/**
 */

export default Carousel
