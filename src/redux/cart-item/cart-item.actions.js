import CartItemTypes from './cart-items.types'

export const incrementCartItem = () => ({
    type: CartItemTypes.INCREMENT_CART_ITEM
  })

export const decrementCartItem = () => ({
    type: CartItemTypes.DECREMENT_CART_ITEM
  })
