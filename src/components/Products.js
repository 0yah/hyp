import React,{useState,useEffect} from 'react'
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import $ from 'jquery';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { firestore, storage, clothRef } from "../firebase";

export const Products = () => {


    let currentLocation = useLocation()
    let myNavigator = useHistory();
    const [products, setProducts] = useState([]);
    //const [sortedBy, setSortedBy] = useState();
    const [newProducts, setNewProducts] = useState([]);

    const [searchProducts, setSearchProducts] = useState([]);
  
    const getProduct = (category=null) => {
        firestore.collection('Product').onSnapshot((result) => {
            var products = []
            result.forEach((re) => {
                var product = re.data()
                product.id = re.id;
                 
                //console.log(product)
                products.push(product)
            })
            setProducts(products);

            var newProducts = products.reverse()
            setNewProducts(newProducts);
            if(category){
                var filteredMenu = products.filter(product => product.Category == category);
                setSearchProducts(filteredMenu);
                return
            }


            setSearchProducts(products);

          
            

        
            console.log()
        });

    }

    useEffect(() => {


        console.log(currentLocation.state)
        if(currentLocation.state !=undefined){

            if(currentLocation.state.Category != undefined || currentLocation.state.Category != null){
                getProduct(currentLocation.state.Category);
                return
            }
        }

        getProduct();

    }, []);


    const renderProducts = () => {
        return searchProducts.map((product) => {
            return <div className='productCard' onClick={()=>{
                myNavigator.push(`/products/${product.id}`,product);
                
            }}>
            <div className='media'>
            <img src={product.Image} alt={product.Name} />
            </div>
            <div className='content'>
            <span>{product.Name}</span><span>{product.Category}</span>
                <span>${product.Price}</span>
            </div>
        </div>
        })
    }


    const changeCategory = (value) =>{
        var filteredMenu = products.filter(product => product.Category == value.target.value);
        
        if(value.target.value === 'All'){
            filteredMenu = products
        }
        setSearchProducts(filteredMenu);
    }



    const sortedBy = (event)=>{

        var filteredMenu = products;
        
        if(event.target.value === '1'){
            //Ascending
            filteredMenu = products.sort((a,b) =>  a.Price-b.Price );
        }else if(event.target.value === '2'){
            //Descending
            filteredMenu = products.sort((a,b) =>  b.Price-a.Price );
        }

        console.log(filteredMenu)
        setSearchProducts([...filteredMenu]);
    
    };

    return <div className="productLayout">

        <div className='searchBox'>

            <input placeholder="What are you looking for?" onChange={(event)=>{
                

                if (event.target.value == '' || event.target.value == null) {
                    setSearchProducts(products)
                    return
                }
                var filteredMenu = products.filter(product => product.Name.includes(event.target.value));
        
                setSearchProducts(filteredMenu);
            }}/>
            <div id="hideDesktop" onClick={() => {
                $('.filters').css({
                    display: 'block'
                });
            }}>
                <SearchIcon />
            </div>

        </div>
        <div className="searchContent">
            <div className="filters">

                <span className='controls' id="hideDesktop" onClick={() => {
                    $('.filters').css({
                        display: 'none'
                    });
                }}>
                    <CloseIcon />
                </span>

                <span className="filterBy">
                    Category
                </span>

                <form >

                <div>
                        <input type="radio"  name="gender"  value="All"  onChange={changeCategory}/>
                        <label for="All">All</label><br />
                    </div>
                    
                    <div>
                        <input type="radio"  name="gender"  value="Shirts"  onChange={changeCategory}/>
                        <label for="Shirts">Shirts</label><br />
                    </div>


                    <div><input type="radio" name="gender" value="Caps and Hats" onChange={changeCategory}/>
                        <label for="Caps & Hats">Caps & Hats</label><br />
                    </div>

                    <div>
                        <input type="radio"  name="gender"  value="Hoodie"  onChange={changeCategory}/>
                        <label for="Hoodie">Hoodie</label><br />
                    </div>



                    <div>
                        <input type="radio" name="gender" value="Bags" onChange={changeCategory}/>
                        <label for="Bags">Bags</label><br />
                    </div>



                    <div>
                        <input type="radio" name="gender" value="Shoes" onChange={changeCategory}/>
                        <label for="Shoes">Shoes</label>
                    </div>

                    
                    <div>
                        <input type="radio" name="gender" value="Jacket" onChange={changeCategory}/>
                        <label for="Jackets">Jackets</label>
                    </div>




                </form>



            </div>
            <div className="content">
                <div className="controls">
                    <select onChange={sortedBy}>
                        <option disabled>Sort</option>
                        <option selected>Popular</option>
                        <option value='1'>Low - High</option>
                        <option value='2'>High - Low</option>
                    </select>
                </div>
                <div className="products">

                    {renderProducts()}
                    
                </div>

            </div>

        </div>

    </div>
}