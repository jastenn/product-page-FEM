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
