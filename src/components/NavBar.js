import React from "react";
//import {isAuthenticated} from "../services/Auth"
import { Link } from "react-router-dom";
const NavBar=()=>{
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Lucky Mobiles</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto"  >
                    {<li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>}
                    {<li><Link className="nav-link" to="/login">Login</Link></li>}
                    {<li className="nav-item"><Link className="nav-link" to="/dashboard" >Dashboard</Link></li>}
                    {<li><a className="nav-link" onClick={null} style={{cursor:"pointer"}}>Logout</a></li>}
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;