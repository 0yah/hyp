import { AccountCircle, ShoppingCartOutlined } from "@material-ui/icons";

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';


export const navigation = () =>{

    return         <div className="navigation">
    <nav>
        <ul id='hideMobile'>
            <li>Shirts</li>
            <li>Caps & Hats</li>
            <li>Bags</li>
            <li>Shoes</li>
        </ul>
        
        <ul id='hideDesktop'>
            <li style={{
                textAlign:'center'
            }}>Hyp</li>
        </ul>

        <ul className='controls' id='hideMobile'>
            <li>
                <SearchOutlinedIcon />
            </li>

            <li>
                <PersonOutlineOutlinedIcon />
            </li>

            <li>

                <ShoppingCartOutlined />
            </li>


        </ul>
        <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
</div>
}