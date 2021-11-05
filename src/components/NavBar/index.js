import { Link } from 'react-router-dom'
import './index.css';

function NavBar() {

    return <div>
        <nav className="nav">
          <ul className="ul">
            <li className="li">
              <Link to="/">All Posts</Link>
            </li>
            <li className="li">
              <Link to="/createad">Sell</Link>
            </li>
            <li className="li">
              <Link to="/editinfo">Edit Profile</Link>
            </li>
          </ul>
        </nav>
    </div>
}

export default NavBar
