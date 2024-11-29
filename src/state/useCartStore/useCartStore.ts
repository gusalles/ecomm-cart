import { Product } from '@/services'
import { create } from 'zustand'

type CartStoreType = {
  cart: Product[]
  addToCart: (cart: Product) => void
  removeFromCart: (id: string) => void
  removeAllProductFromCart: (id: string) => void
}

export const useCartStore = create<CartStoreType>((set) => ({
  cart: [],
  addToCart: (cart) => set((state) => {
    const newCart = [...state.cart]
    const productIdx = newCart.findIndex((c) => c.id === cart.id);

    if (productIdx !== -1) {
      newCart[productIdx].quantity += 1;
    } else {
      newCart.push({...cart, quantity: 1 })
    }
    return { cart: newCart } 
  }),
  removeFromCart: (id) => set((state) => {
    const newCart = [...state.cart]
    const productIdx = newCart.findIndex((c) => c.id === id);

    if (productIdx !== -1 && newCart[productIdx].quantity > 1) {
      newCart[productIdx].quantity -= 1; 
      return { cart: newCart };
    }

    return { cart: state.cart.filter((c) => c.id !== id) };
  }),
  removeAllProductFromCart: (id) => set((state) => ({ cart: state.cart.filter((c) => c.id !== id) }))
}));