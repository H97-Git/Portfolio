import { motion } from "framer-motion";
import React from "react";

const Underline = () => {
  return (
    <motion.div
      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600"
      layoutId="underline"></motion.div>
  );
};

export default Underline;
