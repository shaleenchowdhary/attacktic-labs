const Contact = () => {
  const hospitalCoordinates = '28.433264754392017,77.5310409766999';

  return (
    <div className="w-full py-10">
      <div className="sm:w-11/12 w-full h-3/5 grid grid-cols-1 gap-4 md:grid-cols-2 sm:p-5 p-2 sm:border border-black rounded-lg sm:shadow-md shadow-gray-500 sm:mx-auto">
        <div className="w-full h-full sm:border-none border border-black rounded-lg p-3">
          <form className="sm:text-xl text-base py-4">
            <div className="flex flex-col text-left">
              <label htmlFor="firstname">Firstname</label>
              <input
                required
                type="text"
                id="firstname"
                className="h-10 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col text-left">
              <label htmlFor="lastname">Lastname</label>
              <input
                type="text"
                id="lastname"
                className="h-10 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col text-left">
              <label htmlFor="email">Email*</label>
              <input
                required
                type="email"
                id="email"
                className="h-10 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col text-left">
              <label htmlFor="message">Message</label>
              <textarea
                required
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button className="bg-blue-800 w-full my-10 text-white px-8 py-2 rounded-lg font-semibold hover:bg-blue-200 hover:text-blue-800">
              Submit
            </button>
          </form>
        </div>
        <div className="w-full h-full text-left sm:border-none border border-black rounded-lg p-3">
          <h2 className="sm:text-3xl text-2xl">Contact</h2>
          <div className="sm:py-10 py-3">
            <h3 className="sm:text-xl text-base">
              For any questions or concerns
            </h3>
            <h3 className="sm:text-xl text-base">call 123-456-7890</h3>
            <h3 className="sm:text-xl text-base">or fill out our form</h3>
          </div>
          <div>
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
      </div>
    </div>
  );
};
export default Contact;
