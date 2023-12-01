import React, {Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


class Footer extends Component{

    constructor() {
        super();
        this.state = {
          currentYear: new Date().getFullYear()
        };
    }

    render(){
        return(
            <div>
                <>
                {/* footer */}
                <div id="contact" className="row footer">
                    <div className="col">
                    <footer
                        className="text-white pt-5 pb-5"
                        style={{ backgroundColor: "#103741" }}
                    >
                        <div className="container text-center text-md-left">
                        <div className="row text-center text-md-left">
                            <div className="col-md-3 col-lg-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                                School House
                            </h5>
                            <p>
                                tfygjkklnk ertyuiop asdfghj wertyui asdfghj xcvbnm, rtyuiop
                                asdfghjk
                            </p>
                            </div>
                            <div className="col-md-3 col-lg-3 mx-auto mt-3 text-light">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                                Contact
                            </h5>
                            <p className="">
                                <i className="fas fa-map-marker-alt mr-3" /> Nigeria, Lagos
                            </p>
                            <p className="">
                                <i className="fas fa-envelope mr-3" /> info@school.com
                            </p>
                            <p className="">
                                <i className="fas fa-phone mr-3" /> +23497467655
                            </p>
                            <p className="">
                                <i className="fas fa-print mr-3" /> +01 765 975 765
                            </p>
                            </div>
                            <div className="col-md-3 col-lg-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                                Useful links
                            </h5>
                            <p className="">
                                <span className="text-light text-decoration-none">About Us</span>
                            </p>
                            <p className="">
                                <span className="text-white text-decoration-none">Contact Us</span>
                            </p>
                            <p className="">
                                <span className="text-white text-decoration-none">
                                Privacy Policy
                                </span>
                            </p>
                            <p className="">
                                <span className="text-white text-decoration-none">
                                FAQ &amp; Help
                                </span>
                            </p>
                            <p className="">
                                <span className="text-white text-decoration-none">
                                Terms &amp; Conditions
                                </span>
                            </p>
                            </div>
                            <div className="col-md-3 col-lg-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                                Newsletter
                            </h5>
                            <p>
                                Sign up for our weekly Newsletter, and stay updated on our
                                latest news.
                            </p>
                            <form>
                                <input
                                type="email"
                                name="email"
                                className="form-control p-3"
                                placeholder="Your Email"
                                />
                                <button className="btn btn-warning col-12 mt-3 btn-lg">
                                Submit Now
                                </button>
                            </form>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-7 col-lg-8">
                            <p className="footer-text text-light">
                                Copyright © {this.state.currentYear} All rights reserved by: <span className="text-decoration-none">
                                <strong className="text-warning">SchoolHouse</strong>
                                </span>
                            </p>
                            </div>
                            <div className="col-md-5 col-lg-4">
                            <div className="text-center text-md-right">
                                <ul>
                                <li className="list-inline-item">
                                    <span
                                    className="btn-floating btn-sm"
                                    style={{ fontSize: 23 }}
                                    >
                                    <i className="fab fa-facebook" />
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                    <span
                                    className="btn-floating btn-sm"
                                    style={{ fontSize: 23 }}
                                    >
                                    <i className="fab fa-square-twitter" />
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                    <span
                                    className="btn-floating btn-sm"
                                    style={{ fontSize: 23 }}
                                    >
                                    <i className="fab fa-google-plus" />
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                    <span
                                    className="btn-floating btn-sm"
                                    style={{ fontSize: 23 }}
                                    >
                                    <i className="fab fa-instagram" />
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                    <span
                                    className="btn-floating btn-sm"
                                    style={{ fontSize: 23 }}
                                    >
                                    <i className="fab fa-linkedin" />
                                    </span>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </footer>
                    </div>
                </div>
                {/* footer */}
                {/* Back to Top */}
                <a href="#" className="btn btn-lg btn-lg-square back-to-top">
                    Up
                    <FontAwesomeIcon icon={faArrowUp} size="2xl" />
                    {/* <i className="fas fa-arrow-up" /> */}
                </a>
                </>

            </div>
        )
    }
}

export default Footer