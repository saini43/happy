// import React from "react";
 import '../CSS/style.css';
import slide1 from '../images/slides/slide1.webp';
import slide2 from '../images/slides/slide2.webp';
import slide3 from '../images/slides/slide3.webp';
import slide4 from '../images/slides/slide4.webp';
import speech from '../images/home icons/speech.png';
import dance from '../images/home icons/dance.png';
import developer from '../images/home icons/developer.png';
import calculating from '../images/home icons/calculating.png';
import meditation from '../images/home icons/meditation.png';
import books from '../images/home icons/books.png';
import conversation from '../images/home icons/conversation.png';
import livemusic from '../images/home icons/live-music.png';
import event1 from '../images/events/event1.jpg';
import sportsday from '../images/events/sports-day.jpg';
import holi from '../images/events/holi.jpg';
import diwali from '../images/events/diwali.jpg';
import tour from '../images/events/tour.jpg';
import debate from '../images/events/debate.jpg';

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active scroll_button"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={slide1}
              className="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={slide2}
              className="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={slide3}
              className="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={slide4}
              className="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!--3rd Section cards--> */}

      <section id="services" className="services_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center mb-2">
           
  
            <h2>SERVICES OFFERS</h2>

              <p>
                We specialize in Educational services tailored to meet your
                digital needs and <br className="d-none d-lg-block" /> Our team
                excels .
              </p>
            </div>
            <div className="col-lg-3 col-sm-6 mb-4">
              <div className="card rounded-0 border-0 text-center py-5 px-3">
                <div>
                  <i className="fa-solid fa-bus"></i>
                </div>
                <h5 className="text-uppercase mt-4 mb-3">Transport</h5>
                <p>
                  The academy has Provide Transport Facility with GPS live
                  Location tracking and it have the Advance Mobile Notification
                  at.{" "}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 mb-4">
              <div className="card rounded-0 border-0 text-center py-5 px-3">
                <div>
                  <i className="fa-solid fa-bed"></i>
                </div>
                <h5 className="text-uppercase mt-4 mb-3">Hostel Facilities</h5>
                <p>
                  here are 110 rooms in hostel that can provide hostel facility
                  to the 350 boy’s & 200 girl’s ,Girl’s & boy’s hostel are
                  separated.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 mb-4">
              <div className="card rounded-0 border-0 text-center py-5 px-3">
                <div>
                  <i className="fa-solid fa-utensils"></i>
                </div>
                <h5 className="text-uppercase mt-4 mb-3">Canteen & meals</h5>
                <p>
                  Under the care and supervision of the administrator & food in
                  charge proper functioning of the dining hall of very high
                  standards.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 mb-4">
              <div className="card rounded-0 border-0 text-center py-5 px-3">
                <div>
                  <i className="fa-solid fa-computer"></i>
                </div>
                <h5 className="text-uppercase mt-4 mb-3">Labs Facilities</h5>
                <p>
                  We Provide the Computer lab, 3D lab, Physics, Chemistry,
                  Biology and General Science and specially Artificial
                  intelligence lab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Card end--> */}


      {/* <!--4th Categories--> */}
      <div className="container mb-5">
  <div className="Exams">
    <h3>Top Categories</h3>
    <div className="row mt-4">
      <div className="col-lg-3 col-6 mb-4 Exam">
        <a href="#">
          <img
            style={{ width: "auto", height: "3rem" }}
            className="img-fluid mb-1"
            src={speech}
            alt=""
          />
        </a>
        <a href="#">
          <p>Personal development</p>
        </a>
      </div>
      <div className="col-lg-3 col-6 mb-4 Exam">
        <a href="#">
          <img
            style={{ width: "auto", height: "3rem" }}
            className="img-fluid mb-1"
            src={dance}
            alt=""
          />
        </a>
        <a href="#">
          <p>Classical Dance</p>
        </a>
      </div>
      <div className="col-lg-3 col-6 mb-4 Exam">
        <a href="#">
          <img
            style={{ width: "auto", height: "3rem" }}
            className="img-fluid mb-1"
            src={developer}
            alt=""
          />
        </a>
        <a href="#">
          <p>IT Education</p>
        </a>
      </div>
      <div className="col-lg-3 col-6 mb-4 Exam">
        <a href="#">
          <img
            style={{ width: "auto", height: "3rem" }}
            className="img-fluid mb-1"
            src={calculating}
            alt=""
          />
        </a>
        <a href="#">
          <p>Vedic Maths</p>
        </a>
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-lg-3 col-6 mb-4 Exam">
        <a href="#">
          <img
            style={{ width: "auto", height: "3rem" }}
            className="img-fluid mb-1"
            src={meditation}
            alt=""
          />
        </a>
        <a href="#">
          <p>Yoga</p>
        </a>
      </div>
      <div className="col-lg-3 col-6 mb-4 Exam">
        <a href="#">
          <img
            style={{ width: "auto", height: "3rem" }}
            className="img-fluid mb-1"
            src={books}
            alt=""
          />
        </a>
        <a href="#">
          <p>Religious Education</p>
        </a>
      </div>
      <div className="col-lg-3 col-6 mb-4 Exam">
        <a href="#">
          <img
            style={{ width: "auto", height: "3rem" }}
            className="img-fluid mb-1"
            src={conversation}
            alt=""
          />
        </a>
        <a href="#">
          <p>Communication Skills</p>
        </a>
      </div>
      <div className="col-lg-3 col-6 mb-4 Exam">
        <a href="#">
          <img
            style={{ width: "auto", height: "3rem" }}
            className="img-fluid mb-1"
            src={livemusic}
            alt=""
          />
        </a>
        <a href="#">
          <p>Music Lessons</p>
        </a>
      </div>
    </div>
  </div>
