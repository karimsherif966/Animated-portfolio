import { stagger, motion } from "framer-motion";
import React from "react";
const variants = {
  open: {
    transition: { staggerChildren: 0.06 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemsVariants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: 50,
  },
};

export const Links = ({ open }) => {
  const items = ["Homepage", "Services", "Portofolio", "Contact"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemsVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};
