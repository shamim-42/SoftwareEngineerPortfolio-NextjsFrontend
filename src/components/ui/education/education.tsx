import { EducationData } from '@/types';
import { Key } from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = ({ educationData }: any) => {
  return (
    <div className="container my-5 md:my-6">
      <h2 className="my-8 text-left text-3xl font-semibold text-[#515151] md:text-4xl">
        Education
      </h2>
      {educationData?.length > 0 &&
        educationData?.map((education: EducationData) => (
          <div
            key={education.id}
            className="  flex flex-col border-l border-[#BCBCBC] md:flex-row md:border-l-[0px]"
          >
            <div className="py-1 px-6 md:basis-2/5 md:px-10 md:py-6">
              <h3 className="job-title text-left text-xl font-semibold md:text-right md:text-2xl">
                {education.attributes.degree}
              </h3>
              <p className="job-location text-left text-base text-[#a4a2a2] md:text-right">
                {education.attributes.department}
              </p>
              <p className="job-time text-left text-base text-[#a4a2a2] md:text-right">
                {education.attributes.time}
              </p>
            </div>
            <div className="relative border-[#BCBCBC] py-4 px-6 md:basis-3/5 md:border-l-[2px] md:px-10 md:py-6">
              <div className="title  flex items-center">
                <span className="absolute -left-4 rounded-full bg-black p-1.5 md:-left-5 md:p-2">
                  <FaGraduationCap className="text-lg text-white md:text-2xl" />
                </span>
                <h3 className="text-xl font-semibold md:text-2xl">
                  {education.attributes.institute}
                </h3>
              </div>
              <span className="my-3 inline-block w-16 border-2	border-[#BCBCBC] bg-[#bcbcbc]"></span>
              <div className="">
                {education?.attributes.description?.length > 0 &&
                  education.attributes.description.map((point, index) => (
                    <div key={index} className="py-1">
                      {point.title && (
                        <p className="text-xl font-medium">{point.title}</p>
                      )}
                      {point.desc && <p>{point.desc}</p>}
                      {point.points.length > 0 && (
                        <ul className="list-disc space-y-1 text-[#656565]">
                          {point.points.map((item: string, i: Key) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Education;
