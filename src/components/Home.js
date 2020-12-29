import { AccountCircle, ShoppingCartOutlined } from "@material-ui/icons";

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { footer } from "./footer";
export const Home = () => {

    const renderProducts = () => {
        return;
    }
    return <div className="homeLayout">






        <div className='caurosel'>
            <div className='item'>
                <div></div>

            </div>

            <div className='item'>
                2
            </div>

            <div className='item'>
                3
            </div>

            <div className='item'>
                <div className='media'>

                </div>
                <div className='content'>
                    <span className='title'>
                        Product Name
                </span>
                    <p>
                        Product Descritpion
                </p>
                </div>
            </div>

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
            <div className='productCard'>
                <div className='media'>
                    <img src="" alt="Product Imag" />
                </div>
                <div className='content'>
                    <span>Product Name</span><span>Product Category</span>
                    <span>Product Price</span>
                </div>
            </div>


            <div className='productCard'>
                <div className='media'>
                    <img src="" alt="Product Imag" />
                </div>
                <div className='content'>
                    <span>Product Name</span><span>Product Category</span>
                    <span>Product Price</span>
                </div>
            </div>

            <div className='productCard'>
                <div className='media'>
                    <img src="" alt="Product Imag" />
                </div>
                <div className='content'>
                    <span>Product Name</span><span>Product Category</span>
                    <span>Product Price</span>
                </div>
            </div>

            <div className='productCard'>
                <div className='media'>
                    <img src="" alt="Product Imag" />
                </div>
                <div className='content'>
                    <span>Product Name</span><span>Product Category</span>
                    <span>Product Price</span>
                </div>
            </div>

            <div className='productCard'>
                <div className='media'>
                    <img src="" alt="Product Imag" />
                </div>
                <div className='content'>
                    <span>Product Name</span><span>Product Category</span>
                    <span>Product Price</span>
                </div>
            </div>
            <div className='productCard'>
                <div className='media'>
                    <img src="" alt="Product Imag" />
                </div>
                <div className='content'>
                    <span>Product Name</span><span>Product Category</span>
                    <span>Product Price</span>
                </div>
            </div>
        </div>

        
        <div className='newContent'>
        <div className='contentHeader'>
            New Arrivals
        </div>

        <div className='newProducts'>
        <div className='newProductCard'>
                    <div className='media'>
                        <img src='' alt="newProduct" />
                    </div>
                    <div className='content'>
                        <span>
                            Product Name
                        </span>
                    </div>
            </div>

            <div className='newProductCard'>
                    <div className='media'>
                        <img src='' alt="newProduct" />
                    </div>
                    <div className='content'>
                        <span>
                            Product Name
                        </span>
                    </div>
            </div>
        </div>
        </div>
{footer()}

    </div>
}