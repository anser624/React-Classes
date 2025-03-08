import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-dark border mt-5 text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5>About Us</h5>
              <p className="text-white">
                We are a team of passionate developers dedicated to creating
                amazing web experiences. Join us on this journey!
              </p>
            </div>
            <div className="col-md-4 mb-4 text-white">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none  text-white ">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li className="text-white">Email: info@example.com</li>
                <li className="text-white">Phone: +123 456 7890</li>
                <li className="text-white">Address: 123 Street, City, Country</li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-3 border-top">
            <p className="mb-0 text-white">
              &copy; 2023 Your Company. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
