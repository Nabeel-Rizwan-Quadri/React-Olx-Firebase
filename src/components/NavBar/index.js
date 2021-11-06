import { Link } from 'react-router-dom'
import './index.css';

function NavBar() {

    return <div>
        <nav className="nav">
          <ul className="ul">
            <li className="li">
              <Link to="/">All categories</Link>
            </li>
            <li className="li">
              <Link to="/">Cars</Link>
            </li>
            <li className="li">
              <Link to="/">Phones</Link>
            </li>
            <li className="li">
              <Link to="/">Others</Link>
            </li>
            <li className="li">
              <Link to="/createad">Sell</Link>
            </li>
          </ul>
        </nav>
    </div>
}

export default NavBar
