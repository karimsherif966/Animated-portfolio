import React, { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? (
          <>
            What We Do?
            <br />
            <div
              style={{
                fontSize: 17,
                textAlign: "center",
                fontWeight: "bolder",
              }}
            >
              scroll down to see our services
            </div>
          </>
        ) : (
          <>
            What We Did?
            <br />
            <div
              style={{
                fontSize: 17,
                textAlign: "center",
                fontWeight: "bolder",
              }}
            >
              scroll down to see our portofolio
            </div>
          </>
        )}
      </motion.h1>
      <motion.div className="mountains" style={{ y: ybg , backgroundImage:`url("./assets/mountains.png")` }}></motion.div>
      <motion.div
        className="planets"
        style={{
          y: ybg,
          backgroundImage: `url(${
            type === "services" ? "./assets/planets.png" : "./assets/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div className="stars" style={{ x: ybg , backgroundImage:`url("./assets/stars.png")` }}></motion.div>
    </div>
  );
};
