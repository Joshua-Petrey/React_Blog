import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        
    <nav className="navbar">
        <h1>DevCaine's Blog</h1>
        <span className='writing-emoji'>&#10002;</span>

        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
        </div>
    </nav>
     );
}
 
export default Navbar;
