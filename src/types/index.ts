export interface Cart {
  items: CartItem[]
  total: number
}

export interface CartItem {
  image: string
  productName: string
  quantity: number
  price: number
}

export interface Product {
  brand: string
  name: string
  desc: string
  price: number
  discount?: number
  discountedPrice: number
  stock: number
}

export interface User {
  avatar: string
}
