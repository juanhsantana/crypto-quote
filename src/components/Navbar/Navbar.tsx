import './Navbar.styles.css'
import { Link } from "react-router-dom"
import Logo from '../../assets/logo.png'

export function Navbar() {
  return (
    <div className="navContainer">
      <nav className="navbar">
        <img src={Logo} alt="Logo" />
        {/* <div className="navList">
          <ul>
            <li>
              <Link to="/">Moedas</Link>
            </li>

            <li>
              <Link to="/">Criptomoedas</Link>
            </li>
          </ul>
        </div> */}
      </nav>
    </div>
  )
}
