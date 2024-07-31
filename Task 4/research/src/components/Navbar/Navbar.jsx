import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="w-full">
      <div className="flex justify-between items-center px-2 pt-1 mb-1">
        <div>
          <img
            src="https://gims.ac.in/assets/img/gims/logo-gims.png"
            alt="gims-logo"
            className="w-16"
          />
        </div>
        <div className="text-sm sm:text-2xl font-semibold">
          <h3 className="">राजकीय आयुर्विज्ञान संस्थान, उत्तर प्रदेश</h3>
          <h3 className="">
            Government Institute of Medical Sciences, Uttar Pradesh
          </h3>
        </div>
        <div>
          <img
            src="https://gims.ac.in/assets/img/gims/govt-logo.png"
            alt="up-gov-logo"
            className="w-16"
          />
        </div>
      </div>
      <nav className="bg-blue-900 py-1 sm:px-2 px-1">
        <div className="flex justify-between items-center text-xs sm:text-base">
          <ul className="list-none flex-grow flex justify-center gap-x-8 font-semibold text-white">
            <li className="hover:text-gray-300 hover:cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            {/* <li className="hover:text-gray-300 hover:cursor-pointer">
              <Link to="/about">About</Link>
            </li> */}
            <li className="hover:text-gray-300 hover:cursor-pointer">
              <Link to="/research">Research</Link>
            </li>
            <li className="hover:text-gray-300 hover:cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <button className="bg-white text-blue-600 sm:px-4 px-2 py-1 rounded-lg font-semibold hover:bg-blue-300 hover:text-white">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
