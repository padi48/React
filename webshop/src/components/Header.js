import ildilogo from '../images/ildilogo.png'
import { BrowserRouter, Route, Link } from "react-router-dom"

export default function ShopHeader() {
    return (
      <div className="shopHeader">
        <nav className="navbar">
          <img src={ildilogo} alt="Logo" />
          <li>Főoldal</li>
          <li>Rólam</li>
          <div className='dropdown'>
            <span>Kategóriák</span>
            <div className='dropdown-content'>
              <li>Karácsony</li>
              <li>Húsvét</li>
              <li>Esküvő</li>
              <li>Anyák napja</li>
            </div>
          </div>
          <li>Kapcsolat</li>
        </nav>
      </div>
    )
  }