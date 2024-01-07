import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Lights Controller</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/receivers'>Receivers</Link>
                <Link to='/effects'>Effects</Link>
                <Link to='/clips'>Clips</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;