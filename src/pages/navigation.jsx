import { Link } from "react-router-dom";

const Nav = () => {
    return (
       <header>
        <Link to = '/'>Home</Link>
        <Link to = '/about'>About</Link>
        
        <Link to = '/contact'>Contact</Link>
       </header> 
    );
}
export default Nav;