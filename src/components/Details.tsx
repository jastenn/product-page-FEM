import React, { FC, useState } from "react"

import type { Product } from "../types"
import currencyFormat from "../util/currency-format"

import { ReactComponent as IconCart } from "../assets/images/icon-cart.svg"

import Button from "./Button"
import Counter from "./Counter"

interface DetailsProps {
  product: Product
  className: string
}

const Details: FC<DetailsProps> = ({ product, className }) => {
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => {
    setQuantity((value) => {
      if (value >= product.stock) return product.stock
      else return ++value
    })
  }

  const decrementQuantity = () => {
    setQuantity((value) => {
      if (value <= 1) return 1
      else return --value
    })
  }

  return (
    <article className={`${className}`}>
      <h3 className="text-orange-400 mb-[1.125rem] font-bold text-xs uppercase tracking-wider md:mb-4">
        {product.brand}
      </h3>
      <h1 className="font-bold capitalize text-[1.75rem] mb-6 leading-[1.1] md:leading-[1.1] sm:text-[2rem] sm:mb-7 lg:mb-9 md:text-4xl lg:text-[2.75rem]">
        {product.name}
      </h1>
      <p className="text-slate-600 mb-6">{product.desc}</p>
      <div className="mb-4 md:mb-9">
        <div className="font-bold flex items-center justify-between md:block">
          <div className="flex items-center md:mb-2">
            <div aria-label="price" className="capitalize text-[1.75rem]">
              {currencyFormat(
                product.discount ? product.discountedPrice : product.price
              )}
            </div>

            {product.discount && (
              <div
                aria-label="discount"
                className="text-orange-400 text-[.875rem] bg-orange-100 px-2 rounded w-min ml-4"
              >
                {product.discount}%
              </div>
            )}
          </div>

          {product.discount && (
            <div
              aria-label="original-price"
              className="text-slate-400 text-[.875rem] line-through"
            >
              {currencyFormat(product.price)}
            </div>
          )}
        </div>
      </div>

      <div className="xm:flex">
        <Counter
          value={quantity}
          onDecrement={decrementQuantity}
          onIncrement={incrementQuantity}
          className="mb-4 xm:mb-0 xm:w-32 lg:w-[9.75rem] xm:mr-4 xm:flex-shrink-0"
        />
        <Button className="w-full flex items-center justify-center flex-shrink-[2] md:px-3">
          <IconCart className="svg-fill-white mr-3 scale-90" />
          Add to Cart
        </Button>
      </div>
    </article>
  )
}

export default Details
