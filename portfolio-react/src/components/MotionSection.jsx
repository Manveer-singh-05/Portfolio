import { motion } from "framer-motion";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const MotionSection = ({ children, className = "", ...props }) => {
  return (
    <motion.section
    {...props}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;
