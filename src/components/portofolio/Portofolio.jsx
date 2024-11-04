import React, { useRef } from "react";
import "./portofolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=300",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eveniet omnis quia porro delectus, voluptatibus esse! Culpa cumque dolore animi dolorum molestias quisquam quos blanditiis deserunt placeat veniam, repellat incidunt?",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=300",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eveniet omnis quia porro delectus, voluptatibus esse! Culpa cumque dolore animi dolorum molestias quisquam quos blanditiis deserunt placeat veniam, repellat incidunt?",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eveniet omnis quia porro delectus, voluptatibus esse! Culpa cumque dolore animi dolorum molestias quisquam quos blanditiis deserunt placeat veniam, repellat incidunt?",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&w=300",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eveniet omnis quia porro delectus, voluptatibus esse! Culpa cumque dolore animi dolorum molestias quisquam quos blanditiis deserunt placeat veniam, repellat incidunt?",
  },
];

const Single = ({ item }) => {
  return (
    <section>
      <div className="container">
        <motion.div
          className="wrapper"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <motion.div className="imageContainer">
            <img src={item.img} />
          </motion.div>
          <div className="textContainer">
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Portofolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const opacity = useTransform(scrollYProgress, [1, 0], [1, 0]);
  return (
    <div className="portofolio" ref={ref}>
      <div className="progress">
        <motion.h1 style={{ opacity }}>Featured Works</motion.h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
