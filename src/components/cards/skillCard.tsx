import { Key } from 'react';

interface SkillProps {
  index: Number;
  skills: {
    stack: string;
    data: string[];
  };
  cards: any;
}

const SkillCard: React.FC<SkillProps> = ({ skills, cards, index }) => {
  // mouse hover enter handler function
  const onMouseHandler = () => {
    if (cards.length) {
      cards[1].classList.remove('md:scale-125');
      cards[1].classList.remove('z-10');
      cards[1].classList.remove('bg-[#9DCC40]');
      cards[1].classList.remove('text-white');
    }
  };

  // Mouse out handler function
  const onMouseLeave = () => {
    cards[1].classList.add('md:scale-125');
    cards[1].classList.add('z-10');
    cards[1].classList.add('bg-[#9DCC40]');
    cards[1].classList.add('text-white');
  };

  return (
    <div
      className={`max-w-sm scale-100 rounded-lg border border-gray-200 bg-white p-6  shadow-md transition-transform duration-500  hover:z-10  hover:bg-[#9DCC40] hover:text-white md:hover:scale-125 ${
        index === 1 && 'z-10 bg-[#9DCC40] text-white md:scale-125'
      }`}
      onMouseEnter={onMouseHandler}
      onMouseLeave={onMouseLeave}
    >
      <h5 className="mb-2 inline-block border-b-[3px] pb-1.5  text-2xl font-bold tracking-tight">
        {skills.stack}
      </h5>

      <ul className="max-w-md list-inside list-disc space-y-1">
        {skills?.data.length > 0 &&
          skills.data.map((skill: string, i: Key) => <li key={i}>{skill}</li>)}
      </ul>
    </div>
  );
};

export default SkillCard;
