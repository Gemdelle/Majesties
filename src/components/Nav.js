import '../styles/nav.css';

import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/riddlespage">Riddles</Link></li>
                <li><Link to="/dressuppage">Dress - Up</Link></li>
                <li><Link to="/heavenorhellpage">Heaven or Hell</Link></li>
                <li><Link to="/contactpage">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;