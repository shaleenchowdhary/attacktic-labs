const Contact = () => {
  const hospitalCoordinates = '28.433264754392017,77.5310409766999';

  return (
    <div className="w-full py-10">
      <div className="w-11/12 h-3/5 flex p-10 border border-gray-500 rounded-lg shadow-md shadow-gray-500 mx-auto">
        <div className="w-full h-full text-left">
          <h2 className="text-3xl">Contact</h2>
          <div className="py-10">
            <h3 className="text-xl">For any questions or concerns</h3>
            <h3 className="text-xl">call 123-456-7890</h3>
            <h3 className="text-xl">or fill out our form</h3>
          </div>
          <div>
            <iframe
              src={`https://www.openstreetmap.org/export/embed.html?bbox=77.5269,28.4318,77.5351,28.4347&layer=mapnik&marker=${hospitalCoordinates}`}
              width="90%"
              height="300"
              style={{ border: 0 }}
              title="Hospital Location"
            />
          </div>
        </div>
        <div className="w-full h-full px-4">
          <form className="w-full text-xl">
            <div className="flex justify-center gap-x-2 w-full">
              <div className="flex flex-col text-left w-full">
                <label htmlFor="firstname">Firstname</label>
                <input
                  type="text"
                  id="firstname"
                  className="h-10 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col text-left w-full">
                <label htmlFor="lastname">Lastname</label>
                <input
                  type="text"
                  id="lastname"
                  className="h-10 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-col text-left my-4">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                className="h-10 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col text-left">
              <label htmlFor="message">Message</label>
              <textarea className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button className="bg-blue-800 w-full my-10 text-white px-8 py-2 rounded-lg font-semibold hover:bg-blue-200 hover:text-blue-800">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
