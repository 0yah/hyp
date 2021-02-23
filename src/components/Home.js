import { AccountCircle, ShoppingCartOutlined } from "@material-ui/icons";

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { footer } from "./footer";
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { firestore, storage, clothRef } from "../firebase";
import bg from '../images/bg.jpg'
import mobilebg from '../images/mobile-bg.jpg'

export const Home = () => {

    let currentLocation = useLocation()
    let myNavigator = useHistory();
    const [products, setProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);

  
    const getProduct = () => {
        firestore.collection('Product').onSnapshot((result) => {
            var products = []
            result.forEach((re) => {
                var product = re.data()
                product.id = re.id;
                 
                //console.log(product)
                products.push(product)
            })
            setProducts(products);
            console.log(products.slice(-1, -2))
            var newProducts = products.reverse()
            setNewProducts(newProducts);
            console.log()
        });

    }


    const renderProducts = () => {
        return products.slice(0, 4).map((product) => {
            return <div className='productCard' onClick={()=>{
                myNavigator.push(`/products/${product.id}`,product);
                
            }}>
            <div className='media'>
                <img src={product.Image} alt="Product Imag" />
            </div>
            <div className='content'>
                <span>{product.Name}</span><span>{product.Category}</span>
                <span>${product.Price}</span>
            </div>
        </div>
        })
    }


    const renderNewProducts = ()=>{

        return newProducts.slice(0, 2).map((product,index)=>{
            return <div className='newProductCard'>
                <img src={product.Image} alt={product.Name} />
            
            <div className='content'>
            <span>{product.Name}</span>
            </div>
    </div>
        })

    }
    useEffect(() => {
        getProduct()

    }, []);
    return <div className="homeLayout">






        <div className='caurosel'>

                    <img src={bg} id="hideMobile"/>
                    <img src={mobilebg} id="hideDesktop"/>
                
                

            <div className='left'>

            </div>

            <div className='right'>

            </div>

            <div className='indicators'>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div className='contentHeader'>
            Popular
        </div>


        <div className='products'>

            {renderProducts()}

            <div className='productCard' id="hideMobile" onClick={()=>{
                myNavigator.push(`/products`);
                
            }}>
            <div className='viewMore' >
             </div>
        </div>
        </div>

        <div className="viewMorePopular"  id="hideDesktop" onClick={()=>{
                myNavigator.push(`/products`);
                
            }}>
            <span>View more</span>
        </div>

        
        <div className='newContent'>
        <div className='contentHeader'>
            New Arrivals
        </div>

        <div className='newProducts'>

            {renderNewProducts()}
        
        </div>
        </div>

    </div>
}