</div>

<section className="Events mb-5">
      <div className="container">
        <h3 className="mb-5">Popular Events</h3>
        <div className="row">
          <div className="col-sm-4 col-4 py-3 py-sm-0">
            <div className="card box-shadow">
              <a href="#">
                <img
                  src={event1}
                  className="card-img-top img-fluid"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">Tree Plantation</h5>
                <p className="card-text">
                  Some quick example text to build.
                </p>
                <a href="#">
                  <button type="button" className="btn btn-success">
                    View More..
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-4 py-3 py-sm-0">
            <div className="card box-shadow">
              <a href="#">
                <img
                  src={sportsday}
                  className="card-img-top img-fluid"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">Sports Day Games</h5>
                <p className="card-text">
                  Some quick example text to build.
                </p>
                <a href="#">
                  <button type="button" className="btn btn-success">
                    View More..
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-4 py-3 py-sm-0">
            <div className="card box-shadow">
              <a href="#">
                <img
                  src={holi}
                  className="card-img-top img-fluid"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">Holi Celebration</h5>
                <p className="card-text">
                  Some quick example text to build.
                </p>
                <a href="#">
                  <button type="button" className="btn btn-success">
                    View More..
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Cards */}
        <div className="row mt-5">
          <div className="col-sm-4 col-4 py-3 py-sm-0">
            <div className="card box-shadow">
              <a href="#">
                <img
                  src={diwali}
                  className="card-img-top img-fluid"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">Diwali Celebration</h5>
                <p className="card-text">
                  Some quick example text to build.
                </p>
                <a href="#">
                  <button type="button" className="btn btn-success">
                    View More..
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-4 py-3 py-sm-0">
            <div className="card box-shadow">
              <a href="#">
                <img
                  src={tour}
                  className="card-img-top img-fluid"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">Tour Camping</h5>
                <p className="card-text">
                  Some quick example text to build.
                </p>
                <a href="#">
                  <button type="button" className="btn btn-success">
                    View More..
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-4 py-3 py-sm-0">
            <div className="card box-shadow">
              <a href="#">
                <img
                  src={debate}
                  className="card-img-top img-fluid"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">Debate competition</h5>
                <p className="card-text">
                  Some quick example text to build.
                </p>
                <a href="#">
                  <button type="button" className="btn btn-success">
                    View More..
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
     <section className="form mt-4 mb-5">
      <div className="container">
        <h3 style={{ color: "#111", fontWeight: 700, fontSize: "1.5rem" }}>
          Get in touch
        </h3>
        <p style={{ fontWeight: 600 }}>Contact Us For Any Query</p>
        <form className="row g-3 forms">
          <div className="col-md-4">
            <label htmlFor="validationDefault01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              value="Mark"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault02"
              value="Otto"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefaultUsername" className="form-label">
              Username
            </label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2">
                @
              </span>
              <input
                type="text"
                className="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault03" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault03"
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="validationDefault04" className="form-label">
              State
            </label>
            <select className="form-select" id="validationDefault04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="validationDefault05" className="form-label">
              Pin Code
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault05"
              required
            />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck2"
                required
              />
              <label
                style={{ color: "#777", fontWeight: 500 }}
                className="form-check-label"
                htmlFor="invalidCheck2"
              >
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="button" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section> 

  </div>
  );
};

export default Home;
