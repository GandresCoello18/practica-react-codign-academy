import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

export const useCartStore = create(devtools(
    persist(
        set => ({
            cart: [],

            addToCart: (product) => set(state => ({ cart: [...state.cart, product] })),
            removeToCart: (productId) => set(state => ({ cart: state.cart.filter(product => product.id !== productId) })),
            clearCart: () => set(() => ({ cart: [] }))
        })
    ), {
        name: 'cart-products'
    }
));
