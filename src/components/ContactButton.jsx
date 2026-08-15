import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa6';

export default function FloatingCall() {
  return (
    <motion.a
      href="tel:+917406625447"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 1.4,
        type: 'spring',
        stiffness: 200,
      }}
      whileHover={{ scale: 1.08 }}
      className="
        fixed
        bottom-6
        right-6
        z-40
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#1A1A1A]
        text-white
        shadow-[0_10px_35px_-8px_rgba(26,26,26,0.6)]
      "
      aria-label="Call NEXT Ride"
    >
      <span
        className="
          absolute
          inline-flex
          h-full
          w-full
          animate-ping
          rounded-full
          bg-[#8B7D6B]
          opacity-30
        "
      />

      <FaPhone className="relative h-6 w-6" />
    </motion.a>
  );
}