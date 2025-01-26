import { motion } from 'framer-motion';

export default function ContactButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-40 h-14 flex items-center justify-center -mt-2"
    >
      <svg viewBox="0 0 160 60" className="absolute inset-0 w-full h-full">
        <path
          d="M30 9 L130 9 L155 30 L130 50 L30 50 L5 30 Z"
          fill="transparent"
          stroke="#fb2c36"
          strokeWidth="1.5"
          className="transform"
        />
      </svg>
      <span className="relative z-10 text-red-500 font-open-sauce font-bold">
        CONTACT
      </span>
    </motion.button>
  );
} 