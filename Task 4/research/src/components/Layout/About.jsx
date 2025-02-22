import rakesh_gupta from '../../assets/Faculty and Staff Members/Faculty Members at Research Wing/Rakesh_Gupta.jpg';
import saurabh_srivastva from '../../assets/Faculty and Staff Members/Faculty Members at Research Wing/Saurabh_Srivastava.jpg';
import vivek_gupta from '../../assets/Faculty and Staff Members/Faculty Members at Research Wing/Vivek_Gupta.png';
import rupali_mathur from '../../assets/Faculty and Staff Members/Faculty Members at Research Wing/Rupali_Mathur.jpg';
import varun_goel from '../../assets/Faculty and Staff Members/Faculty Members at Research Wing/Varun_Goel.png';
import ravi_kumar_chaudhary from '../../assets/Faculty and Staff Members/Scientific Staff at the Research Wing/Ravi_Kumar_Chaudhary.jpg';
import mohd_kaushar_neyaz from '../../assets/Faculty and Staff Members/Scientific Staff at the Research Wing/Mohd_Kaushar_Neyaz.jpg';
import varun_chauhan from '../../assets/Faculty and Staff Members/Scientific Staff at the Research Wing/Varun_Chauhan.jpg';
import asiya_khan from '../../assets/Faculty and Staff Members/Scientific Staff at the Research Wing/Asiya_Khan.jpg';
import kirti_devi from '../../assets/Faculty and Staff Members/Scientific Staff at the Research Wing/Kirti_Devi.jpg';
import ambika from '../../assets/Faculty and Staff Members/Scientific Staff at the Research Wing/Ambika.jpg';
import neetu_singh from '../../assets/Faculty and Staff Members/Scientific Staff at the Research Wing/Neetu_Singh.jpg';
import Carousel from './Carousel';

