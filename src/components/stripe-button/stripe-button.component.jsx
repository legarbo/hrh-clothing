import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100

const publishableKey = 'pk_test_51HykBCKqLqJen1DXDmIgnIyMpyGACVbWiuLeQwtXhOiEMNiYakpIKfegyBllKKD5WWiimyFtiVcVqIsTI0IVWbHj00xdMewSUr' 

   const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='HRH Clothing Ltd.'
      billingAddress='167 Huff Av, Cornelia Ga 30531 USA'
      shippingAddress='336 Highland Av, Cornelia Ga 30531 USA'
      image='https://svgshare.com/i/CUz.svg'
      description={`your total price is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
