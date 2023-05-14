import React from 'react'
import { NavLink } from 'react-router-dom'

const Header2 = () => {
  return (
    <div>
      <section className="header-main">
        <ul>
          <li>
            <div className="drop-btn">
              <NavLink
                activeClassName="active_class"
                className="nav-item"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
              {/* <div className="content">
        <a href="/">Link 1</a>
        <a href="/">Link 1</a>
        <a href="/">Link 1</a>
      </div> */}
            </div>

            {/* <a href="/">Home</a> */}
          </li>

          <li>
            <div className="drop-btn">
              <NavLink className="nav-item" to="/services">
                Premium Tools
              </NavLink>
              <div className="content">
                <NavLink to="/product/:id">Artificial Intelligence</NavLink>
                <NavLink to="/chatmeta">Chat for Facebook</NavLink>
                <NavLink to="/cloudwhatsapp">Cloud Whatsapp</NavLink>
                <NavLink to="/cloudwhatsapp">Cloud Whatsapp</NavLink>
              </div>
            </div>
            {/* <a href="/">About</a> */}
          </li>

          <li>
            <div className="drop-btn">
              <NavLink className="nav-item" to="/services">
                Advertising
              </NavLink>
              <div className="content">
                {/* <a href="/customsoftware">Custom Software Developement</a> */}
                <NavLink className="nav-item" to="/cart">
                cart
              </NavLink>
                <NavLink to="/software">Software Developement</NavLink>
                <NavLink to="/ddd">Daily Domain Database</NavLink>
                <NavLink to="/ddd">Daily Domain Database</NavLink>
              </div>
            </div>
            {/* <a href="/">Services</a> */}
          </li>

          <li>
            <div className="drop-btn">
              <NavLink className="nav-item" to="/services">
                Services
              </NavLink>
              <div className="content">
                <NavLink to="/logodesign">Logo Designning & Branding</NavLink>
                <NavLink to="/googleads">Advertising on Google</NavLink>
                <NavLink to="/searchengine">Search Engine Optimisation</NavLink>
                <NavLink to="/webdesign">Web Designning & Developement</NavLink>
              </div>
            </div>
            {/* <a href="/">Products</a> */}
          </li>

          <li>
            <div className="drop-btn">
              <NavLink className="nav-item" to="/services">
                Web Hosting
              </NavLink>
              {/* <div className="content">
        <a href="/">Link 1</a>
        <a href="/">Link 1</a>
        <a href="/">Link 1</a>
      </div> */}
            </div>
            {/* <a href="/">Premium Tools</a> */}
          </li>
          <li>
            <div className="drop-btn">
              <NavLink className="nav-item" to="/services">
                My Products
              </NavLink>
              {/* <div className="content">
        <a href="/">Link 1</a>
        <a href="/">Link 1</a>
        <a href="/">Link 1</a>
      </div> */}
            </div>
            {/* <a href="/">Web Hosting</a> */}
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Header2