const About = () => {
  const facultyMembers = [
    {
      photo: rakesh_gupta,
      name: 'Dr. (Brig) Rakesh Gupta',
      qualification: 'MD (Pead), M Phil (HHSM), Director, GIMS',
      researchField: 'Neonatology, HIV',
      dateOfJoining: '21.07.2018',
    },
    {
      photo: saurabh_srivastva,
      name: 'Dr. Saurabh Srivastava',
      qualification:
        'Professor & Head, Dept. of Medicine and CMS, MRU Nodal Officer',
      researchField: 'Diabetes, Obesity, Metabolic disorders',
      dateOfJoining: '28.12.2018',
    },
    {
      photo: vivek_gupta,
      name: 'Dr. Vivek Gupta',
      qualification:
        'MD (Pathology), PhD, DHR-ICMR Fellowship from, USA, HoD, Dept. of Research & Development, Associate Professor, Dept. of Pathology',
      researchField:
        'Molecular Genetic Pathology, Hematological Malignancies, Solid tumors, Infectious diseases',
      dateOfJoining: '26.02.2020',
    },
    {
      photo: rupali_mathur,
      name: 'Dr. Rupali Mathur',
      qualification:
        'MDS (Periodontics), Associate Professor, Dept. of Dentistry',
      researchField: '',
      dateOfJoining: '01.10.2022',
    },
    {
      photo: varun_goel,
      name: 'Dr. Varun Goel',
      qualification: 'MD (Microbiology), VRDL Nodal Officer',
      researchField: 'Microbiology',
      dateOfJoining: '20.02.2020',
    },
  ];
  const scientificStaff = [
    {
      photo: ravi_kumar_chaudhary,
      name: 'Dr. Ravi Kumar Chaudhary',
      qualification:
        'MTech (Genetic Eng.), PhD (Biotechnology), Senior Principal Scientist',
      researchField: 'Nanomolecular diagnostics, Regenerative Medicine',
      dateOfJoining: '21.11.2023',
    },
    {
      photo: mohd_kaushar_neyaz,
      name: 'Dr. Mohd Kaushar Neyaz',
      qualification: 'PhD, Senior Scientist',
      researchField: 'HPV and Cancer',
      dateOfJoining: '2020',
    },
    {
      photo: varun_chauhan,
      name: 'Dr. Varun Chauhan',
      qualification: 'PhD Parasitology, Scientist-C',
      researchField: 'Microbiology, Immuno informatics',
      dateOfJoining: '12.04.2023',
    },
    {
      photo: asiya_khan,
      name: 'Dr. Asiya Khan',
      qualification: 'PhD Biotechnology, Scientist-B',
      researchField: 'Molecular Diagnostics, Cancer biology, Immune markers',
      dateOfJoining: '1.07.2024',
    },
    {
      photo: kirti_devi,
      name: 'Dr. Kirti Devi',
      qualification: 'PhD Biotechnology, Scientist-B',
      researchField: 'Metabolic health and prebiotic',
      dateOfJoining: '04.04.2023',
    },
    {
      photo: ambika,
      name: 'Dr. Ambika',
      qualification: 'PhD Life Sciences, Scientist-B',
      researchField: 'Molecular and Microbial Genetics',
      dateOfJoining: '03.10.2023',
    },
    {
      photo: neetu_singh,
      name: 'Mrs. Neetu Singh',
      qualification: 'MTech Biotechnology, Research Assistant',
      researchField: 'Genetic Engineering',
      dateOfJoining: '14.06.2024',
    },
  ];
  const nonTeachingStaff = [
    { position: 'Lab Technician', count: 4 },
    { position: 'Lab Attendant', count: 2 },
    { position: 'Data Entry Operator', count: 1 },
  ];
  return (
    <div className="box-border">
      <div className="m-4 p-2 py-4 rounded-lg bg-blue-100 sm:text-3xl text-xl font-semibold border">
        Department of Research & Development
      </div>
      <Carousel />
      <div className="w-full flex justify-center sm:py-10 py-5 sm:pt-0 pt-0">
        <div className="sm:w-11/12 px-1 flex items-center justify-center text-slate-800">
          <div className="bg-blue-200 bg-opacity-30 sm:p-10 p-1 rounded-lg shadow-md shadow-gray-400 border border-black text-left">
            <h2 className="font-semibold sm:text-3xl text-xl sm:mb-4 mb-1 text-center">
              Vision & Mission Statement
            </h2>
            <div className="sm:p-10 p-4 rounded-lg border border-black mb-4 bg-white">
              <h3 className="font-semibold sm:text-2xl text-lg">Our Vision</h3>
              <p className="font-semibold text-sm sm:text-base">
                The Department of Research & Development (Research Wing) was
                established in 2020 and is a central facility with
                state-of-the-art equipment to support clinical research and
                promote basic, clinical, and translation research. The
                department aims to promote laboratory-based investigation in
                multidisciplinary areas, assist clinicians and researchers in
                pursuing their interests in research, and provide technical and
                scientific manpower through collaborative projects.
              </p>
            </div>
            <div className="sm:p-10 py-4 px-5 rounded-lg border border-black mb-4 bg-white">
              <h3 className="font-semibold sm:text-2xl text-lg">Our Mission</h3>
              <ul className="font-semibold text-sm sm:text-base list-disc">
                <li>
                  Fostering fundamental, interdisciplinary, and clinical
                  research
                </li>
                <li>
                  Advancing medical knowledge through research to improve
                  healthcare
                </li>
                <li>Advancing healthcare delivery through rigorous research</li>
                <li>Collaborative partnerships for research</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-4 px-1 my-2 bg-blue-100 text-sm sm:text-base">
        <div className="text-center border-2 font-semibold rounded-md border-gray-500 sm:w-4/5 bg-white sm:p-8 p-2 flex overflow-x-scroll text-nowrap text-xs sm:text-base">
          <div className="w-full pr-4">
            <ul className="text-left">
              <li className="">Name of the Department</li>
              <li>Department Email</li>
              <li>Date of Establishment</li>
              <li>Name of the Head of Department</li>
              <li>Phone no.</li>
            </ul>
          </div>
          <div className="w-full">
            <ul className="text-left">
              <li>Department of Research & Development</li>
              <li>rdgimsgnoida@gmail.com</li>
              <li>2020</li>
              <li>Dr. Vivek Gupta</li>
              <li>Phone no.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="px-1 flex items-center justify-center text-slate-800">
          <div className="lg:p-10 text-left w-full">
            <h2 className="font-semibold sm:text-3xl text-lg mb-4 text-center">
              Faculty and Staff Members
            </h2>
            <div className="p-2 md:p-5 rounded-lg border border-black mb-4 bg-blue-200 bg-opacity-30 shadow-md shadow-gray-400 flex flex-col justify-center items-center">
              <h3 className="font-semibold sm:text-2xl text-lg">
                Faculty Members at Research Wing
              </h3>
              <div className="mx-auto w-full my-6 overflow-x-auto text-xs sm:text-base">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="">
                      <th className="py-2 px-4 border border-gray-400">
                        S. No
                      </th>
                      <th className="py-2 px-4 border border-gray-400">
                        Faculty Photo
                      </th>
                      <th className="py-2 px-4 border border-gray-400">
                        Name, Qualification, Appointment
                      </th>
                      <th className="py-2 px-4 border border-gray-400">
                        Research Field
                      </th>
                      <th className="py-2 px-4 border border-gray-400">
                        Date of Joining
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-semibold">
                    {facultyMembers.map((faculty, index) => (
                      <tr key={index}>
                        <td className="py-2 px-4 border border-gray-400">
                          {index + 1}
                        </td>
                        <td className="py-2 px-4 border border-gray-400">
                          <img
                            src={faculty.photo}
                            alt={`Faculty ${index + 1}`}
                            // className="h-26 w-20 object-cover"
                          />
                        </td>
                        <td className="py-2 px-4 border border-gray-400">
                          {faculty.name}
                          <br />
                          {faculty.qualification}
                        </td>
                        <td className="py-2 px-4 border border-gray-400">
                          {faculty.researchField}
                        </td>
                        <td className="py-2 px-4 border border-gray-400">
                          {faculty.dateOfJoining}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="p-2 md:p-5 rounded-lg border border-black mb-4 bg-blue-200 bg-opacity-30 shadow-md shadow-gray-400 flex flex-col justify-center items-center">
              <h3 className="font-semibold sm:text-2xl text-lg">
                Scientific Staff at the Research Wing
              </h3>
              <div className="mx-auto w-full my-6 overflow-x-auto text-xs sm:text-base">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border border-gray-400">
                        S. No.
                      </th>
                      <th className="py-2 px-4 border border-gray-400">
                        Scientific Staff Photo
                      </th>
                      <th className="py-2 px-4 border border-gray-400">
                        Name, Qualification, Appointment
                      </th>
                      <th className="py-2 px-4 border border-gray-400">
                        Research Field
                      </th>
                      <th className="py-2 px-4 border border-gray-400">
                        Date of Joining
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-semibold">
                    {scientificStaff.map((staff, index) => (
                      <tr key={index}>
                        <td className="py-2 px-4 border border-gray-400">
                          {index + 1}
                        </td>
                        <td className="py-2 px-4 border border-gray-400">
                          <img
                            src={staff.photo}
                            alt={`Staff ${index + 1}`}
                            className="h-26 w-20 object-cover"
                          />
                        </td>
                        <td className="py-2 px-4 border border-gray-400">
                          {staff.name}
                          <br />
                          {staff.qualification}
                        </td>
                        <td className="py-2 px-4 border border-gray-400">
                          {staff.researchField}
                        </td>
                        <td className="py-2 px-4 border border-gray-400">
                          {staff.dateOfJoining}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="px-2 py-4 rounded-lg border border-black mb-4 bg-blue-200 bg-opacity-30 shadow-md shadow-gray-400 flex flex-col justify-center items-center">
              <h3 className="font-semibold sm:text-2xl text-lg">
                Non-Teaching Staff of Research Wing
              </h3>
              <div className="flex justify-center mt-4 w-full text-sm sm:text-base">
                <table className="min-w-full bg-white border border-gray-200 text-center">
                  <thead>
                    <tr className="">
                      <th className="py-2 px-4 font-semibold border border-gray-400">
                        Position
                      </th>
                      <th className="py-2 px-4 font-semibold border border-gray-400">
                        Count
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {nonTeachingStaff.map((staff, index) => (
                      <tr className="" key={index}>
                        <td className="py-2 px-4 border border-gray-400">
                          {staff.position}
                        </td>
                        <td className="py-2 px-4 font-bold border border-gray-400">
                          {staff.count}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full">
        <div className="text-slate-800">
          <div className="md:p-10 p-1 text-left w-full">
            <h2 className="font-semibold sm:text-3xl text-xl mb-4 text-center">
              Departmental Information
            </h2>
            <div className="md:p-5 p-2 rounded-lg border border-black mb-4 bg-blue-200 bg-opacity-30 shadow-md shadow-gray-400 flex flex-col justify-center items-center">
              <h3 className="text-center font-semibold sm:text-2xl text-lg">
                Molecular Diagnostics and Research Laboratory (MDRL)
              </h3>
              <div className="mt-4 w-full">
                <div className="w-full bg-white text-center border-2 rounded-md border-gray-500 p-2 py-4 font-semibold text-sm sm:text-base">
                  <ul className="text-left px-5 list-disc">
                    <li>
                      Molecular Diagnostics and Research Laboratory (MDRL) was
                      established on 13th April 2020, inaugurated by Mr. Alok
                      Tandon, IAS Commissioner Infrastructure and Industrial
                      Development, Brig. Dr. Rakesh Gupta (Director, GIMS), Dr.
                      Rajneesh Dube (Principal Secretary Medical Education), and
                      Dr. Vivek Gupta, Incharge of Lab. The lab's vision is to
                      serve patients with molecular testing and research
                      facilities at the hospital and adjoining districts.
                    </li>
                    <li>
                      The laboratory initially started with molecular testing of
                      SARS CoV2 by real-time PCR and has tested more than
                      1650562 RT PCR test with 56852 positive tests reported to
                      date. It has a capacity of testing 12000 RT PCR tests per
                      day. The testing facility is accredited by ICMR, Delhi,
                      ICMR-NIV, Pune, and is also qualified for the WHO
                      standards.
                    </li>
                    <li>
                      The laboratory was subsequently recognized as a validation
                      center by the Department of Health Research – Indian
                      Council of Medical Research for Antigen kits for COVID-19.
                      The laboratory has core projects and has published more
                      than 25 papers on COVID-19. It also envisions expanding
                      its diagnostic facilities to other molecular markers for
                      viral diseases and cancer.
                    </li>
                    <li>
                      A total of 29 equipment available in the laboratory are
                      including 7 real time PCR (Quant Studio 5 & 6, Aria Mix 96
                      well, Biorad CFX 96 well plate), 06 automated RNA
                      extraction system (King fisher flex 96 well), Eppendorf
                      centrifuge 5910RG, -80 Deep freezers nos 3, -20 Deep
                      Freezers 04, Biosafety cabinets class 2A and 2B, thermal
                      shaker and mixers and other complete equipment facilities.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:p-5 p-2 rounded-lg border border-black mb-4 bg-blue-200 bg-opacity-30 shadow-md shadow-gray-400 flex flex-col justify-center items-center">
              <h3 className="text-center font-semibold sm:text-2xl text-lg">
                Multi-disciplinary Research Unit (MRU)
              </h3>
              <div className="mt-4 w-full">
                <div className="w-full bg-white text-center border-2 rounded-md border-gray-500 p-2 py-4 font-semibold text-sm sm:text-base">
                  <ul className="text-left px-5 list-disc">
                    <li>
                      MRU is mainly related to promoting, coordinating, and
                      developing basic applied and clinical research. Setting
                      benchmark and record-breaking performance in research,
                      diagnostics, and patient care management through
                      diagnostics in MDRL, the Government of India Ministry of
                      Health sanctioned Multi-Disciplinary Research Unit and
                      Family Welfare Department of Health and Research to our
                      Institute on 1th October 2021 vide letter no
                      F.No.R.130/07/2020- HR with a grant of 1.25 cr was
                      sanctioned for its establishment in the first phase and
                      subsequently for supporting it for research staff and
                      contingency.
                    </li>
                    <li>
                      A total of 29 equipment available in the laboratory are
                      including thermal cycler, electrophoresis units, gel
                      documentation systems, MultiSkan spectrophotometer, tissue
                      lyser, adjustable pipettes, electronic weighing balance,
                      water purification system, pH meter and other minor
                      equipment.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:p-5 p-2 rounded-lg border border-black mb-4 bg-blue-200 bg-opacity-30 shadow-md shadow-gray-400 flex flex-col justify-center items-center">
              <h3 className="text-center font-semibold sm:text-2xl text-lg">
                Viral Research and Diagnostics Laboratory (VRDL)
              </h3>
              <div className="mt-4 w-full">
                <div className="w-full bg-white text-center border-2 rounded-md border-gray-500 p-2 py-4 font-semibold text-sm sm:text-base">
                  <ul className="text-left px-5 list-disc">
                    <li>
                      The Viral Research and diagnostic research laboratory was
                      sanctioned by the Government of India Ministry of Health
                      and Family Welfare Department of Health and Research to
                      our Institute on 4th October 2021 vide letter no
                      F.No.R.15012/04/2021- HR-VRDL with a grant of
                      1,50,70,000/- was sanctioned for its infrastructure and
                      equipment. Further 46,40,000/- was sanctioned for
                      consumables, contingency, staff salary and travel.
                      Subsequently another contingency of 1500000/- was received
                      in 27th Feb 2024.
                    </li>
                    <li>
                      VRDL Government Institute of Medical Sciences became
                      functional on March 20th, 2022, under Dr. Vivek Gupta
                      (Principal Investigator, VRDL till May 2024). Since then,
                      it has been performing among the top VRDL labs in India.
                      It has been doing molecular testing for the ZIKA virus and
                      serological testing for Hepatitis B and hepatitis C
                      viruses.
                    </li>
                    <li>
                      VRDL GIMS has got permission and support for doing SARS
                      CoV2 Sequencing from the National Institute of Virology,
                      Pune, under the Department of Health and Research
                      (DHR-ICMR), VRDL network scheme of a network of
                      Laboratories for managing epidemics and Natural Calamities
                      at India.
                    </li>
                    <li>
                      The PI of VRDL is now Dr. Varun Goel (Assistant Professor,
                      Microbiology Department) from May 2024.
                    </li>
                    <li>
                      A total of 03 equipment is procured in laboratory and
                      include InVitrogen Microscope (Pathological and Research)
                      XL Core and other cell culture equipment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:p-5 p-2 rounded-lg border border-black mb-4 bg-blue-200 bg-opacity-30 shadow-md shadow-gray-400 flex flex-col justify-center items-center">
              <h3 className="text-center font-semibold sm:text-2xl text-lg">
                Genome Sequencing Facility
              </h3>
              <div className="mt-4 w-full">
                <div className="w-full bg-white text-center border-2 rounded-md border-gray-500 p-2 py-4 font-semibold text-sm sm:text-base">
                  <ul className="text-left px-5 list-disc">
                    <li>
                      The genome sequencing facility is a state-of-the-art
                      facility developed by the Uttar Pradesh state Government.
                      It was established by GIMS and inaugurated by the chief
                      secretary of state on 19/06/2022. The facility works as an
                      adjunct facility for the Molecular Diagnostics and
                      Research Laboratory and performs DNA sequencing whenever
                      required for enhanced testing.
                    </li>
                    <li>
                      The genome sequencing facility is recognized in INSACOG,
                      Department of Biotechnology, Govt. of India, for COVID-19
                      sequencing and has also done Beta globin gene disorders
                      (thalassemia and sickle cell) projects.
                    </li>
                    <li>
                      A fully furnished genomic sequencing facility with total
                      of 29 key equipment including MiniSeq Illumina platform,
                      fragment analyzer, gel documentation, electrophoresis,
                      veriti PCR, refrigerators, -20 Deep fridges, ice flaking
                      machine, centrifuges etc and all equipment required for
                      library preparation and estimation.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-full py-4 px-1 my-2 bg-blue-100">
        <div className="mx-auto border-2 font-semibold rounded-md border-gray-500 md:w-4/5 w-full bg-white p-7">
          <div className="w-full text-left">
            <h3 className="font-semibold text-lg sm:text-xl mb-2">
              The scope of research wing at Institute includes to do all types
              basic and advanced molecular testing and research work in:
            </h3>
            <ul className="text-left sm:text-base text-sm list-disc">
              <li>Molecular testing in oncology</li>
              <li>Molecular testing in infectious diseases</li>
              <li>Molecular testing in genetic diseases</li>
              <li>Gene expression analysis through real time PCR</li>
              <li>Development of new molecular diagnostics kits</li>
              <li>Validation of the newly developed molecular kits</li>
              <li>
                Basic molecular biology experimentation work and designing of
                protocol for molecular work
              </li>
              <li>Infectious serology markers</li>
              <li>Cell culture in virology</li>
              <li>
                Genome sequencing of SARS-CoV-2 (COVID-19) and other viruses
              </li>
              <li>Targeted gene expression profiling</li>
              <li>
                Identification on genetic abnormalities of rare diseases and
                inherited genetic disorders
              </li>
              <li>Genomics study in cancers</li>
              <li>Sequencing of viruses</li>
              <li>Metagenomics</li>
              <li>Pharmacogenomics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
