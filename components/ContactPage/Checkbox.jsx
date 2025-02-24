import React, { useState } from 'react'
import {motion} from "motion/react"

const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <motion.label
    whileHover={{
      rotate: "2.5deg",
      scale: 1.1,
    }}
      onClick={handleClick}
      className={`cursor-pointer inline-block text-center mb-2 rounded-full px-4 py-2 border transition-colors duration-200 text-xl ${
        isChecked
          ? "bg-red-600 text-white border-red-600"
          : "bg-primary text-background border-rose-400"
      }`}
    >
      {label}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {}}
        className="hidden"
      />
    </motion.label>
  );
};


export default Checkbox