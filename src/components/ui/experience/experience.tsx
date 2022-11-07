import { Key } from 'react';
import { MdWork } from 'react-icons/md';

const Experience = ({ experiences }: any) => {
  return (
    <div className="container my-5 md:my-6">
      <h2 className="my-8 text-left text-3xl font-semibold text-[#515151] md:text-4xl">
        Work Experience
      </h2>
      {experiences?.length > 0 &&
        experiences?.map(
          (
            experience: {
              attributes: {
                title: string;
                time: string;
                location: string;
                company: string;
                description: any[];
              };
            },
            index: Key | null | undefined
          ) => (
            <div
              key={index}
              className="  flex flex-col border-l border-[#BCBCBC] md:flex-row md:border-l-[0px]"
            >
              <div className="py-1 px-6 md:basis-2/5 md:px-10 md:py-6">
                <h3 className="job-title text-left text-xl font-semibold md:text-right md:text-2xl">
                  {experience.attributes.title}
                </h3>
                <p className="job-time text-left text-base text-[#a4a2a2] md:text-right">
                  {experience.attributes.time}
                </p>
                <p className="job-location text-left text-base text-[#a4a2a2] md:text-right">
                  {experience.attributes.location}
                </p>
              </div>
              <div className="relative border-[#BCBCBC] py-4 px-6 md:basis-3/5 md:border-l-[2px] md:px-10 md:py-6">
                <div className="title  flex items-center">
                  <span className="absolute -left-4 rounded-full bg-black p-1.5 md:-left-5 md:p-2">
                    <MdWork className="text-lg text-white md:text-2xl" />
                  </span>
                  <h3 className="company text-xl font-semibold md:text-2xl">
                    {experience.attributes.company}
                  </h3>
                </div>
                <span className="my-3 inline-block w-16 border-2	border-[#BCBCBC] bg-[#bcbcbc]"></span>
                <div className="">
                  {experience?.attributes.description?.length > 0 &&
                    experience.attributes.description.map(
                      (
                        point: {
                          title: string;
                          desc: string;
                          points: any[];
                        },
                        index: Key | null | undefined
                      ) => (
                        <div key={index} className="py-1">
                          <p className="text-xl font-medium">{point.title}</p>
                          {point.desc && <p>{point.desc}</p>}
                          {point.points.length > 0 && (
                            <ul className="list-disc space-y-1 text-[#656565]">
                              {point.points.map((item: string, i: Key) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )
                    )}
                </div>
              </div>
            </div>
          )
        )}
    </div>
  );
};

export default Experience;
