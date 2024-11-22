import React, { useState } from 'react'
import {motion} from "framer-motion"

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
      className={`cursor-pointer inline-block text-center mb-2 rounded-full px-4 py-2 border transition-colors duration-200 text-sm ${
        isChecked
          ? "bg-red-600 text-white border-red-600"
          : "bg-background text-primary border-secondary"
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