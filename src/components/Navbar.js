import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"> {props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.AboutText}</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li> */}
       
      </ul>
     { props.mode==="dark" && 
      <div className='mx-3'>
        <span className='badge bg-warning mx-1 rounded-5'
        style={{cursor:"pointer"}}
          onClick={()=>props.changeBg("yellow")}
        > yellow
        </span>

           <span className='badge bg-danger mx-1 rounded-5'
        style={{cursor:"pointer"}}
          onClick={()=>props.changeBg("red")}
        > Red
        </span>

          <span className='badge bg-success mx-1 rounded-5'
        style={{cursor:"pointer"}}
          onClick={()=>props.changeBg("green")}
        > Green
        </span>
      </div>
      }
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault"> Enable DarkMode</label>
</div>
    </div>
  </div>
</nav>
 
  );
}
export default Navbar

Navbar.propTypes = {
  title:PropTypes.string,
  AboutText:PropTypes.string,

}
