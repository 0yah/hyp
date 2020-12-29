import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


export const footer=()=>{
    return <div className='footerLayout'>
        <div className="footerCategory">
                <span className="title">Shop</span>
                <span>Shirts</span>
                <span>Caps & Hats</span>
                <span>Bags</span>
                <span>Shoes</span>
                <span>Clearance</span>

        </div>
        <div className="footerCategory">
                <span className="title">Support</span>
                <span>Refunds</span>
                <span>Warranty</span>
                <span>Order Status</span>
                <span>F.A.Q</span>
                
        </div>
        <div className="footerCategory">
                <span className="title">About Us</span>
                <span>Terms of sale</span>
                <span>Careers</span>
                
        </div>
        <div>
            <span >Social</span>
            <div className='socialMedia'>
                <span>
                    <LinkedInIcon/>
                </span>
                <span>
                    <FacebookIcon/>
                </span>
                <span>
                    <TwitterIcon/>
                </span>

                <span>
                    <InstagramIcon/>
                </span>
            </div>
        </div>
    </div>
}