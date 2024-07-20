import { Link } from 'react-router-dom';

const Home = () => {
  const imageUrl1 =
    'https://static.wixstatic.com/media/11062b_492005d00e8844a991e7d7ff0f68d834~mv2.jpeg/v1/fill/w_980,h_859,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_492005d00e8844a991e7d7ff0f68d834~mv2.jpeg';
  const imageUrl2 =
    'https://static.wixstatic.com/media/7fe3aa9f27174e71a08f03e22a50586c.jpg/v1/fill/w_1225,h_1249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7fe3aa9f27174e71a08f03e22a50586c.jpg';
  const imageUrl3 =
    'https://static.wixstatic.com/media/82fcd3_9de2b3736dd24d02a9a63b2cd6c1e742~mv2.jpg/v1/fill/w_1225,h_1095,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_9de2b3736dd24d02a9a63b2cd6c1e742~mv2.jpg';
  return (
    <div>
      <div
        className="h-screen w-full bg-cover bg-right-top"
        style={{ backgroundImage: `url(${imageUrl1})` }}
      >
        <div className="absolute sm:left-10 left-5 sm:w-1/2 w-4/5 h-full flex items-center text-slate-800">
          <div className="bg-white bg-opacity-30 sm:p-10 p-4 rounded-md text-left">
            <h2 className="font-semibold md:text-3xl text-lg sm:mb-4 mb-2">
              Department of Research & Development (Research Wing)
            </h2>
            <p className="mb-2 font-semibold lg:text-xl text-sm">
              The Department of Research & Development (Research Wing) was
              established in 2020 and is a central facility with
              state-of-the-art equipment to support clinical research and
              promote basic, clinical, and translation research. The department
              aims to promote laboratory-based investigation in
              multidisciplinary areas, assist clinicians and researchers in
              pursuing their interests in research, and provide technical and
              scientific manpower through collaborative projects.
            </p>
            <button className="bg-blue-800 text-white sm:px-8 px-4 py-2 text-sm md:text-base rounded-lg box-border font-semibold border border-transparent hover:bg-blue-100 hover:text-blue-800 hover:border-blue-800">
              Explore Services{' '}
              <span>
                <i className="fa-solid fa-circle-arrow-right"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 w-full p-4 bg-blue-100 text-sm sm:text-base">
        <div className="w-full text-center border-2 rounded-md border-gray-500 p-2 bg-white sm:h-96">
          <img
            className="w-20 mx-auto my-4"
            src="https://img.freepik.com/free-vector/check-mark-calendar-glyph-style_78370-6546.jpg?w=740&t=st=1720602374~exp=1720602974~hmac=8071f54825c7e00895ea7e921301d59636d01efb31735fbb6da985b75fa5a0c8"
            alt=""
          />
          <h3 className="text-xl font-medium">Quick and Reliable</h3>
          <p>
            Ensures the research has been evaluated by experts in their feild
            .Research clearly states the authors and their credentials,
            providing transparency and accountability.
          </p>
        </div>
        <div className="w-full text-center border-2 rounded-md border-gray-500 p-2 bg-white sm:h-96">
          <img
            className="w-20 mx-auto my-4"
            src="https://img.freepik.com/premium-vector/vector-arrow-center-board-target-target-vector-illustration_778914-44.jpg?w=740"
            alt=""
          />
          <h3 className="text-xl font-medium">Accurate and Professional</h3>
          <p>
            We take pride in offering the highest level of accuracy and
            professionalism in all our services. Our experienced team ensures
            that you receive the most precise results.
          </p>
        </div>
        <div className="w-full text-center border-2 rounded-md border-gray-500 p-2 bg-white sm:h-96">
          <img
            className="w-20 mx-auto my-4"
            src="https://img.freepik.com/premium-vector/notebook-with-bookmarks_444196-18056.jpg?w=740"
            alt=""
          />
          <h3 className="text-xl font-medium">Achievments</h3>
          <p>
            Testing of RT PCR in COVID: 1650562 Genome sequencing for COVID
            samples 96 Genome sequencing for thalassemia and sickle cell
            patients 58 Total no of research promotion activities 06
          </p>
        </div>
        <div className="w-full text-center border-2 rounded-md border-gray-500 p-2 bg-white sm:h-96">
          <img
            className="w-20 mx-auto my-4"
            src="https://img.freepik.com/free-vector/business-vision-concept-illustration_114360-7130.jpg?t=st=1720602994~exp=1720606594~hmac=ad43f0b69638c5021c690eb807fa6a39bdff7e688e76d9cee1b98bfa52004c2c&w=740"
            alt=""
          />
          <h3 className="text-xl font-medium">Vision & Mision</h3>
          <p>
            To emerge as the Global center of excellence encompassing the
            fundamental, interdisciplinary, and clinical approach, generating
            refutative research and offering effective and affordable health
            care for the benefit of mankind”.
          </p>
        </div>
      </div>
      <div className="flex h-screen p-4">
        <div className="w-full h-full flex items-center md:border-none border-2 border-blue-500 rounded-xl md:shadow-none shadow-md shadow-blue-500">
          <div className="w-full text-left lg:p-8 px-4 py-2">
            <h3 className="sm:text-3xl text-lg">RESEARCH</h3>
            <h3 className="sm:text-3xl text-lg">TRAINING</h3>
            <ul className="list-disc sm:my-4 my-2 text-sm sm:text-base px-4">
              <li>
                Research conclave at GIMS- A research conclave was organized to
                bring together researchers, scholars, academicians, and
                professionals from various disciplines to present their research
                findings, share knowledge, exchange ideas, and collaborate on
                future projects.
              </li>
              <li>
                The Department holds regular research activities, training,
                workshops, and journal clubs. Every 2nd Tuesday of the month
                research promotion activity is held and is open for all the
                neighboring colleges and universities to join and participate.
              </li>
              <li>
                Training is offered in molecular techniques to: Undergraduate
                students (MBBS), MSc students, PhD and Post-doctoral fellows,
                Biotechnology students
              </li>
            </ul>
            <button className="bg-blue-800 text-white sm:px-8 px-4 py-2 text-sm md:text-base rounded-lg box-border font-semibold border border-transparent hover:bg-blue-100 hover:text-blue-800 hover:border-blue-800">
              <Link to="/research">Discover More</Link>
            </button>
          </div>
        </div>
        <div className="w-full hidden md:block rounded-md overflow-hidden">
          <img
            className="w-full h-full object-cover object-top"
            src="https://static.wixstatic.com/media/82fcd3_0d9ed4370fec4747b4b0de41486a4ad4~mv2.jpg/v1/fill/w_613,h_974,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_0d9ed4370fec4747b4b0de41486a4ad4~mv2.jpg"
            alt=""
          />
        </div>
      </div>
      <div
        className="h-screen w-full bg-cover bg-right text-left flex flex-col justify-center md:p-20 p-4"
        style={{ backgroundImage: `url(${imageUrl2})` }}
      >
        <h3 className="md:text-3xl text-lg font-semibold">Our Departments</h3>
        <hr className="border-t-2 border-black my-5" />
        <div className="lg:w-1/2 w-full bg-white text opacity-50 py-4 px-4 rounded-xl hover:opacity-100 mb-5">
          <h4 className="md:text-xl text-base font-medium text-black">
            Molecular Diagnostic & Research Laboratory (MDRL)
          </h4>
        </div>
        <div className="lg:w-1/2 w-full bg-white text opacity-50 py-4 px-4 rounded-xl hover:opacity-100 mb-5">
          <h4 className="md:text-xl text-base font-medium text-black">
            Multi-disciplinary Research Unit (MRU)
          </h4>
        </div>
        <div className="lg:w-1/2 w-full bg-white text opacity-50 py-4 px-4 rounded-xl hover:opacity-100 mb-5">
          <h4 className="md:text-xl text-base font-medium text-black">
            Viral Research and Diagnostics Laboratory (VRDL)
          </h4>
        </div>
        <div className="lg:w-1/2 w-full bg-white text opacity-50 py-4 px-4 rounded-xl hover:opacity-100 mb-5">
          <h4 className="md:text-xl text-base font-medium text-black">
            Genome Sequencing Facility
          </h4>
        </div>
        <div className="lg:w-1/2 w-full bg-white text opacity-50 py-4 px-4 rounded-xl hover:opacity-100 mb-5">
          <h4 className="md:text-xl text-base font-medium text-black">
            Cell culture laboratory with BSL2+ facility
          </h4>
        </div>
      </div>
      <div className="h-screen w-full bg-cover bg-left text-left p-4">
        <div
          className="h-full w-full rounded-lg overflow-hidden flex justify-end items-center"
          style={{ backgroundImage: `url(${imageUrl3})` }}
        >
          <div className="sm:w-1/2 w-4/5 lg:h-1/2 h-fit bg-white sm:p-10 p-4">
            <h3 className="sm:text-3xl text-lg font-semibold">
              Explore Our Faculty
            </h3>
            <p className="sm:my-8 my-4 text-sm sm:text-base">
              Discover the state-of-the-art facilities at My Site, equipped with
              advanced technology to ensure accurate and efficient services.
              Click 'Edit Text' to add your own Home and make changes to the
              font.
            </p>
            <button className="bg-blue-800 text-white sm:px-8 px-4 py-2 text-sm md:text-base rounded-lg box-border font-semibold border border-transparent hover:bg-blue-100 hover:text-blue-800 hover:border-blue-800">
              <Link to="/about">Take A Tour</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
