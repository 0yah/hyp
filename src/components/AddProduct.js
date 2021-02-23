import React, { useEffect, useState } from 'react';

import { firestore, storage, clothRef } from "../firebase";
export const AddProduct = () => {

    const [productName, setProductName] = useState();
    const [productDescription, setProductDescription] = useState();
    const [productPrice, setProductPrice] = useState();
    const [productImage, setProductImage] = useState(null);
    const [productCategory, setProductCategory] = useState();
    const [productSize, setProductSize] = useState();
    const [productSizes, setProductSizes] = useState([]);

    const [productColour, setProductColour] = useState();
    const [productColours, setProductColours] = useState([]);
    const [products, setProducts] = useState([]);
    const [uploadProgess, setUploadProgress] = useState(null);
    const [uploadFile, setUploadFile] = useState(null);


    const addProduct = (data) => {

        firestore.collection('Product').add(data).then((result) => {
            console.log(result);

            setProductName();
            setProductPrice();
            setProductImage(null);
            setProductCategory(null);

            setTimeout(()=>{
                setUploadProgress(null);
            },5000);



        }).catch((error) => {
            console.log(error);
        });
    }

    

    const uploadImage = (name, data) => {
        //console.log(name,data)
        return new Promise((resolve, reject) => {
            var uploadTask = clothRef.child(`${name}.png`).put(data);

            uploadTask.on('state_changed', (snapshot) => {

                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(progress);

            }, (error) => {
                reject(error);
            }, (complete) => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {

                    //console.log(complete);
                    resolve(downloadURL);
                });
            })

        });
    }
    useEffect(() => {
       // getProduct()

    }, [])
    const newProduct = () => {

        if(productImage!=null){
            uploadImage(productName, productImage).then((downloadURL) => {
                var data = {
                    Name: productName,
                    Price: productPrice,
                    Image: downloadURL,
                    Category: productCategory,
                    Description:productDescription
                }
                console.log(data)
                addProduct(data);
    
            }).catch((error) => {
                console.log(error);
            });
    
        }


    }


    const renderProductColours = () => {
        return productColours.map((colour,index) => {
            return <span onClick={()=>{
                var cart = productColours;
                cart.splice(index, 1);
                setProductColours(productColours => [cart]);
        
                console.log(cart);

            }}>{colour}</span>
        })
    }


    const renderProductSizes = () => {
        return productSizes.map((size,index) => {
            return <span onClick={()=>{
                var cart = productSizes;
                cart.splice(index, 1);
                setProductColours(productColours => [cart]);
        
            }}>{size}</span>
        })
    }
    return <div className="addProduct">

        <form>
            <input type="text" placeholder="Product Name" value={productName} onChange={(e) => { setProductName(e.target.value) }} />
            <input placeholder="Product Price" value={productPrice} onChange={(e) => { setProductPrice(e.target.value) }} />

            <input type="text" placeholder="Product Description" value={productDescription} onChange={(e) => { setProductDescription(e.target.value) }} />
          

            <input type="file" onChange={(e) => { setUploadFile(URL.createObjectURL(e.target.files[0])); setProductImage(e.target.files[0]); }} />
            
            <div className="preview">
                <img src={uploadFile} alt={productName}/>

            </div>
            <select onChange={(e) => { setProductCategory(e.target.value) }}>
            <option disabled selected>Category</option>
              
                <option value="Shirts">Shirts</option>
                <option value="Hoodie">Hoodie</option>
                <option value="Caps and Hats">Caps & Hats</option>
                <option value="Bags">Bag</option>
                <option value="Shoes">Shoe</option>
                <option value="Jacket">Jacket</option>
            </select>

            <button type='button' onClick={() => { newProduct() }}>
                Add Product
            </button>
            <span>{uploadProgess?`${uploadProgess}% Uploaded`:''}</span>
        </form>
    </div>
}

/**
 


            <input type="text" placeholder="Product Colour" value={productColour} onChange={(e) => { setProductColour(e.target.value) }} />
            <span onClick={() => {
                setProductColour('');
                setProductColours(productColours => [...productColours, productColour]);
            }}>Add Colour</span>

            <div>
                {renderProductColours()}
            </div>

            <input type="text" placeholder="Product Size" value={productSize} onChange={(e) => { setProductSize(e.target.value) }} />
            <span onClick={() => {

                setProductSize('');
                setProductSizes(productSizes => [...productSizes, productSize]);
            }}>Add Size</span>

            <div>
                {renderProductSizes()}
            </div>
 */