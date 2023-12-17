import '../CSS/style.css';
import '../CSS/responsivestyle.css'
import logo from '../images/logoTop.png'
import logo1 from '../images/footer1.png'
import logo2 from '../images/footer2.png'


const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container dipsy">
          <div className="row p-5">
            <div className="col-lg-3 col-md-3 col-sm-2 col-12">
              <a href="#">
                <img
                  className="img-fluid mb-1"
                  src={logo}
                  alt=".."
                />
              </a>
              <strong className="mt-">Mail: youremail@gmail.com</strong>
              <div className="row">
                <div className="col-lg-6 col-6 mb-3 ">
                  <img
                    className="img-fluid"
                    src={logo1}
                    alt="..footer1.png"
                  />
                </div>
                <div className="col-lg-6 col-6 mb-3">
                  <img className="img-fluid" src={logo2} alt="footer2.png" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-2 col-6 footer_contact">
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <a href="#">Contact Us</a>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <a href="#">About Us</a>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <a href="#">Services</a>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <a href="#">Sign up</a>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <a href="#">Login</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-2 col-6 footer_contact1">
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <a href="#">Help Centre</a>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <a href="#">Gallery</a>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <a href="#">Document</a>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <a href="#">Achievement</a>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <a href="#">Exam Calendar</a>
                </div>
                
              </div>
             
            </div>
            <div className="col-lg-3 col-sm-2 col-12" > <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
              data-bs-toggle="dropdown" aria-expanded="false">
              English
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a className="dropdown-item" href="#">Hindi</a></li>
              <li><a className="dropdown-item" href="#">Marathi</a></li>
              <li><a className="dropdown-item" href="#">Telgu</a></li>
            </ul>
          </div></div>
           
            
          </div>
        </div>
       
        <div className="copyright">
          <p>Copyright © 2023 Gibbon by Happy Tutors Club</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
