import { motion, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import ContactButton from '../common/ContactButton';
import ScrollIndicator from '../common/ScrollIndicator';
import SocialIcons from '../common/SocialIcons';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

export default function Hero() {
  const containerRef = useRef(null);
  const scrollY = useSmoothScroll();
  const [pageHeight, setPageHeight] = useState(0);
  
  useEffect(() => {
    const updatePageHeight = () => {
      setPageHeight(document.documentElement.scrollHeight - window.innerHeight);
    };
    
    updatePageHeight();
    window.addEventListener('resize', updatePageHeight);
    return () => window.removeEventListener('resize', updatePageHeight);
  }, []);

  // Use scrollY from smoothScroll hook instead of useScroll
  const scrollYProgress = useTransform(scrollY, 
    [0, pageHeight],
    [0, 1]
  );

  // Add spring physics to scrollYProgress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5
  });

  // Use smoothProgress instead of scrollYProgress
  const frontX = useTransform(smoothProgress, 
    [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],     ['0%', '-10%', '-18%', '-25%', '-30%', '-34%', '-37%', '-40%', '-42%', '-44%', '-45.5%', '-46.5%', '-47.5%', '-48.2%', '-48.8%', '-49.2%', '-49.5%', '-49.7%', '-49.8%', '-49.9%', '-50%']

  );
  
  const endX = useTransform(smoothProgress, 
    [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1], 
    ['0%', '8%', '15%', '21%', '26%', '30%', '33%', '35%', '36.5%', '37.5%', '38.2%', '38.7%', '39%', '39.2%', '39.4%', '39.6%', '39.7%', '39.8%', '39.9%', '39.95%', '40%']
  );
  
  const dashWidth = useTransform(smoothProgress, 
    [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1], 
    ['15rem', '20rem', '24rem', '27rem', '30rem', '32.5rem', '34.5rem', '36rem', '37.5rem', '38.7rem', '39.8rem', '40.8rem', '41.7rem', '42.5rem', '43.2rem', '43.8rem', '44.2rem', '44.5rem', '44.7rem', '44.9rem', '45rem']
  );

  return (
    <div ref={containerRef} className="min-h-screen flex relative overflow-hidden">
      <div className="mx-5 xl:mx-5 mt-5 xl:mt-5 sm:px-0 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left flex flex-col w-full gap-0 xl:gap-4"
        >
          {/* Header Section */}
          <div className="flex flex-col xl:flex-row justify-between items-start w-full overflow-visible">
            <div className="flex xl:flex-row xl:gap-50">
              <h1 className="text-lg leading-none font-open-sauce font-bold mb-4 text-red-500">
                CHARLES <br /> <span className="text-[#6B6B6B]">DEL ROSARIO</span>
              </h1>
              <h2 className="text-lg absolute right-5 xl:right-0 xl:relative font-open-sauce font-bold leading-none text-[#6B6B6B]">
                DEVELOPER <br /> FOLIO <span className="text-red-500">2025</span>
              </h2>
            </div>
            <div className="flex items-center gap-6 mt-5 xl:mt-0">
              <SocialIcons />
              <div className="absolute right-0 xl:relative">
              <ContactButton />
              </div>
            </div>
          </div>

          {/* Scrolling Text Section */}
          <div className="mt-0 relative w-screen -ml-[2rem] overflow-visible pointer-events-none">
            <div className="flex items-start lg:items-center justify-center gap-4 text-[200px] flex-col lg:flex-row xl:text-[350px] font-bebas-neue font-bold text-[#6B6B6B] overflow-visible xl:-mt-20">
              <motion.span 
                initial={{ x: "0%" }}
                className="ml-8 xl:-ml-0 relative pointer-events-none tracking-[-0.3rem] lg:tracking-normal" 
                style={{ x: frontX }}
              >
                <span className="hover-highlight">F</span>
                <span className="hover-highlight">U</span>
                <span className="hover-highlight">L</span>
                <span className="hover-highlight">L</span>
              </motion.span>
              <motion.div 
                initial={{ width: "15rem" }}
                className="h-[20px] lg:h-[30px] bg-[#6B6B6B] overflow-visible lg:absolute xl:-ml-20 pointer-events-none ml-115 -mt-50 xl:mt-0"
                style={{ 
                  width: dashWidth,
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              />
              <motion.span 
                initial={{ x: "0%" }}
                className="mt-5 ml-8 xl:ml-70 relative pointer-events-none tracking-[-0.7rem] lg:tracking-normal" 
                style={{ x: endX }}
              >
                <span className="hover-highlight">S</span>
                <span className="hover-highlight">T</span>
                <span className="hover-highlight">A</span>
                <span className="hover-highlight">C</span>
                <span className="hover-highlight">K</span>
              </motion.span>
            </div>
            <div className="flex flex-col xl:flex-row align-text-top items-start pointer-events-auto w-full">
              <h2 className="text-[100px] xl:text-[320px] font-bold text-[#6B6B6B] font-bebas-neue -mt-25 ml-[2rem] xl:-mt-55 pointer-events-none whitespace-nowrap overflow-visible">
                <span className="hover-highlight">D</span>
                <span className="hover-highlight">E</span>
                <span className="hover-highlight">V</span>
                <span className="hover-highlight">E</span>
                <span className="hover-highlight">L</span>
                <span className="hover-highlight">O</span>
                <span className="hover-highlight">P</span>
                <span className="hover-highlight">E</span>
                <span className="hover-highlight">R</span>
              </h2>
              <p className="text-gray-400 font-open-sauce text-[18px] max-w-xl mt-3 xl:-mt-27 ml-[2rem] pointer-events-auto">
                <span className="font-regular font-bebas-neue text-[20px] text-[#6B6B6B]">ABOUT</span> I&apos;m a developer based in Mandaluyong City, Philippines, specializing in building interactive digital experiences on the web and with AI, collaborating with brands and industry leaders.
              </p>
              <div className="ml-[2rem] mt-8">
                <ScrollIndicator />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 