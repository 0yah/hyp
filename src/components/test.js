import React, { useEffect, useState } from 'react';
import { firestore } from "../firebase";
export const Test = () =>{

    const [productName, setProductName] = useState();
    const [productPrice, setProductPrice] = useState();
    const [products,setProducts] = useState([]);

    const addProduct = (data) =>{

        firestore.collection('Product').add(data).then((result)=>{
            console.log(result);
        }).catch((error)=>{
            console.log(error);
        });
    }

    const updateProduct =(id,data)=>{
        firestore.collection('Product').doc(id).update(data).then((result)=>{
            console.log(result);
     
        }).catch((error)=>{
            console.log(error);
        })
    }

    const getProduct =()=>{
        firestore.collection('Product').onSnapshot((result)=>{
            var products= []
            result.forEach((re)=>{
                console.log(re.data())
                products.push(re.data())
            })
            setProducts(products);
            console.log()
    });

    }


    useEffect(() => {
        getProduct()
        
    }, [])
    const newProduct =()=>{

        var data = {
            Name:productName,
            Price:productPrice
        }
        console.log(productName);
        addProduct(data)

    }

    const renderProducts = () =>{
        return  products.map((product)=>{
            return <div>{product.Name}</div>
        })
    }
    return <div>
{renderProducts()}

        <form>
            <input placeholder="Product Name" value={productName} onChange={(e)=>{setProductName(e.target.value)}}/>
            <input placeholder="Product Price" value={productPrice} onChange={(e)=>{setProductPrice(e.target.value)}}/>
            <button type='button' onClick={()=>{newProduct()}}>
                Add Product
            </button>
        </form>
    </div>
}