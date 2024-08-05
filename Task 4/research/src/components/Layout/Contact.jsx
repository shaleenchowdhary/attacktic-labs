const Contact = () => {
  const hospitalCoordinates = '28.433264754392017,77.5310409766999';

  return (
    <div className="w-full py-10">
      <div className="sm:w-5/6 w-full h-3/5 grid grid-cols-1 gap-8 md:grid-cols-2 sm:p-5 p-2 sm:border border-black rounded-lg sm:shadow-md shadow-gray-500 sm:mx-auto">
        <div className="w-full h-full sm:border-none border border-black rounded-lg p-3">
          <form
            action="../../../mail.php"
            className="sm:text-xl text-base sm:py-4"
          >
            <div className="text-3xl text-left font-semibold">Get in touch</div>
            <div className="sm:text-xl text-base text-left pb-8">
              For any inquiries or assistance, please feel free to reach out to
              us. We are committed to responding promptly to your questions and
              concerns.
            </div>
            <div className="flex flex-col text-left gap-1 py-2">
              <label htmlFor="firstname">Firstname*</label>
              <input
                required
                type="text"
                id="firstname"
                className="h-10 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col text-left gap-1 py-2">
              <label htmlFor="lastname">Lastname</label>
              <input
                type="text"
                id="lastname"
                className="h-10 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col text-left gap-1 py-2">
              <label htmlFor="email">Email*</label>
              <input
                required
                type="email"
                id="email"
                className="h-10 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col text-left gap-1 py-2">
              <label htmlFor="message">Message*</label>
              <textarea
                required
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button className="bg-blue-800 w-full sm:mt-5 mt-2 text-white px-8 py-2 rounded-lg font-semibold hover:bg-blue-200 hover:text-blue-800">
              Submit
            </button>
          </form>
        </div>
        <div className="w-full h-full text-left sm:border-none border border-black rounded-lg p-3">
          <div className="sm:py-4 py-3">
            <div className="flex gap-2 items-baseline py-4">
              <i className="fa-solid fa-location-dot text-xl text-green-700"></i>
              <div>
                <h2 className="text-2xl font-semibold">GIMS, Greater Noida</h2>
                <h3 className="sm:text-xl text-base">
                  Gautam Buddha Nagar, Greater
                </h3>
                <h3 className="sm:text-xl text-base">
                  Noida, UP - 201310, India
                </h3>
              </div>
            </div>
            <div className="flex gap-2 items-baseline py-4">
              <i className="fa-solid fa-envelope text-xl text-green-700"></i>
              <div>
                <h2 className="text-2xl font-semibold">Email Us</h2>
                <h3 className="sm:text-xl text-base text-blue-800">
                  <a href="mailto:gimsgnoida16@gmail.com">
                    gimsgnoida16@gmail.com
                  </a>
                </h3>
              </div>
            </div>
            <div className="flex gap-2 items-baseline py-4">
              <i className="fa-solid fa-phone text-xl text-green-700"></i>{' '}
              <div>
                <h2 className="text-2xl font-semibold">Phone</h2>
                <h3 className="sm:text-xl text-base">+91 - 9999384468</h3>
                <h3 className="sm:text-xl text-base">+91 - 7303488196</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:p-8 p-4 sm:pb-0 pb-0">
        <iframe
          className="mx-auto sm:ml-0"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=77.5269,28.4318,77.5351,28.4347&layer=mapnik&marker=${hospitalCoordinates}`}
          width="100%"
          height="300"
          style={{ border: 0 }}
          title="Hospital Location"
        />
      </div>
    </div>
  );
};
export default Contact;
