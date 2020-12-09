import CartItemTypes from './cart-item.types'

const INITIAL_STATE = {
  count: 0
}

const cartItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartItemTypes.INCREMENT_CART_ITEM:
      return {
        ...state,
        count: state.count + 1
      }
    case CartItemTypes.DECREMENT_CART_ITEM:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

export default cartItemReducer
