import React, { useState } from 'react';
const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: 'Molecular Diagnostics and Research Laboratory (MDRL)',
      content: [
        "Molecular Diagnostics and Research Laboratory (MDRL) was established on 13th April 2020, inaugurated by Mr. Alok Tandon, IAS Commissioner Infrastructure and Industrial Development, Brig. Dr. Rakesh Gupta (Director, GIMS), Dr. Rajneesh Dube (Principal Secretary Medical Education), and Dr. Vivek Gupta, Incharge of Lab. The lab's vision is to serve patients with molecular testing and research facilities at the hospital and adjoining districts.",
        'The laboratory initially started with molecular testing of SARS CoV2 by real-time PCR and has tested more than 1650562 RT PCR test with 56852 positive tests reported to date. It has a capacity of testing 12000 RT PCR tests per day. The testing facility is accredited by ICMR, Delhi, ICMR-NIV, Pune, and is also qualified for the WHO standards.',
        'The laboratory was subsequently recognized as a validation center by the Department of Health Research – Indian Council of Medical Research for Antigen kits for COVID-19. The laboratory has core projects and has published more than 25 papers on COVID-19. It also envisions expanding its diagnostic facilities to other molecular markers for viral diseases and cancer.',
        'A total of 29 equipment available in the laboratory are including 7 real time PCR (Quant Studio 5 & 6, Aria Mix 96 well, Biorad CFX 96 well plate), 06 automated RNA extraction system (King fisher flex 96 well), Eppendorf centrifuge 5910RG, -80 Deep freezers nos 3, -20 Deep Freezers 04, Biosafety cabinets class 2A and 2B, thermal shaker and mixers and other complete equipment facilities.',
      ],
    },
    {
      title: 'Multi-disciplinary Research Unit (MRU)',
      content: [
        'MRU is mainly related to promoting, coordinating, and developing basic applied and clinical research. Setting benchmark and record-breaking performance in research, diagnostics, and patient care management through diagnostics in MDRL, the Government of India Ministry of Health sanctioned Multi-Disciplinary Research Unit and Family Welfare Department of Health and Research to our Institute on 1th October 2021 vide letter no F.No.R.130/07/2020- HR with a grant of 1.25 cr was sanctioned for its establishment in the first phase and subsequently for supporting it for research staff and contingency.',
        'A total of 29 equipment available in the laboratory are including thermal cycler, electrophoresis units, gel documentation systems, MultiSkan spectrophotometer, tissue lyser, adjustable pipettes, electronic weighing balance, water purification system, pH meter and other minor equipment.',
      ],
    },
    {
      title: 'Viral Research and Diagnostics Laboratory (VRDL)',
      content: [
        'The Viral Research and diagnostic research laboratory was sanctioned by the Government of India Ministry of Health and Family Welfare Department of Health and Research to our Institute on 4th October 2021 vide letter no F.No.R.15012/04/2021- HR-VRDL with a grant of 1,50,70,000/- was sanctioned for its infrastructure and equipment. Further 46,40,000/- was sanctioned for consumables, contingency, staff salary and travel. Subsequently another contingency of 1500000/- was received in 27th Feb 2024.',
        'VRDL Government Institute of Medical Sciences became functional on March 20th, 2022, under Dr. Vivek Gupta (Principal Investigator, VRDL till May 2024). Since then, it has been performing among the top VRDL labs in India. It has been doing molecular testing for the ZIKA virus and serological testing for Hepatitis B and hepatitis C viruses.',
        'VRDL GIMS has got permission and support for doing SARS CoV2 Sequencing from the National Institute of Virology, Pune, under the Department of Health and Research (DHR-ICMR), VRDL network scheme of a network of Laboratories for managing epidemics and Natural Calamities at India.',
        'The PI of VRDL is now Dr. Varun Goel (Assistant Professor, Microbiology Department) from May 2024.',
        'A total of 03 equipment is procured in laboratory and include InVitrogen Microscope (Pathological and Research) XL Core and other cell culture equipment.',
      ],
    },
    {
      title: 'Genome Sequencing Facility',
      content: [
        'The genome sequencing facility is a state-of-the-art facility developed by the Uttar Pradesh state Government. It was established by GIMS and inaugurated by the chief secretary of state on 19/06/2022. The facility works as an adjunct facility for the Molecular Diagnostics and Research Laboratory and performs DNA sequencing whenever required for enhanced testing.',
        'The genome sequencing facility is recognized in INSACOG, Department of Biotechnology, Govt. of India, for COVID-19 sequencing and has also done Beta globin gene disorders (thalassemia and sickle cell) projects.',
        'A fully furnished genomic sequencing facility with total of 29 key equipment including MiniSeq Illumina platform, fragment analyzer, gel documentation, electrophoresis, veriti PCR, refrigerators, -20 Deep fridges, ice flaking machine, centrifuges etc and all equipment required for library preparation and estimation.',
      ],
    },
  ];

  return (
    <div className="w-full">
      <div className="text-slate-800">
        <div className="md:p-10 p-1 text-left w-full">
          <h2 className="font-semibold sm:text-3xl text-xl mb-4 text-center">
            Departmental Information
          </h2>
          {sections.map((section, index) => (
            <div
              key={index}
              className="mb-4 w-full bg-blue-200 bg-opacity-30 rounded-lg border border-black shadow-md shadow-gray-400"
            >
              <div
                className="cursor-pointer p-4 text-base sm:text-xl font-semibold text-center"
                onClick={() => handleToggle(index)}
              >
                {section.title}
                <span className="float-right">
                  {openIndex === index ? '-' : '+'}
                </span>
              </div>
              {openIndex === index && (
                <div className="mb-2 mx-2 bg-white text-center border-2 rounded-md border-gray-200 p-2 py-4 font-semibold text-xs sm:text-base">
                  <ul className="text-left px-5 list-disc">
                    {section.content.map((item, index) => (
                      <li key={index} className="mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
