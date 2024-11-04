import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import { Sidebar } from "../sidebar/Sidebar";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Lama Dev
        </motion.span>
        <div className="social">
          <a href="">
            <img src="/assets/facebook.png" alt="" />
          </a>
          <a href="">
            <img src="/assets/instagram.png" alt="" />
          </a>
          <a href="">
            <img src="/assets/youtube.png" alt="" />
          </a>
          <a href="">
            <img src="/assets/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
