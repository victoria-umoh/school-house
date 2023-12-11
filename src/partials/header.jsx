import React, {Component } from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from '../components/Home';
import About from '../components/About';
import Classes from '../components/Classes';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Bookings from '../components/Bookings';
import Teachers from '../components/Teachers';

class Header extends Component{
    render(){
        return(
            <Router>
                <div>
                    {/* Navbar */}
                    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top p-0">
                        <div className="container-fluid m-auto">
                            <Link className="navbar-brand d-flex mx-5" to="/">
                                <img className="logo" src="assets/images/logo.jpg" width={50} />
                                <h2 className="brand-name">SchoolHouse</h2>
                            </Link>
                            
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse nav-buttons" id="navbarSupportedContent" >
                                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to="/" id="#" className="nav-link active" aria-current="page"> Home </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link"> About </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/classes" className="nav-link"> Classes </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/gallery" className="nav-link"> Gallery </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="teachers" className="nav-link"> Teachers </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link"> Contact </Link>
                                    </li>
                                    <li>
                                        <button>
                                            <Link to="/bookings" className="text-light text-decoration-none">Join Class</Link>
                                        </button>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </nav>
                    {/* Navbar */}
                </div>

                <Routes>
                    <Route exact path="/" element = {<Home /> } />
                    <Route exact path="/about" element = {<About /> } />
                    <Route exact path="/classes" element = {<Classes /> } />
                    <Route exact path="/gallery" element = {<Gallery /> } />
                    <Route exact path="/teachers" element = {<Teachers /> } />
                    <Route exact path="/contact" element = {<Contact /> } />
                    <Route exact path="/bookings" element = {<Bookings /> } />
                </Routes>
            </Router>
        )
    }
}

export default Header