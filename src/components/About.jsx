import React, { Component } from "react";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


class about extends Component{
    render(){
        return(
            <div>
                    {/* About */}
                    <section id="about" className="pt-5 pb-5">
                      <div className="row container m-auto mt-5 mb-5">
                        <div className="col-md-5">
                          <img src="assets/images/students6.jpeg" className="w-100 h-100" />
                        </div>
                        <div className="col-md-7 abt">
                          <div className="container">
                            <h4 className="mb-2 h4 animate__animated animate__bounceInLeft h4">
                              Learn About Us
                            </h4>
                            <h1>Best School For Your Kids</h1>
                          </div>
                          <div className="container text-black">
                            <p>
                              We are a learning community dedicated to inspiring success and
                              nurturing well-being. Finnish education excellence is at the heart
                              of all we do, because we believe that everyone deserves the best
                              possible future
                            </p>
                            <hr style={{ width: 150 }} />
                            <p>
                              The school was originally established in the 1970’s to provide a
                              British type education for children of expatriates living and
                              working in Sabah. Initially, premises were rented from the St
                              John’s Ambulance Association in Kota Kinabalu and the first
                              teachers were parents of the students attending the school.
                              However, the school quickly introduced its current policy of
                              recruiting only the best qualified teachers from around the world
                              and began to receive recognition of its commitment to high
                              standards from local, regional and global educational
                              organisations.
                            </p>
                            <hr style={{ width: 150 }} />
                            <p>
                              In 1988, KIS became a founder member of the Federation of British
                              International Schools in Asia (FOBISIA), a prestigious
                              organisation of British-style schools formed to support shared
                              goals and expectations and promote educational excellence in its
                              member schools. Even today, KIS continues to play a central role
                              in the Federation with our staff attending and leading FOBISIA
                              committees, workshops and conferences, spreading good practice
                              throughout South East Asia.
                            </p>
                            <hr style={{ width: 150 }} />
                            <p>
                              Today, owing to the tireless devotion to duty by the staff of
                              establishment, all the classes in the Nursery/Primary school have
                              emerged while the secondary school has grown to maturity with
                              classes running from J.S. 1 to SS 3. Obaro Secondary School is a
                              mixed day institution consisting of both the Junior Secondary and
                              the Senior Secondary School.
                            </p>
                            <button className="">Learn More</button>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* About */}
                    {/* Classes */}
                    <section id="classes" className="pt-5 pb-5">
                      <div className="row">
                        <div className="col">
                          <div className="container text-center mt-5 mb-5">
                            <h4 className="mb-2 h4">Popular Classes</h4>
                            <h1>Best Classes For Your Kids</h1>
                          </div>
                        </div>
                      </div>
                      <div className="row m-auto container mb-2 lines">
                        <div className="col-md-4 mb-3">
                          <div className="card" style={{ backgroundColor: "#fff5f3" }}>
                            <img
                              src="assets/images/students5.jpeg"
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="card-body">
                              <p className="text-dark text-center">Basic Science</p>
                              <div className="d-flex justify-content-around">
                                <hr className="one" />
                                <hr className="two" />
                                <hr className="three" />
                              </div>
                              <div className="d-flex justify-content-around age">
                                <span style={{ color: "#f0330d" }}>Age: </span>
                                <span style={{ color: "green" }}>Time: </span>
                                <span style={{ color: "navy" }}>Capcity: </span>
                              </div>
                              <div className="d-flex justify-content-around">
                                <span>3-5 Years</span>
                                <span>9-10am </span>
                                <span>10 Kids </span>
                              </div>
                              <div className="mt-3 d-flex justify-content-around">
                                <span>$290 / Month</span>
                                <button>Join Now</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="card" style={{ backgroundColor: "#fff5f3" }}>
                            <img
                              src="assets/images/musical.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="card-body">
                              <p className="text-dark text-center">Music and Dance</p>
                              <div className="d-flex justify-content-around">
                                <hr className="one" />
                                <hr className="two" />
                                <hr className="three" />
                              </div>
                              <div className="d-flex justify-content-around age">
                                <span style={{ color: "#f0330d" }}>Age: </span>
                                <span style={{ color: "green" }}>Time: </span>
                                <span style={{ color: "navy" }}>Capcity: </span>
                              </div>
                              <div className="d-flex justify-content-around">
                                <span>3-5 Years</span>
                                <span>9-10am </span>
                                <span>10 Kids </span>
                              </div>
                              <div className="mt-3 d-flex justify-content-around">
                                <span>$290 / Month</span>
                                <button>Join Now</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="card" style={{ backgroundColor: "#fff5f3" }}>
                            <img
                              src="assets/images/pool1.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="card-body">
                              <p className="text-dark text-center">Swim Lessons</p>
                              <div className="d-flex justify-content-around">
                                <hr className="one" />
                                <hr className="two" />
                                <hr className="three" />
                              </div>
                              <div className="d-flex justify-content-around age">
                                <span style={{ color: "#f0330d" }}>Age: </span>
                                <span style={{ color: "green" }}>Time: </span>
                                <span style={{ color: "navy" }}>Capcity: </span>
                              </div>
                              <div className="d-flex justify-content-around">
                                <span>3-5 Years</span>
                                <span>9-10am </span>
                                <span>10 Kids </span>
                              </div>
                              <div className="mt-3 d-flex justify-content-around">
                                <span>$290 / Month</span>
                                <button>Join Now</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row m-auto container mb-5 lines">
                        <div className="col-md-4 mb-3">
                          <div className="card" style={{ backgroundColor: "#fff5f3" }}>
                            <img
                              src="assets/images/students5.jpeg"
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="card-body">
                              <p className="text-dark text-center">Basic Science</p>
                              <div className="d-flex justify-content-around">
                                <hr className="one" />
                                <hr className="two" />
                                <hr className="three" />
                              </div>
                              <div className="d-flex justify-content-around age">
                                <span style={{ color: "#f0330d" }}>Age: </span>
                                <span style={{ color: "green" }}>Time: </span>
                                <span style={{ color: "navy" }}>Capcity: </span>
                              </div>
                              <div className="d-flex justify-content-around">
                                <span>3-5 Years</span>
                                <span>9-10am </span>
                                <span>10 Kids </span>
                              </div>
                              <div className="mt-3 d-flex justify-content-around">
                                <span>$290 / Month</span>
                                <button>Join Now</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="card" style={{ backgroundColor: "#fff5f3" }}>
                            <img
                              src="assets/images/musical.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="card-body">
                              <p className="text-dark text-center">Music and Dance</p>
                              <div className="d-flex justify-content-around">
                                <hr className="one" />
                                <hr className="two" />
                                <hr className="three" />
                              </div>
                              <div className="d-flex justify-content-around age">
                                <span style={{ color: "#f0330d" }}>Age: </span>
                                <span style={{ color: "green" }}>Time: </span>
                                <span style={{ color: "navy" }}>Capcity: </span>
                              </div>
                              <div className="d-flex justify-content-around">
                                <span>3-5 Years</span>
                                <span>9-10am </span>
                                <span>10 Kids </span>
                              </div>
                              <div className="mt-3 d-flex justify-content-around">
                                <span>$290 / Month</span>
                                <button>Join Now</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="card" style={{ backgroundColor: "#fff5f3" }}>
                            <img
                              src="assets/images/pool1.jpg"
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="card-body">
                              <p className="text-dark text-center">Swim Lessons</p>
                              <div className="d-flex justify-content-around">
                                <hr className="one" />
                                <hr className="two" />
                                <hr className="three" />
                              </div>
                              <div className="d-flex justify-content-around age">
                                <span style={{ color: "#f0330d" }}>Age: </span>
                                <span style={{ color: "green" }}>Time: </span>
                                <span style={{ color: "navy" }}>Capcity: </span>
                              </div>
                              <div className="d-flex justify-content-around">
                                <span>3-5 Years</span>
                                <span>9-10am </span>
                                <span>10 Kids </span>
                              </div>
                              <div className="mt-3 d-flex justify-content-around">
                                <span>$290 / Month</span>
                                <button>Join Now</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* Classes */}
                    {/* Booking */}
                    <section id="bookings" className="pt-5 pb-5">
                      <div className="row">
                        <div className="col">
                          <div className="container text-center mt-5 mb-5">
                            <h4 className="mb-2 h4">Book a Slot</h4>
                            <h1>Make Appointment</h1>
                          </div>
                        </div>
                      </div>
                      <div className="row container m-auto mb-5">
                        <div className="col-md-6">
                          <img
                            src="assets/images/students8.jpeg"
                            className="img-fluid book_img" alt=""
                          />
                        </div>
                        <div className="col-md-6 pe-0 px-0 pb-0">
                          <div
                            className="container m-auto py-5"
                            style={{ backgroundColor: "#103741" }}
                          >
                            <h1 className="mb-4 text-center text-light">Book Now</h1>
                            <form action="" method="">
                              <div className="row">
                                <div className="col-md-6">
                                  <label htmlFor="fname" className="form-label" hidden="hidden">
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    name="fname"
                                    id="fname"
                                    className="form-control p-3"
                                    placeholder="Guardian Name"
                                    required="required"
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label htmlFor="email" className="form-label" hidden="hidden">
                                    Email
                                  </label>
                                  <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="form-control p-3"
                                    placeholder="Guardian Email"
                                    required="required"
                                  />
                                </div>
                              </div>
                              <div className="row mt-3 mb-3">
                                <div className="col-md-6">
                                  <label htmlFor="child_name" className="form-label" hidden="hidden">
                                    Child Name
                                  </label>
                                  <input
                                    type="text"
                                    name="child_name"
                                    id="child_name"
                                    className="form-control p-3"
                                    placeholder="Child Name"
                                    required="required"
                                  />
                                </div>
                                <div className="col-md-6">
                                  <label htmlFor="child_age" className="form-label" hidden="hidden">
                                    Child Age
                                  </label>
                                  <input
                                    type="text"
                                    name="child_age"
                                    id="child_age"
                                    className="form-control p-3"
                                    placeholder="Child Age"
                                    required="required"
                                  />
                                </div>
                              </div>
                              <div className="row mb-3">
                                <div className="col">
                                  <select id="book" className="form-control p-3" required="">
                                    <option>Select a Class</option>
                                    <option>Basic Science</option>
                                    <option>Music and Dance</option>
                                    <option>Swim Lessons</option>
                                  </select>
                                </div>
                              </div>
                              <div className="row mb-3">
                                <div className="col">
                                  <textarea
                                    cols={30}
                                    rows={5}
                                    className="form-control"
                                    placeholder="message"
                                    required="required"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <button className="btn btn-warning btn-lg col-12">
                                Book Now
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* Booking */}
                    {/* Our Teachers */}
                    
                    {/* Our Teachers */}
                    {/* Our Gallery */}
                    <section id="gallery" className="pt-5 pb-5">
                      <div className="row">
                        <div className="col">
                          <div className="container text-center mt-5 mb-5">
                            <h4 className="mb-2 h4">Our Gallery</h4>
                            <h1>Highlights</h1>
                          </div>
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center gallery">
                        <div
                          className="col-md-2 col-lg-6 col-sm-12"
                          style={{ width: 270, padding: 0 }}
                        >
                          <img
                            src="assets/images/students13.jpeg"
                            className="img-fluid w-100 h-100" alt=""
                          />
                        </div>
                        <div className="col-md-2" style={{ width: 270, padding: 0 }}>
                          <img
                            src="assets/images/students2.jpeg"
                            className="img-fluid w-100 h-100" alt=""
                          />
                        </div>
                        <div className="col-md-2" style={{ width: 270, padding: 0 }}>
                          <img
                            src="assets/images/students4.jpeg"
                            className="img-fluid w-100 h-100" alt=""
                          />
                        </div>
                        <div className="col-md-2" style={{ width: 270, padding: 0 }}>
                          <img
                            src="assets/images/students3.jpeg"
                            className="img-fluid w-100 h-100" alt=""
                          />
                        </div>
                        <div className="col-md-2" style={{ width: 270, padding: 0 }}>
                          <img
                            src="assets/images/students7.jpeg"
                            className="img-fluid w-100 h-100" alt=""
                          />
                        </div>
                        <div className="col-md-2" style={{ width: 270, padding: 0 }}>
                          <img
                            src="assets/images/musical.jpg"
                            className="img-fluid w-100 h-100" alt=""
                          />
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center gallery">
                        <div className="col-md-2" style={{ width: 270, padding: 0 }}>
                          <img
                            src="assets/images/students5.jpeg"
                            className="img-fluid w-100 h-100" alt=""
                          />
                        </div>
                        <div className="col-md-2" style={{ width: 270, padding: 0 }}>
                          <img
                            src="assets/images/students14.jpeg"
                            className="img-fluid w-100 h-100" alt=""
                          />
                        </div>
                        <div className="col-md-2" style={{ width: 270, padding: 0 }}>
                          <img
                            src="assets/images/students12.jpeg"
                            className="img-fluid w-100 h-100" alt=""
                          />
                        </div>
                        <div className="col-md-2" style={{ width: 270, padding: 0 }}>
                          <img
                            src="assets/images/students10.jpeg"
                            className="img-fluid w-100 h-100" alt=""
                          />
                        </div>
                        <div className="col-md-2" style={{ width: 270, padding: 0 }}>
                          <img
                            src="assets/images/students8.jpeg"
                            className="img-fluid w-100 h-100" alt=""
                          />
                        </div>
                        <div className="col-md-2" style={{ width: 270, padding: 0 }}>
                          <img
                            src="assets/images/students11.webp"
                            className="img-fluid w-100 h-100" alt=""
                          />
                        </div>
                      </div>
                    </section>
                    {/* Our Gallery */}
                    {/* Team Start */}
                    <section id="teachers" className="pt-5 pb-5">
                      <div className="container-xxl py-5">
                        <div className="container">
                          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h4 className="mb-2 h4">Our Teachers</h4>
                            <h1 className="mb-5">Expert Instructors</h1>
                          </div>
                          <div className="row g-4">
                            <div
                              className="col-lg-3 col-md-6 wow fadeInUp"
                              data-wow-delay="0.1s"
                            >
                              <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                  <img
                                    className="img-fluid"
                                    src="assets/img/team-1.jpg"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="position-relative d-flex justify-content-center"
                                  style={{ marginTop: "-23px" }}
                                >
                                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                    <button className="btn btn-sm-square btn-primary mx-1">
                                      <i className="fab fa-facebook-f" />
                                    </button>
                                    <button className="btn btn-sm-square btn-primary mx-1">
                                      <i className="fab fa-twitter" />
                                    </button>
                                    <button className="btn btn-sm-square btn-primary mx-1">
                                      <i className="fab fa-instagram" />
                                    </button>
                                  </div>
                                </div>
                                <div className="text-center p-4">
                                  <h5 className="mb-0">Maxwell Cane</h5>
                                  <small>Basic Science</small>
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-lg-3 col-md-6 wow fadeInUp"
                              data-wow-delay="0.3s"
                            >
                              <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                  <img
                                    className="img-fluid"
                                    src="assets/img/team-2.jpg"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="position-relative d-flex justify-content-center"
                                  style={{ marginTop: "-23px" }}
                                >
                                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                    <button className="btn btn-sm-square btn-primary mx-1">
                                      <i className="fab fa-facebook-f" />
                                    </button>
                                    <button className="btn btn-sm-square btn-primary mx-1">
                                      <i className="fab fa-twitter" />
                                    </button>
                                    <button className="btn btn-sm-square btn-primary mx-1">
                                      <i className="fab fa-instagram" />
                                    </button>
                                  </div>
                                </div>
                                <div className="text-center p-4">
                                  <h5 className="mb-0">Lisa Chude</h5>
                                  <small>Arts and Crafts</small>
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-lg-3 col-md-6 wow fadeInUp"
                              data-wow-delay="0.5s"
                            >
                              <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                  <img
                                    className="img-fluid"
                                    src="assets/img/team-3.jpg"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="position-relative d-flex justify-content-center"
                                  style={{ marginTop: "-23px" }}
                                >
                                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                    <button className="btn btn-sm-square btn-primary mx-1">
                                      <i className="fab fa-facebook-f" />
                                    </button>
                                    <button className="btn btn-sm-square btn-primary mx-1">
                                      <i className="fab fa-twitter" />
                                    </button>
                                    <button className="btn btn-sm-square btn-primary mx-1">
                                      <i className="fab fa-instagram" />
                                    </button>
                                  </div>
                                </div>
                                <div className="text-center p-4">
                                  <h5 className="mb-0">James Tayo</h5>
                                  <small>Music and Dance</small>
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-lg-3 col-md-6 wow fadeInUp"
                              data-wow-delay="0.7s"
                            >
                              <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                  <img
                                    className="img-fluid"
                                    src="assets/img/team-4.jpg"
                                    alt=""
                                  />
                                </div>
                                <div
                                  className="position-relative d-flex justify-content-center"
                                  style={{ marginTop: "-23px" }}
                                >
                                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                    <button className="btn btn-sm-square btn-primary mx-1">
                                      <i className="fab fa-facebook-f" />
                                    </button>
                                    <button className="btn btn-sm-square btn-primary mx-1">
                                      <i className="fab fa-twitter" />
                                    </button>
                                    <button className="btn btn-sm-square btn-primary mx-1">
                                      <i className="fab fa-instagram" />
                                    </button>
                                  </div>
                                </div>
                                <div className="text-center p-4">
                                  <h5 className="mb-0">Julia Mack</h5>
                                  <small>Swim Coach</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* Team End */}
                    {/* Testimonial Start */}
                    <section id="testimonial" className="pt-5 pb-5">
                      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="container">
                          <div className="text-center">
                            <h4 className="section-title px-3 h4">Testimonial</h4>
                            <h1 className="mb-5">Our Clients Say!</h1>
                          </div>
                          <div className="owl-carousel testimonial-carousel position-relative">
                            <div className="testimonial-item text-center">
                              <img
                                className="border rounded-circle p-2 mx-auto mb-3"
                                src="assets/img/testimonial-1.jpg" alt=""
                                style={{ width: 80, height: 80 }}
                              />
                              <h5 className="mb-0">Client Name</h5>
                              <p>Profession</p>
                              <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0">
                                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                                </p>
                              </div>
                            </div>
                            <div className="testimonial-item text-center">
                              <img
                                className="border rounded-circle p-2 mx-auto mb-3"
                                src="assets/img/testimonial-2.jpg" alt=""
                                style={{ width: 80, height: 80 }}
                              />
                              <h5 className="mb-0">Client Name</h5>
                              <p>Profession</p>
                              <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0">
                                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                                </p>
                              </div>
                            </div>
                            <div className="testimonial-item text-center">
                              <img
                                className="border rounded-circle p-2 mx-auto mb-3"
                                src="assets/img/testimonial-3.jpg" alt=""
                                style={{ width: 80, height: 80 }}
                              />
                              <h5 className="mb-0">Client Name</h5>
                              <p>Profession</p>
                              <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0">
                                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                                </p>
                              </div>
                            </div>
                            <div className="testimonial-item text-center">
                              <img
                                className="border rounded-circle p-2 mx-auto mb-3"
                                src="assets/img/testimonial-4.jpg" alt=""
                                style={{ width: 80, height: 80 }}
                              />
                              <h5 className="mb-0">Client Name</h5>
                              <p>Profession</p>
                              <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0">
                                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* Testimonial End */}
            </div>
        )
    }
}

export default about
