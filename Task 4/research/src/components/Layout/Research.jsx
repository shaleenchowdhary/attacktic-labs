const Research = () => {
  const imageUrl1 =
    'https://static.wixstatic.com/media/11062b_492005d00e8844a991e7d7ff0f68d834~mv2.jpeg/v1/fill/w_980,h_859,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_492005d00e8844a991e7d7ff0f68d834~mv2.jpeg';
  const imageUrl2 =
    'https://static.wixstatic.com/media/7fe3aa9f27174e71a08f03e22a50586c.jpg/v1/fill/w_1225,h_1249,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7fe3aa9f27174e71a08f03e22a50586c.jpg';
  const imageUrl3 =
    'https://static.wixstatic.com/media/82fcd3_9de2b3736dd24d02a9a63b2cd6c1e742~mv2.jpg/v1/fill/w_1225,h_1095,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82fcd3_9de2b3736dd24d02a9a63b2cd6c1e742~mv2.jpg';
  return (
    <div>
      <div className="w-full flex justify-center my-10">
        <div className="w-11/12 flex items-center justify-center text-slate-800">
          <div className="bg-blue-200 bg-opacity-30 p-10 rounded-lg shadow-md shadow-gray-400 border border-black text-left">
            <h2 className="font-semibold lg:text-3xl mb-4 text-center">
              Department Training
            </h2>
            <div className="p-10 rounded-lg border border-black mb-4 bg-white">
              <h3 className="font-semibold lg:text-2xl">
                Research Conclave at GIMS
              </h3>
              <p className="">
                A research conclave was organized to bring together researchers,
                scholars, academicians, and professionals from various
                disciplines. The purpose of this conclave was to present
                research findings, share knowledge, exchange ideas, and
                collaborate on future projects.
              </p>
            </div>
            <div className="p-10 rounded-lg border border-black mb-4 bg-white">
              <h3 className="font-semibold lg:text-2xl">
                Regular Research Activities
              </h3>
              <p>
                The Department conducts regular research activities, including
                training sessions, workshops, and journal clubs. Every 2nd
                Tuesday of the month, a research promotion activity is held,
                which is open for participation from all neighboring colleges
                and universities.
              </p>
            </div>
            <div className="p-10 rounded-lg border border-black mb-4 bg-white">
              <h3 className="font-semibold lg:text-2xl">
                Training in Molecular Techniques
              </h3>
              <h4 className="font-semibold text-lg mt-2">
                Training is provided in molecular techniques to the following
                groups:
              </h4>
              <ul className="list-disc">
                <li>Undergraduate students (MBBS)</li>
                <li>MSc students</li>
                <li>PhD and Post-doctoral fellows</li>
                <li>Biotechnology students</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-10">
        <div className="w-11/12 flex items-center justify-center text-slate-800">
          <div className="bg-white bg-opacity-30 p-10 rounded-lg shadow-md shadow-gray-400 border border-black text-left w-full">
            <div className="p-10 rounded-lg border border-black mb-4 bg-blue-200 bg-opacity-30 flex flex-col justify-center items-center">
              <h3 className="font-semibold lg:text-2xl">
                Research Projects under research and development wing:
              </h3>
              <div className="flex justify-center gap-x-2 mt-4 w-full">
                <div className="w-full text-center font-semibold">
                  <ul className="">
                    <li>Total</li>
                    <li>Completed</li>
                    <li>Ongoing</li>
                  </ul>
                </div>
                <div className="w-full text-center">
                  <ul className="">
                    <li className="font-bold">24</li>
                    <li className="font-bold">15</li>
                    <li className="font-bold">09</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="mx-auto my-8">
              <h2 class="text-2xl font-semibold mb-4">
                List of ongoing extramural projects:
              </h2>
              <div class="overflow-x-auto">
                <table class="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr class="bg-blue-200 bg-opacity-30">
                      <th class="py-2 px-4 border-b">S.No.</th>
                      <th class="py-2 px-4 border-b">Principal Investigator</th>
                      <th class="py-2 px-4 border-b">Department</th>
                      <th class="py-2 px-4 border-b">
                        Title of the Research Proposal
                      </th>
                      <th class="py-2 px-4 border-b">Funding Agency</th>
                      <th class="py-2 px-4 border-b">Year of Sanction</th>
                      <th class="py-2 px-4 border-b">
                        Progress / Completion Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="py-2 px-4 border-b">1</td>
                      <td class="py-2 px-4 border-b">Dr. Rambha Pathak</td>
                      <td class="py-2 px-4 border-b">Community medicine</td>
                      <td class="py-2 px-4 border-b">
                        Prevalence and risk factors of Autism Spectrum disorders
                        in preschool children in western Uttar Pradesh: A
                        community based study
                      </td>
                      <td class="py-2 px-4 border-b">ICMR</td>
                      <td class="py-2 px-4 border-b">2022</td>
                      <td class="py-2 px-4 border-b">Ongoing</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b">2</td>
                      <td class="py-2 px-4 border-b">Dr. Rambha Pathak</td>
                      <td class="py-2 px-4 border-b">Community medicine</td>
                      <td class="py-2 px-4 border-b">
                        An Epidemiological Study of Sleep related Disorders and
                        its association with cardiovascular risk factors in
                        Adult Population of Western Uttar Pradesh
                      </td>
                      <td class="py-2 px-4 border-b">ICMR</td>
                      <td class="py-2 px-4 border-b">2022</td>
                      <td class="py-2 px-4 border-b">Ongoing</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b">3</td>
                      <td class="py-2 px-4 border-b">Dr. Shalini Bahadur</td>
                      <td class="py-2 px-4 border-b">Pathology</td>
                      <td class="py-2 px-4 border-b">
                        Validation of blood bags delivered by drones compared to
                        conventional method of transportation
                      </td>
                      <td class="py-2 px-4 border-b">ICMR</td>
                      <td class="py-2 px-4 border-b">2022</td>
                      <td class="py-2 px-4 border-b">Ongoing</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b">4</td>
                      <td class="py-2 px-4 border-b">Dr. Saurabh Srivastava</td>
                      <td class="py-2 px-4 border-b">Medicine</td>
                      <td class="py-2 px-4 border-b">
                        To assess the beneficial effect of adjuvant growth
                        hormone therapy in elderly individuals with chronic
                        congestive heart failure
                      </td>
                      <td class="py-2 px-4 border-b">ICMR</td>
                      <td class="py-2 px-4 border-b">2023</td>
                      <td class="py-2 px-4 border-b">Ongoing</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b">5</td>
                      <td class="py-2 px-4 border-b">Dr. Rashmi Upadhyay</td>
                      <td class="py-2 px-4 border-b">Pulmonary Medicine</td>
                      <td class="py-2 px-4 border-b">
                        Effect of COVID-19 vaccine on thrombotic events among
                        18-45 year old population in India 2022: Multicentric
                        hospital-based matched case-control study 4 months
                      </td>
                      <td class="py-2 px-4 border-b">ICMR</td>
                      <td class="py-2 px-4 border-b">2023</td>
                      <td class="py-2 px-4 border-b">Under process</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b">6</td>
                      <td class="py-2 px-4 border-b">Dr. Rashmi Upadhyay</td>
                      <td class="py-2 px-4 border-b">Pulmonary Medicine</td>
                      <td class="py-2 px-4 border-b">
                        Factors associated with sudden deaths among adults aged
                        18-45 years, India: Multicentric matched case-control
                        study
                      </td>
                      <td class="py-2 px-4 border-b">ICMR</td>
                      <td class="py-2 px-4 border-b">2023</td>
                      <td class="py-2 px-4 border-b">Ongoing</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b">7</td>
                      <td class="py-2 px-4 border-b">Dr. Rupali Kalsi</td>
                      <td class="py-2 px-4 border-b">Dentistry</td>
                      <td class="py-2 px-4 border-b">
                        Genetic Variations in Immunomodulatory genes and their
                        functional role in oral Carcinoma
                      </td>
                      <td class="py-2 px-4 border-b">ICMR</td>
                      <td class="py-2 px-4 border-b">2023</td>
                      <td class="py-2 px-4 border-b">Ongoing</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b">8</td>
                      <td class="py-2 px-4 border-b">Dr. Shivani Kalhan</td>
                      <td class="py-2 px-4 border-b">Pathology</td>
                      <td class="py-2 px-4 border-b">
                        AI-based tool for detection of breast and oral cancer
                      </td>
                      <td class="py-2 px-4 border-b">ICMR</td>
                      <td class="py-2 px-4 border-b">2023</td>
                      <td class="py-2 px-4 border-b">Ongoing</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b">9</td>
                      <td class="py-2 px-4 border-b">Dr. Vivek Gupta</td>
                      <td class="py-2 px-4 border-b">Pathology</td>
                      <td class="py-2 px-4 border-b">
                        Pan India Surveillance for Respiratory Viruses through
                        DHR-ICMR VRDL
                      </td>
                      <td class="py-2 px-4 border-b">ICMR</td>
                      <td class="py-2 px-4 border-b">2024</td>
                      <td class="py-2 px-4 border-b">Ongoing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="p-10 rounded-lg border border-black mb-4 bg-blue-200 bg-opacity-30 flex flex-col justify-center items-center">
              <h3 className="font-semibold lg:text-2xl">
                Research Projects under research and development wing:
              </h3>
              <div className="flex justify-center gap-x-2 mt-4 w-full">
                <div className="w-full text-center font-semibold">
                  <ul className="">
                    <li>Short term studentship (STS) ICMR Projects</li>
                    <li>Intramural Projects of Research Wing</li>
                    <li>Publications of Research Wing</li>
                  </ul>
                </div>
                <div className="w-full text-center">
                  <ul className="">
                    <li className="font-bold">Total 17</li>
                    <li className="font-bold">Total 176</li>
                    <li className="font-bold">
                      <i className="fa-solid fa-greater-than"></i>400
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="mx-auto my-8">
              <h2 class="text-2xl font-semibold mb-4">
                CME/Workshops Organized By The Department
              </h2>
              <div class="overflow-x-auto">
                <table class="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr class="bg-blue-200 bg-opacity-30">
                      <th class="py-2 px-4 border-b">Date</th>
                      <th class="py-2 px-4 border-b">Topic</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="py-2 px-4 border-b">3rd & 4th Nov 2022</td>
                      <td class="py-2 px-4 border-b">
                        Basic Molecular Diagnostic Techniques Jointly Organized
                        by Molecular Diagnostics and Research Laboratory,
                        Government Institute of Medical Sciences, Greater Noida
                        & Molecular Pathology Association of India
                      </td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b">16th Jan 2024</td>
                      <td class="py-2 px-4 border-b">
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
    </div>
  );
};
export default Research;
