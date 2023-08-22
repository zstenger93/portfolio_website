import React, { useEffect, useState, useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[90%] h-[90%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.language}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [iteration, setIteration] = useState(0);
  const eH2Refs = [useRef(null), useRef(null), useRef(null)];
  const [intervalIds, setIntervalIds] = useState([null, null, null]);

  useEffect(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    eH2Refs.forEach((eH2Ref, index) => {
      const eH2Element = eH2Ref.current;

      if (!eH2Element) return;

      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          clearInterval(intervalIds[index]);

          const windowHeight = window.innerHeight;
          const elementTop = eH2Element.getBoundingClientRect().top;
          const middleOfScreen = windowHeight / 2;

          if (elementTop >= middleOfScreen) {
            const newIntervalId = setInterval(() => {
              setIteration((prevIteration) => {
                const updatedEH2Text = eH2Element.dataset.value
                  .split('')
                  .map((letter, index) => {
                    if (index < prevIteration) {
                      return eH2Element.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                  })
                  .join('');

                eH2Element.innerText = updatedEH2Text.replace(/\\n/g, '\n');

                if (prevIteration >= eH2Element.dataset.value.length) {
                  clearInterval(intervalIds[index]);
                }

                return prevIteration + 1 / 10; 
              });
            }, 1000); 

            const newIntervalIds = [...intervalIds];
            newIntervalIds[index] = newIntervalId;
            setIntervalIds(newIntervalIds);
          }
        }
      });

      observer.observe(eH2Element);

      return () => {
        observer.disconnect();
        clearInterval(intervalIds[index]);
      };
    });
  }, [eH2Refs, intervalIds]);

  return (
    <>
      <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
      <h2
        ref={eH2Refs[0]}
        data-value={'My journey'}
        className={`${styles.sectionHeadText} text-center experience-text`}
      ></h2>
      <h2
        ref={eH2Refs[1]}
        data-value={'on planet'}
        className={`${styles.sectionHeadText} text-center experience-text`}
      ></h2>
      <h2
        ref={eH2Refs[2]}
        data-value={'EARTH'}
        className={`${styles.sectionHeadText} text-center experience-text`}
      ></h2>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
