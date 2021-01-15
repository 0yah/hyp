import React, { useEffect, useState } from 'react';

import CreditCardInput from 'react-credit-card-input';

export const CheckOut = () => {

    const [cardNumber, setcardNumber] = useState(null);
    const [expiry, setexpiry] = useState(null);
    const [cvc, setcvc] = useState(null);

    const handleCardCVCChange = (value) => {
        console.log(value.target.value);
    }


    const handleCardNumberChange = (value) => {
        console.log(value.target.value);
    }

    const handleCardExpiryChange = (value) => {
        console.log(value.target.value);
    }
    return <div className="checkoutLayout">

        <div className="myCheckout">
        <div className="summary">
            <span>Summary</span>
            <ul>
                <li>1 X Colour Cloth $5</li>
            </ul>
            <span>Total: </span>
            <span>Country</span>
            <span>Apartment</span>
        </div>
        <div className="payment">
            <CreditCardInput
                cardNumberInputProps={{ value: cardNumber, onChange: handleCardNumberChange }}
                cardExpiryInputProps={{ value: expiry, onChange: handleCardExpiryChange }}
                cardCVCInputProps={{ value: cvc, onChange: handleCardCVCChange }}
                fieldClassName="input"
            />

            <span className="placeOrder">
                Place Order
</span>

        </div>
        </div>

        <div className="products">
                <div className="product">
                    <div className="media">
                        <img src="" alt="fd" />
                    </div>
                    <span className="content"> Shirts</span>
                </div>


                <div className="product">
                    <div className="media">
                        <img src="" alt="fd" />
                    </div>
                    <span className="content"> Shirts</span>
                </div>


                <div className="product">
                    <div className="media">
                        <img src="" alt="fd" />
                    </div>
                    <span className="content"> Shirts</span>
                </div>

                <div className="product">
                    <div className="media">
                        <img src="" alt="fd" />
                    </div>
                    <span className="content"> Shirts</span>
                </div>

            </div>
    </div>
}