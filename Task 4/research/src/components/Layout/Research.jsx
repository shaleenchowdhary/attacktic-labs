import Accordion from './Accordion';

const Research = () => {
  return (
    <div id="research">
      <Accordion />
      <div className="w-full my-10">
        <div className="sm:w-11/12 p-1 mx-auto flex items-center justify-center text-slate-800">
          <div className="bg-white bg-opacity-30 sm:p-10 p-2 rounded-lg shadow-md shadow-gray-400 border border-black text-left w-full">
            <div className="sm:p-10 p-4 rounded-lg border border-black mb-4 bg-blue-200 bg-opacity-30 flex flex-col justify-center items-center">
              <h3 className="font-semibold text-base sm:text-xl text-center">
                Research Projects under research and development wing:
              </h3>
              <div className="mt-4 w-full text-xs sm:text-sm bg-white border border-gray-400">
                <table className="min-w-full bg-white border-gray-400">
                  <thead className="">
                    <tr className="border-gray-400 border-b">
                      <th className="py-2 px-4 text-center">Status</th>
                      <th className="py-2 px-4 text-center">Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-400">
                      <td className="py-2 px-4 text-center">Total</td>
                      <td className="py-2 px-4 text-center font-bold">24</td>
                    </tr>
                    <tr className="border-gray-400 border-b">
                      <td className="py-2 px-4 text-center">Completed</td>
                      <td className="py-2 px-4 text-center font-bold">15</td>
                    </tr>
                    <tr className="">
                      <td className="py-2 px-4 text-center">Ongoing</td>
                      <td className="py-2 px-4 text-center font-bold">09</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mx-auto my-8">
              <h2 className="text-base sm:text-xl text-center font-semibold mb-4">
                List of ongoing extramural projects:
              </h2>
              <div className="overflow-x-auto text-xs sm:text-sm">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-blue-200 bg-opacity-30">
                      <th className="py-2 px-4 border-b">S.No.</th>
                      <th className="py-2 px-4 border-b">
                        Principal Investigator
                      </th>
                      <th className="py-2 px-4 border-b">Department</th>
                      <th className="py-2 px-4 border-b">
                        Title of the Research Proposal
                      </th>
                      <th className="py-2 px-4 border-b">Funding Agency</th>
                      <th className="py-2 px-4 border-b">Year of Sanction</th>
                      <th className="py-2 px-4 border-b">
                        Progress / Completion Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">1</td>
                      <td className="py-2 px-4 border-b">Dr. Rambha Pathak</td>
                      <td className="py-2 px-4 border-b">Community medicine</td>
                      <td className="py-2 px-4 border-b">
                        Prevalence and risk factors of Autism Spectrum disorders
                        in preschool children in western Uttar Pradesh: A
                        community based study
                      </td>
                      <td className="py-2 px-4 border-b">ICMR</td>
                      <td className="py-2 px-4 border-b">2022</td>
                      <td className="py-2 px-4 border-b">Ongoing</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">2</td>
                      <td className="py-2 px-4 border-b">Dr. Rambha Pathak</td>
                      <td className="py-2 px-4 border-b">Community medicine</td>
                      <td className="py-2 px-4 border-b">
                        An Epidemiological Study of Sleep related Disorders and
                        its association with cardiovascular risk factors in
                        Adult Population of Western Uttar Pradesh
                      </td>
                      <td className="py-2 px-4 border-b">ICMR</td>
                      <td className="py-2 px-4 border-b">2022</td>
                      <td className="py-2 px-4 border-b">Ongoing</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">3</td>
                      <td className="py-2 px-4 border-b">
                        Dr. Shalini Bahadur
                      </td>
                      <td className="py-2 px-4 border-b">Pathology</td>
                      <td className="py-2 px-4 border-b">
                        Validation of blood bags delivered by drones compared to
                        conventional method of transportation
                      </td>
                      <td className="py-2 px-4 border-b">ICMR</td>
                      <td className="py-2 px-4 border-b">2022</td>
                      <td className="py-2 px-4 border-b">Ongoing</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">4</td>
                      <td className="py-2 px-4 border-b">
                        Dr. Saurabh Srivastava
                      </td>
                      <td className="py-2 px-4 border-b">Medicine</td>
                      <td className="py-2 px-4 border-b">
                        To assess the beneficial effect of adjuvant growth
                        hormone therapy in elderly individuals with chronic
                        congestive heart failure
                      </td>
                      <td className="py-2 px-4 border-b">ICMR</td>
                      <td className="py-2 px-4 border-b">2023</td>
                      <td className="py-2 px-4 border-b">Ongoing</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">5</td>
                      <td className="py-2 px-4 border-b">
                        Dr. Rashmi Upadhyay
                      </td>
                      <td className="py-2 px-4 border-b">Pulmonary Medicine</td>
                      <td className="py-2 px-4 border-b">
                        Effect of COVID-19 vaccine on thrombotic events among
                        18-45 year old population in India 2022: Multicentric
                        hospital-based matched case-control study 4 months
                      </td>
                      <td className="py-2 px-4 border-b">ICMR</td>
                      <td className="py-2 px-4 border-b">2023</td>
                      <td className="py-2 px-4 border-b">Under process</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">6</td>
                      <td className="py-2 px-4 border-b">
                        Dr. Rashmi Upadhyay
                      </td>
                      <td className="py-2 px-4 border-b">Pulmonary Medicine</td>
                      <td className="py-2 px-4 border-b">
                        Factors associated with sudden deaths among adults aged
                        18-45 years, India: Multicentric matched case-control
                        study
                      </td>
                      <td className="py-2 px-4 border-b">ICMR</td>
                      <td className="py-2 px-4 border-b">2023</td>
                      <td className="py-2 px-4 border-b">Ongoing</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">7</td>
                      <td className="py-2 px-4 border-b">Dr. Rupali Kalsi</td>
                      <td className="py-2 px-4 border-b">Dentistry</td>
                      <td className="py-2 px-4 border-b">
                        Genetic Variations in Immunomodulatory genes and their
                        functional role in oral Carcinoma
                      </td>
                      <td className="py-2 px-4 border-b">ICMR</td>
                      <td className="py-2 px-4 border-b">2023</td>
                      <td className="py-2 px-4 border-b">Ongoing</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">8</td>
                      <td className="py-2 px-4 border-b">Dr. Shivani Kalhan</td>
                      <td className="py-2 px-4 border-b">Pathology</td>
                      <td className="py-2 px-4 border-b">
                        AI-based tool for detection of breast and oral cancer
                      </td>
                      <td className="py-2 px-4 border-b">ICMR</td>
                      <td className="py-2 px-4 border-b">2023</td>
                      <td className="py-2 px-4 border-b">Ongoing</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">9</td>
                      <td className="py-2 px-4 border-b">Dr. Vivek Gupta</td>
                      <td className="py-2 px-4 border-b">Pathology</td>
                      <td className="py-2 px-4 border-b">
                        Pan India Surveillance for Respiratory Viruses through
                        DHR-ICMR VRDL
                      </td>
                      <td className="py-2 px-4 border-b">ICMR</td>
                      <td className="py-2 px-4 border-b">2024</td>
                      <td className="py-2 px-4 border-b">Ongoing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="sm:p-10 p-4 rounded-lg border border-black mb-4 bg-blue-200 bg-opacity-30">
              <h3 className="font-semibold text-base sm:text-xl text-center">
                Research Projects under research and development wing:
              </h3>
              <div className="mt-4 w-full text-xs sm:text-sm bg-white">
                <table className="w-full text-left border-collapse border border-gray-400 ">
                  <thead>
                    <tr>
                      <th className="p-2 font-semibold">Project/Publication</th>
                      <th className="p-2 font-semibold">Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2">
                        Short term studentship (STS) ICMR Projects
                      </td>
                      <td className="p-2 font-bold">Total 17</td>
                    </tr>
                    <tr>
                      <td className="p-2">
                        Intramural Projects of Research Wing
                      </td>
                      <td className="p-2 font-bold">Total 176</td>
                    </tr>
                    <tr>
                      <td className="p-2">Publications of Research Wing</td>
                      <td className="p-2 font-bold">
                        <i className="fa-solid fa-greater-than"></i>400
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mx-auto my-8">
              <h2 className="text-base sm:text-xl font-semibold mb-4">
                CME/Workshops Organized By The Department
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-blue-200 bg-opacity-30">
                      <th className="py-2 px-4 border-b">Date</th>
                      <th className="py-2 px-4 border-b">Topic</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">3rd & 4th Nov 2022</td>
                      <td className="py-2 px-4 border-b">
                        Basic Molecular Diagnostic Techniques Jointly Organized
                        by Molecular Diagnostics and Research Laboratory,
                        Government Institute of Medical Sciences, Greater Noida
                        & Molecular Pathology Association of India
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">16th Jan 2024</td>
                      <td className="py-2 px-4 border-b">
                        First MRU Conclave: Research Promotions for Research
                        Projects & Funding Opportunities
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-10">
        <div className="sm:w-11/12 mx-auto px-1 text-slate-800">
          <div className="bg-blue-200 bg-opacity-30 sm:p-10 px-2 py-4 rounded-lg shadow-md shadow-gray-400 border border-black text-left">
            <h2 className="font-semibold sm:text-3xl text-xl mb-4 text-center">
              Department Training
            </h2>
            <div className="p-3 sm:p-10 rounded-lg border border-black mb-4 bg-white">
              <h3 className="font-semibold text-base sm:text-xl">
                Research Conclave at GIMS
              </h3>
              <p className="sm:text-base text-sm">
                A research conclave was organized to bring together researchers,
                scholars, academicians, and professionals from various
                disciplines. The purpose of this conclave was to present
                research findings, share knowledge, exchange ideas, and
                collaborate on future projects.
              </p>
            </div>
            <div className="p-3 sm:p-10 rounded-lg border border-black mb-4 bg-white">
              <h3 className="font-semibold text-base sm:text-xl">
                Regular Research Activities
              </h3>
              <p className="sm:text-base text-sm">
                The Department conducts regular research activities, including
                training sessions, workshops, and journal clubs. Every 2nd
                Tuesday of the month, a research promotion activity is held,
                which is open for participation from all neighboring colleges
                and universities.
              </p>
            </div>
            <div className="p-3 sm:p-10 rounded-lg border border-black mb-4 bg-white">
              <h3 className="font-semibold text-base sm:text-xl">
                Training in Molecular Techniques
              </h3>
              <h4 className="font-semibold sm:text-lg text-base mt-2">
                Training is provided in molecular techniques to the following
                groups:
              </h4>
              <ul className="list-disc sm:text-base text-sm px-5">
                <li>Undergraduate students (MBBS)</li>
                <li>MSc students</li>
                <li>PhD and Post-doctoral fellows</li>
                <li>Biotechnology students</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Research;
