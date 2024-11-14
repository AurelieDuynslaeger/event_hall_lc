import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link';

const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };

const itemVariants = {
open: {
    opacity: 1,
    y: 0,
    transition: {
    when: "beforeChildren",
    },
},
closed: {
    opacity: 0,
    y: -15,
    transition: {
    when: "afterChildren",
    },
},
};


const Option = ({ text, Icon, setOpen, href
 }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-secondary text-primary hover:text-background transition-colors cursor-pointer"
      >
        <Link href={href} className='flex items-center gap-2'>
        <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span>
        <span>{text}</span>
        </Link>
      </motion.li>
    );
  };

export default Option