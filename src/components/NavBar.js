import '../styles/NavBar.css'
import CartWidget from './CartWidget';
import LinksNav from './LinksNav';
import '../styles/cart_widget.css'

function NavBar() {
    return(
    <div className="NavBarClass">
        <h3 className="h3_class">GAMING STORE</h3>
        <ul>
            <LinksNav />
            
        </ul>
        <div className= "CartWidget">
            <CartWidget />
        </div>
    </div>
    
    

    );
}

export default NavBar;