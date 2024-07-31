import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-footerColor text-white">
      <div className="mx-auto lg:mx-20 text-sm sm:text-base">
        <div className="py-12 px-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-left">
              <div className="mb-4">
                <Link to="/">
                  <img
                    src="https://gims.ac.in/assets/img/gims/logo-gims.png"
                    alt="Logo"
                    className="sm:w-1/2 h-auto w-28"
                  />
                </Link>
              </div>
              <div className="">
                <p className="text-slate-300 pr-10">
                  “ In the years to come, triumph will go to the centres that
                  know who they are and how to indulge with the forces that are
                  shaping our world. ”
                </p>
                <div className="mt-4">
                  <h4 className="font-bold">Follow Us</h4>
                  <ul className="flex space-x-4 mt-3">
                    <li>
                      <a
                        href="#"
                        className="bg-blue-500 text-white flex justify-center items-center w-10 h-10 text-center rounded-full hover:text-blue-500 hover:bg-white transition-colors duration-300"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-slate-200 text-red-500 flex justify-center items-center w-10 h-10 text-center rounded-full hover:bg-white transition-colors duration-300"
                      >
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mb-8 text-left">
              <h3 className="footer__widget-title font-bold">Explore</h3>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li className="hover:text-white transition-colors duration-300">
                  <a
                    href="https://bioincubator.gims.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Incubator
                  </a>
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  <a
                    href="https://gims.ac.in:2096/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Faculty Login
                  </a>
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  <a
                    href="assets/pdf/NMC/Updated list of faculty GIMSq 12-02-24.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Faculty and Staff
                  </a>
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  <a
                    href="http://www.updgme.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    UPDGME
                  </a>
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  <a
                    href="https://rti.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Right to Information
                  </a>
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  <a
                    href="https://www.mohfw.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Health &amp; Family Welfare
                  </a>
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  <a href="contact-us.html">Contact Us</a>
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  <a href="gallery.html">Gallery</a>
                </li>
              </ul>
            </div>
            <div className="mb-8 text-left">
              <h3 className="font-bold">Quick Links</h3>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li className="hover:text-white transition-colors duration-300">
                  <a
                    href="http://ssphpgti.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SSPHGTI, Noida
                  </a>
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  <a href="#">SGPGI, Lucknow</a>
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  <a
                    href="https://www.drrmlims.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DR.RML, Lucknow
                  </a>
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  <a href="#">KGMC, Lucknow</a>
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  <a
                    href="https://main.icmr.nic.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ICMR
                  </a>
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  <a
                    href="https://natboard.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NBE
                  </a>
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  <a
                    href="https://www.nmc.org.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NMC
                  </a>
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  <a
                    href="https://gims.prd.dcservices.in/AHIMSG5/hissso/logoutLogin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HIMS Login
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-8 text-left">
              <h3 className="font-bold">Get in Touch</h3>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li className="hover:text-white transition-colors duration-300">
                  <span className="fa fa-home"></span>{' '}
                  <a href="index.html">
                    {' '}
                    : Greater Noida, Gautam Buddha Nagar, UP - 201310, India
                  </a>
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  <span className="fa fa-phone"></span>{' '}
                  <a href=""> : +91-120-2341738</a>
                </li>
                <li className="hover:text-white transition-colors duration-300">
                  <span className="fa fa-envelope"></span>{' '}
                  <a href=""> : gimsgnoida16@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 pt-4 text-xs sm:text-sm">
        <div className="container mx-auto">
          <div className="text-center">
            <p>
              Copyright © 2024 GIMS. All Rights Reserved | Designed and
              Developed by{' '}
              <a
                target="_blank"
                href="https://www.attackticlabs.com"
                className="text-blue-400 hover:text-white leading-none transition-colors duration-300"
              >
                ATTACKTIC LABS
              </a>{' '}
            </p>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/shaleenchowdhary/"
              className="text-gray-800 text-xs leading-normal hover:text-white transition-colors duration-300"
            >
              Shaleen Chowdhary
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
