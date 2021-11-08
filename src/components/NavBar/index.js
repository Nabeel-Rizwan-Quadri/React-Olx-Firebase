import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { removeSearch } from '../../store/actions/searchActions';

import './index.css';

function NavBar() {

  const dispatch = useDispatch()

  const refresh = () => {
    dispatch(removeSearch())
  }

    return <div>
        <nav className="nav">
          <ul className="ul">
            <li onClick={refresh} className="li">
              <Link  to="/">All categories</Link>
            </li>
            <li onClick={refresh} className="li">
              <Link to="/">Cars</Link>
            </li>
            <li onClick={refresh} className="li">
              <Link to="/">Phones</Link>
            </li>
            <li onClick={refresh} className="li">
              <Link to="/">Others</Link>
            </li>
            <li onClick={refresh} className="li">
              <Link to="/createad">Sell</Link>
            </li>
          </ul>
        </nav>
    </div>
}

export default NavBar
