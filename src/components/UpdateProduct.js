import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { firestore, storage, clothRef } from "../firebase";
export const UpdateProduct = () => {

    let currentLocation = useLocation();
    let myNavigator = useHistory();
    const [productName, setProductName] = useState();
    const [productID, setProductID] = useState();
    const [productPrice, setProductPrice] = useState();
    const [productImage, setProductImage] = useState();
    const [productCategory, setProductCategory] = useState();
    const [productSize, setProductSize] = useState();
    const [productSizes, setProductSizes] = useState([]);

    const [productColour, setProductColour] = useState();
    const [productColours, setProductColours] = useState([]);
    const [products, setProducts] = useState([]);
    const [uploadProgess, setUploadProgress] = useState(0);


    const addProduct = (data) => {

        firestore.collection('Product').add(data).then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
    }

    const updateProduct = (id, data) => {
        firestore.collection('Product').doc(id).update(data).then((result) => {
            console.log(result);

        }).catch((error) => {
            console.log(error);
        });
    }

    const deleteProduct = () =>{
        firestore.collection('Product').doc(productID).delete().then((result) => {
            console.log(result);
            myNavigator.goBack();

        }).catch((error) => {
            console.log(error);
        });
    }

    const getProduct = () => {
        firestore.collection('Product').onSnapshot((result) => {
            var products = []
            result.forEach((re) => {
                console.log(re.data())
                products.push(re.data())
            })
            setProducts(products);
            console.log()
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

        setProductCategory(currentLocation.state.Category);
        setProductName(currentLocation.state.Name);
        setProductPrice(currentLocation.state.Price);
        setProductID(currentLocation.state.id);
        console.log(currentLocation.state)
    }, []);

    const modifyProduct = () =>{

    }
    
    const renderProducts = () => {
        return products.map((product) => {
            return <div>{product.Name}</div>
        })
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
    return <div>

        <form>
            <input type="text" placeholder="Product Name" value={productName} onChange={(e) => { setProductName(e.target.value) }} />
            <input placeholder="Product Price" value={productPrice} onChange={(e) => { setProductPrice(e.target.value) }} />



            <input type="file" onChange={(e) => { setProductImage(e.target.files[0]) }} />
            <select onChange={(e) => { setProductCategory(e.target.value) }} value={productCategory}>
            <option disabled selected>Category</option>
              
                <option value="Shirts">Shirts</option>
                <option value="Caps and Hats">Bags</option>
                <option value="Bags">Bag</option>
                <option value="Shoes">Shoe</option>
            </select>

            <button type='button' onClick={() => { modifyProduct() }}>
                Update Product
            </button>

            <button type="button" onClick={()=>{
deleteProduct()
            }}>

                Delete Product
            </button>
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