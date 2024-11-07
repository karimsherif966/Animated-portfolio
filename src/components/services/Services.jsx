import React, { useRef } from "react";
import "./services.scss";
import { motion } from "framer-motion";
const variants = {
  initial: {
    opacity: 0,
    x: -100,
    y: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

export const Services = () => {
  const ref = useRef();
  return (
    <motion.div
      className="services"
      ref={ref}
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="./assets/people.webp" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{
            background: "Lightgray",
            color: "black",
            transition: { duration: 5 },
          }}
        >
          <h2>Branding</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "Lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "Lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "Lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
