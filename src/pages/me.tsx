import Lorems from "@/components/organisms/content/lorems";
import typingcarousel from "@/services/typingcarousel";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import React, { RefObject, useEffect, useRef } from "react";

const page: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const MePage = () => {
  const headerRef = useRef<HTMLHeadingElement>();
  useEffect(() => {
    setTimeout(() => {
      typingcarousel(headerRef.current);
    }, 300);
  }, [headerRef]);
  return (
    <motion.section variants={page} initial={"hidden"} animate={"show"}>
      <Head>
        <title>Me</title>
      </Head>
      {/* TypeWritter */}
      <div className="flex items-center justify-center">
        <h1
          ref={headerRef as RefObject<HTMLHeadingElement>}
          className="my-10 text-center text-4xl font-semibold text-gray-900 dark:text-white md:text-5xl">
          {"I'm "}
        </h1>
        {/* <span className="input-cursor w-0.5 h-10 bg-white ml-2"></span> */}
      </div>
      <Lorems />
    </motion.section>
  );
};

export default MePage;
