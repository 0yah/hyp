import React, { useEffect, useState } from 'react';

import CreditCardInput from 'react-credit-card-input';

export const CheckOut =()=>{

    const [cardNumber, setcardNumber] = useState(null);
    const [expiry, setexpiry] = useState(null);
    const [cvc, setcvc] = useState(null);

    const handleCardCVCChange = () =>{

    }


    const handleCardNumberChange = () =>{
        
    }

    const handleCardExpiryChange = () =>{
        
    }
    return <div className="checkoutLayout">
        <div>
            <span>Summary</span>
            <span>Total</span>
            <span>Country</span>
            <span>Apartment</span>
        </div>
        <div>
        <CreditCardInput
  cardNumberInputProps={{ value: cardNumber, onChange: handleCardNumberChange }}
  cardExpiryInputProps={{ value: expiry, onChange: handleCardExpiryChange }}
  cardCVCInputProps={{ value: cvc, onChange: handleCardCVCChange }}
  fieldClassName="input"
/>

        </div>
    </div>
}