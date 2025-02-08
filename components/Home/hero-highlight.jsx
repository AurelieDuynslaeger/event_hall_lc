"use client";
import { cn } from "@/lib/utils";
import { motion} from "motion/react";
import React from "react";

export const Highlight = ({
  children,
  className
}) => {
  return (
    (<motion.span
        initial={{
            backgroundSize: "0% 100%",
          }}
          animate={{
            backgroundSize: "100% 100%",
          }}
          transition={{
            duration: 1,
            ease: "linear",
            delay: 0.5,
          }}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            display: "inline",
          }}
          className={cn(
            `relative inline-block py-2 px-2 rounded-lg bg-gradient-to-r from-rose-100 to-rose-400`,
            className
          )}>
      {children}
    </motion.span>)
  );
};
