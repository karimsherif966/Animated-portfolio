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
          <motion.a href="http://www.facebook.com" target="blank" whileHover={{scale:1.5}} transition={{duration:0.5}}>
            <img src="./assets/facebook.png" alt="" />
          </motion.a>
          <motion.a href="http://www.instagram.com" target="blank" whileHover={{scale:1.5}} transition={{duration:0.5}}>
            <img src="./assets/instagram.png" alt="" />
          </motion.a>
          <motion.a href="http://www.youtube.com" target="blank" whileHover={{scale:1.5}} transition={{duration:0.5}}>
            <img src="./assets/youtube.png" alt="" />
          </motion.a>
         
        </div>
      </div>
    </div>
  );
};
