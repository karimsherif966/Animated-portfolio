import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

export const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    final: {
      x: 0,
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.5 },
    },
  };

  const scrollBtn = {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  };

  const text = {
    start: {
      x: "100vh",
    },
    end: {
      x: "-400vh",
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };
  return (
    <div className="hero">
      <motion.div
        className="wrapper"
        variants={textVariants}
        initial="initial"
        animate="final"
      >
        <motion.div className="textContainer" variants={textVariants}>
          <motion.h2 variants={textVariants}>KARIM SHERIF</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and UI designer
          </motion.h1>
        </motion.div>
        <motion.div className="buttons" variants={textVariants}>
          <motion.button variants={textVariants}>
            See the Latest Works
          </motion.button>
          <motion.button className="btn2" variants={textVariants}>
            Contact me
          </motion.button>
        </motion.div>
        <motion.div className="icon" variants={textVariants}>
          <motion.img src="./assets/scroll.png" animate={scrollBtn} />
        </motion.div>
      </motion.div>
      <motion.div
        className="slidingTextContainer"
        variants={text}
        initial="start"
        animate="end"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imgContainer">
        <img src="./assets/hero.png" />
      </div>
    </div>
  );
};
