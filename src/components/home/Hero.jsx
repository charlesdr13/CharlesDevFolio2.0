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
    [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1], 
    ['0%', '-2.5%', '-5%', '-7.5%', '-10%', '-12.5%', '-15%', '-17.5%', '-20%', '-22.5%', '-25%', '-27.5%', '-30%', '-32.5%', '-35%', '-37.5%', '-40%', '-42.5%', '-45%', '-47.5%', '-50%']
  );
  
  const endX = useTransform(smoothProgress, 
    [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1], 
    ['0%', '2%', '4%', '6%', '8%', '10%', '12%', '14%', '16%', '18%', '20%', '22%', '24%', '26%', '28%', '30%', '32%', '34%', '36%', '38%', '40%']
  );
  
  const dashWidth = useTransform(smoothProgress, 
    [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1], 
    ['15rem', '16.5rem', '18rem', '19.5rem', '21rem', '22.5rem', '24rem', '25.5rem', '27rem', '28.5rem', '30rem', '31.5rem', '33rem', '34.5rem', '36rem', '37.5rem', '39rem', '40.5rem', '42rem', '43.5rem', '45rem']
  );

  return (
    <div ref={containerRef} className="min-h-screen flex relative overflow-visible">
      <div className="mx-5 mt-5 px-6 md:px-12 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left flex flex-col w-full gap-4"
        >
          {/* Header Section */}
          <div className="flex flex-row justify-between items-start w-full overflow-visible">
            <div className="flex flex-row gap-50">
              <h1 className="text-md md:text-lg leading-none font-open-sauce font-bold mb-4 text-red-500">
                CHARLES <br /> <span className="text-[#6B6B6B]">DEL ROSARIO</span>
              </h1>
              <h2 className="text-md md:text-lg font-open-sauce font-bold leading-none text-[#6B6B6B]">
                DEVELOPER <br /> FOLIO <span className="text-red-500">2025</span>
              </h2>
            </div>
            <div className="flex items-center gap-6">
              <SocialIcons />
              <ContactButton />
            </div>
          </div>

          {/* Scrolling Text Section */}
          <div className="mt-0 relative w-screen -ml-[2rem] overflow-visible pointer-events-none">
            <div className="flex items-center justify-center gap-4 text-[350px] font-bebas-neue font-bold text-[#6B6B6B] overflow-visible lg:-mt-20">
              <motion.span 
                initial={{ x: "0%" }}
                className="lg:-ml-0 relative pointer-events-none" 
                style={{ x: frontX }}
              >
                <span className="hover-highlight">F</span>
                <span className="hover-highlight">U</span>
                <span className="hover-highlight">L</span>
                <span className="hover-highlight">L</span>
              </motion.span>
              <motion.div 
                initial={{ width: "15rem" }}
                className="h-[30px] bg-[#6B6B6B] overflow-visible absolute lg:-ml-20 pointer-events-none"
                style={{ 
                  width: dashWidth,
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              />
              <motion.span 
                initial={{ x: "0%" }}
                className="lg:ml-70 relative pointer-events-none" 
                style={{ x: endX }}
              >
                <span className="hover-highlight">S</span>
                <span className="hover-highlight">T</span>
                <span className="hover-highlight">A</span>
                <span className="hover-highlight">C</span>
                <span className="hover-highlight">K</span>
              </motion.span>
            </div>
            <div className="flex lg:flex-row align-text-top items-start pointer-events-auto w-full">
              <h2 className="text-[320px] font-bold text-[#6B6B6B] font-bebas-neue mt-4 ml-[2rem] lg:-mt-55 pointer-events-none whitespace-nowrap overflow-visible">
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
              <p className="text-gray-400 font-open-sauce text-[18px] max-w-xl -mt-27 ml-[2rem] pointer-events-auto">
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