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
        <div>
          <h3 className="text-xl font-semibold">
            राजकीय आयुर्विज्ञान संस्थान, उत्तर प्रदेश
          </h3>
          <h3 className="text-xl font-semibold">
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
      <nav className="bg-blue-900 py-1 px-2">
        <div className="flex justify-between items-center">
          <ul className="list-none flex-grow flex justify-center gap-x-8 font-semibold text-white">
            <li className="hover:text-gray-300 hover:cursor-pointer">Home</li>
            <li className="hover:text-gray-300 hover:cursor-pointer">
              Research
            </li>
            <li className="hover:text-gray-300 hover:cursor-pointer">About</li>
            <li className="hover:text-gray-300 hover:cursor-pointer">
              Contact
            </li>
          </ul>
          <button className="bg-white text-blue-600 px-4 py-1 rounded-lg font-semibold hover:bg-blue-300 hover:text-white">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
