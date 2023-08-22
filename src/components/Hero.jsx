import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [iteration, setIteration] = useState(0);

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    interval = setInterval(() => {
      const h1Element = document.querySelector(".hero-text");
      const pElement = document.querySelector(".hero-subtext");

      if (!h1Element || !pElement) {
        clearInterval(interval);
        return;
      }

      setIteration(prevIteration => {
        const updatedH1Text = h1Element.dataset.value
          .split("")
          .map((letter, index) => {
            if (index < prevIteration) {
              return h1Element.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        h1Element.innerText = updatedH1Text;

        const updatedPText = pElement.dataset.value
          .split("")
          .map((letter, index) => {
            if (index < prevIteration) {
              return pElement.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        pElement.innerText = updatedPText.replace(/\\n/g, '\n');
       
        if (prevIteration >= Math.max(h1Element.dataset.value.length, pElement.dataset.value.length)) {
          clearInterval(interval);
        }

        return prevIteration + 1 / 3;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto'>
      {/* purple dot with vertical line going down */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 data-value="Hi, I'm Zsolt" className={`${styles.heroHeadText} text-white hero-text`}>
            Hi, I'm <span className='text-[#915eff]'>Zsolt</span>
          </h1>
          <p data-value={`I'm a Software Development\\nstudent at 42 Heilbronn`} className={`${styles.heroSubText} mt-2 text-white-100 hero-subtext`}>
            I'm a Software Development\nstudent at 42 Heilbronn
          </p>
        </div>
      </div>
      <ComputersCanvas />
      {/* Scroll down animation */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
