import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { firestore, storage, clothRef } from "../firebase";

export const Details = () => {

    let currentLocation = useLocation();
    let myNavigator = useHistory();
    const [productName, setProductName] = useState();
    const [productID, setProductID] = useState();
    const [productPrice, setProductPrice] = useState();
    const [productDescription, setProductDescription] = useState();

    const [productImage, setProductImage] = useState();
    const [productCategory, setProductCategory] = useState();
    const [productSize, setProductSize] = useState();
    const [productSizes, setProductSizes] = useState([]);

    const [productColour, setProductColour] = useState();
    const [productColours, setProductColours] = useState([]);
    const [products, setProducts] = useState([]);
    const [uploadProgess, setUploadProgress] = useState(0);



    useEffect(() => {

        setProductDescription(currentLocation.state.Description);
        setProductCategory(currentLocation.state.Category);
        setProductName(currentLocation.state.Name);
        setProductPrice(currentLocation.state.Price);
        setProductID(currentLocation.state.id);
        setProductImage(currentLocation.state.Image);

        //console.log(currentLocation.state)
    }, []);
    return <div className='detailsLayout'>
        <div className='content'>
            <div className='media'>
                <img src={productImage} />
            </div>
            <div className='descriptions'>
                <span className='name'>{productName} </span>
                <span className='name'> ${productPrice}</span>
                <p className='description'>
                    {productDescription}
                </p>

                <span className='addCart'>
                    Add to Cart
                    </span>

            </div>
        </div>
    </div>
}