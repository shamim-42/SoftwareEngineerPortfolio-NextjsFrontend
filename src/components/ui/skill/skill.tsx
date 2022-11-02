import { Skills } from '@/types';
import { useEffect, useRef, useState } from 'react';
import SkillCard from '../../cards/skillCard';

const Skill = ({ skillsData }: any) => {
  const cardsRef = useRef(null as any);
  const [cards, setAllCards] = useState([]);

  useEffect(() => {
    setAllCards(cardsRef?.current?.children);
  }, []);

  return (
    <div className="md:mb-10">
      <h2 className="my-8 text-left text-3xl font-semibold text-[#515151]  md:text-4xl">
        Technical Skill
      </h2>

      <div
        className="grid gap-4 md:mt-12 md:grid-cols-4 md:gap-1"
        ref={cardsRef}
      >
        {skillsData.map((skills: Skills, index: number) => (
          <SkillCard
            key={index}
            index={index}
            cards={cards}
            skills={skills.attributes}
          />
        ))}
      </div>
    </div>
  );
};

export default Skill;
