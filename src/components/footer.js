import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


export const footer=()=>{
    return <div className='footerLayout'>
        <div>
            <nav>
                <ul>
                <li>Shop</li>
                <li>Shirts</li>
                <li>Caps & Hats</li>
                <li>Bags</li>
                <li>Shoes</li>
                <li>Clearance</li>

                </ul>
            </nav>
        </div>
        <div>
            <nav>
                <ul>
                <li>Support</li>
                <li>Refunds</li>
                <li>Warranty</li>
                <li>Order Status</li>
                <li>F.A.Q</li>
                </ul>
            </nav>
        </div>
        <div>
            <nav>
                <ul>
                <li>About Us</li>
                <li>Terms of sale</li>
                <li>Careers</li>
                </ul>
            </nav>
        </div>
        <div>
            <span>Social</span>
            <div className='socialMedia'>
                <span></span>
            </div>
        </div>
    </div>
}