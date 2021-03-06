import { motion, Variants } from "framer-motion";
import React from "react";
import { ImArrowDownLeft2, ImArrowDownRight2 } from "react-icons/im";
type Props = {
  children: React.ReactNode;
};
const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
const Deck = ({ children }: Props) => {
  return (
    <>
      <p className="text-center">
        <ImArrowDownRight2 className="inline-block h-7 w-7" />
        <a
          className="text-xl font-semibold text-gray-900 hover:text-indigo-500 dark:text-white
          "
          href="https://codepen.io/laijoann/pen/yLeKmVK">
          <span> ( Codepen.io ) </span>
        </a>
        <ImArrowDownLeft2 className="inline-block h-7 w-7" />
      </p>
      <div className="m-2">
        <motion.div
          variants={container}
          initial={"hidden"}
          animate={"show"}
          className="deck">
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default Deck;
