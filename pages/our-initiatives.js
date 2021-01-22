
import { motion, AnimatePresence } from "framer-motion";

export default function OurInitiatives(props) {
  console.log(props);
  let isVisible = true;
  return (
    <motion.div
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1 }}
      exit = {{ opacity: 0 }}>
      <h1>Our Initiatives</h1>
    </motion.div>
  );
};
