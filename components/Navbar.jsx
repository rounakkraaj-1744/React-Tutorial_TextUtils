import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id = "nav">
        <div className="container-fluid">
          <NavLink className="navbar-brand " to="#"><b>{props.title}</b></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink className="nav-link active}" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/about" >About</NavLink>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode == "light" ? "dark":"light"}`}>
              <input className="form-check-input" type="checkbox" onClick={props.changeMode} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
            </div>
            <form className="d-flex" role="search">
              <input className="form-control ms-3 me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-info" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;