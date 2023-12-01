import React, { Component } from "react";


class contact extends Component{
    render(){
        return(
            <div>
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
                            className="img-fluid book_img"
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
                                    required=""
                                  />
                                </div>
                              </div>
                              <div className="row mb-3">
                                <div className="col">
                                  <select id="book" className="form-control p-3" required="required">
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
            </div>
        )
    }
}

export default contact
