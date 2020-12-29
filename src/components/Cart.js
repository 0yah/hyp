import React, { useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

export const Cart = () => {

    const [region, setRegion] = useState();
    const [country, setCountry] = useState();
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [cart, setCart] = useState([]);

    const selectCountry = (val) => {
        setCountry(val);
    }

    const selectRegion = (val) => {
        setRegion(val);
    }


    const renderItems = () => {
        return         <div className="cartItems">
            {cart.map((item)=>{
                return <div className="cartItem">
                <div className="media">
                    <img src=""/>
                </div>
                <div className="content">
                    <span>
                        Product Name
                    </span>
    
                    <span>
                        Colour:
                    </span>
    
                    <span>
                        Size:
                    </span>
    
                    <div className="quantity">
                        <span><AddIcon /></span>
                        <span>1</span>
                        <span><RemoveIcon /></span>
                    </div>
                    <span>
                        Remove
                    </span>
                </div>
    
            </div>
            })}
        

    </div>
    }

    const renderFinish = () =>{
        return         <div className='finish'>
        <span>Sub Total: ${subtotal}</span>
        <span>Total: ${total}</span>
        <span className="shippingTitle">Shipping Details</span>
        <form>

            <CountryDropdown
                value={country}
                classes="country"
                onChange={(val) => selectCountry(val)} />
            <RegionDropdown
                country={country}
                value={region}
                classes="country"
                onChange={(val) => selectRegion(val)} />
            <input placeholder="Street Address" />
            <input placeholder="Apt,Suite, Building"/>
            

        </form>
        <span className="checkout">Check Out</span>
        <div>
            <span className="shippingTitle">Help</span>
            <p>By contacting Client Service, I agree to my data being transferred outside of my local country/region.
                Our support desk will get back to you as soon as possible.
            </p>
            <div className='contacts'>
                <span>Call: +254712345678</span>
                <span>E-Mail: demoapp@naylan.app</span>

            </div>
        </div>
    </div>
    }

    const renderEmptyCart = () =>{
        return <div className='default'>
        <div className='main'>
            <span>Your Cart is empty</span>
        </div>
        <div>
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

    </div>
    }
    return <div className='cartLayout'>
        
        {cart.length==0?renderEmptyCart():renderItems()}
        {cart.length==0?null:renderFinish()}

    </div>
}