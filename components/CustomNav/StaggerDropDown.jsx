import { PiDotOutlineLight } from "react-icons/pi";
import { motion } from "framer-motion";
import Option from "./Option";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  
  
  const StaggeredDropDown = ({tabTitle}) => {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="p-8 pb-auto flex items-center justify-center">
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center gap-2 px-3 py-2 rounded-md"
          >
            <span className="font-medium text-xl">{tabTitle}</span>
            <motion.span variants={iconVariants}>
            <HiChevronDown />
            </motion.span>
          </button>
  
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col gap-2 p-2 rounded-lg  absolute top-[120%] left-[50%] w-48 overflow-hidden"
          >
            <Option setOpen={setOpen} Icon={PiDotOutlineLight} text="Meeting Rooms" href="/services/receptions/orangerie"/>
            <Option setOpen={setOpen} Icon={PiDotOutlineLight} text="Team Building" href="/services/receptions/saintloup"/>
          </motion.ul>
        </motion.div>
      </div>
    );
  };
  

  
  export default StaggeredDropDown;
  
