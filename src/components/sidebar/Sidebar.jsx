import React, { useState } from "react";
import { motion } from "framer-motion";
import { Togglebutton } from "../togglebutton/Togglebutton";
import { Links } from "../links/Links";
import "./sidebar.scss";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stifness: 20,
        damping: 60,
      },
    },
    closed: {
      clipPath: "circle(20px at 50px 50px)",
      transition: {
        type: "spring",
        stifness: 20,
        damping: 20,
      },
    },
  };
  return (
    <motion.div
      className="sidebar"
      animate={open ? "open" : "closed"}
      variants={variants}
    >
      <div className="bg" variants={variants}>
        <Links open={open} />
      </div>
      <Togglebutton setOpen={setOpen} open={open} />
    </motion.div>
  );
};
