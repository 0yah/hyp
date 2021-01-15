import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import $ from 'jquery';
import CloseIcon from '@material-ui/icons/Close';

export const Products = () => {
    return <div className="productLayout">

        <div className='searchBox'>

            <input placeholder="What are you looking for?" />
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
                    Price
                </span>

                <form >
                    <div>
                        <input type="checkbox" value="Shirts" />
                        <label for="vehicle1">$0 - $5</label><br />
                    </div>


                    <div>                    <input type="checkbox" value="Shirts" />
                        <label for="vehicle1">$6 - $10</label><br />
                    </div>



                    <div>
                        <input type="checkbox" value="Car" />
                        <label for="vehicle1">$11 - $15</label><br />     </div>


                    <div>
                        <input type="checkbox" value="Car" />
                        <label for="vehicle1">$16 - $20</label><br />    </div>



                    <div>
                        <input type="checkbox" value="Boat" />
                        <label for="vehicle1">$20 - $25</label><br />    </div>



                </form>


                <span className="filterBy">
                    Type
                </span>

                <form >
                    <div>
                        <input type="checkbox" value="Shirts" />
                        <label for="vehicle1">Shirts</label><br />
                    </div>


                    <div>                    <input type="checkbox" value="Shirts" />
                        <label for="vehicle1">Bucket Hats</label><br />

                    </div>



                    <div>
                        <input type="checkbox" value="Car" />
                        <label for="vehicle1">Caps</label><br />
                    </div>


                    <div>
                        <input type="checkbox" value="Car" />
                        <label for="vehicle2">Bags</label><br />
                    </div>



                    <div>
                        <input type="checkbox" value="Boat" />
                        <label for="vehicle3">High Top Shoes</label>
                    </div>


                    <div>
                        <input type="checkbox" value="Boat" />
                        <label for="vehicle3">Low Top Shoes</label>
                    </div>


                </form>

                <span className="filterBy">
                    Colour
                </span>

                <form>
                    <div>
                        <input type="checkbox" value="Orange" />
                        <label for="vehicle1">White</label><br />
                    </div>


                    <div>
                        <input type="checkbox" value="Orange" />
                        <label for="vehicle1">Black</label><br />
                    </div>

                    <div>
                        <input type="checkbox" value="Orange" />
                        <label for="vehicle3">Orange</label>
                    </div>


                </form>


            </div>
            <div className="content">
                <div className="controls">
                    <select>
                        <option>Popular</option>
                        <option>Low - High</option>
                        <option>High - Low</option>
                    </select>
                </div>
                <div className="products">
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

            </div>

        </div>

    </div>
}