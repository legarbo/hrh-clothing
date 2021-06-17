import { useState } from "react";
import { useHistory } from 'react-router-dom'


import Row from "./prebuilt/row";
import BillingDetailsFields from "./prebuilt/billing-details-fields";
import SubmitButton from "./prebuilt/submit-button";


const CheckoutForm = ({ total }) => {
  const [isProcessing, setProcessingTo] = useState(false);

  let history = useHistory()

  function handleFormSubmit() {
    setProcessingTo(true)
    history.push('/success')
    setProcessingTo(false)
  }

  return (
    <>
    <form onSubmit={handleFormSubmit}>
        <Row>
         <BillingDetailsFields />
          {/* TIP always disable your submit button while processing payments */}
           <SubmitButton disabled={isProcessing}>
            {isProcessing ? '...processing' : `Pay $${total}`}
          </SubmitButton>
        </Row>
      </form>
    </>
  );
};

export default CheckoutForm;
