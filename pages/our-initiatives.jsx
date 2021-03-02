
import { motion } from "framer-motion";

const OurInitiatives = () => {
  return (
    <motion.div
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1 }}
      exit = {{ opacity: 0 }}>
      <h1>Our Initiatives</h1>
    </motion.div>
  );
};

export default OurInitiatives;
