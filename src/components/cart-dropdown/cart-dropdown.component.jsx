import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.sass'

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div classname='cart-items' />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

export default CartDropdown
