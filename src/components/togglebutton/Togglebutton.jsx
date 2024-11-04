import React from "react";
import "./togglebutton.scss";

export const Togglebutton = ({ setOpen, open }) => {
  return (
    <div className="toggle">
      <button onClick={() => setOpen((prev) => !prev)}>
        {!open ? (
          <svg viewBox="0 0 100 80" width="40" height="20">
            <rect width="100" height="12"></rect>
            <rect y="30" width="100" height="12"></rect>
            <rect y="60" width="100" height="12"></rect>
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        )}
      </button>
    </div>
  );
};
