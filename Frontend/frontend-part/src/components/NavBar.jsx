import '../style/welcome.css';
import '../style/navbar.css';
import { Link } from 'react-router-dom';
import images from "../assets/index"
function NavBar() {
    return <>
        <div className="nav-1">
            <nav className="navbar">

                <h2 className="navbar-title">
                    <span><img src={images.Libra} alt="Back" width={30} style={{ cursor: "pointer" }} className='image' /></span>&nbsp;
                    <span>Libra AI</span>
                </h2>
                <ul className="navbar-links">
                    <li><Link to='/signup'>Sign Up</Link></li>
                    <li><Link to="/signin">LogIn</Link></li>
                    <li><Link to="/home">About</Link></li>
                </ul>
            </nav>
        </div>
    </>
}


export default NavBar