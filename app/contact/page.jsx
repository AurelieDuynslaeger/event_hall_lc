"use client"
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/ContactPage/Header"
import SocialsBlock from "@/components/ContactPage/SocialsBlock"
import ContactFormBlock from "@/components/ContactPage/ContactFormBlock"
import LocationBlock from "@/components/ContactPage/LocationBlock"
import ThankYouBlock from "@/components/ContactPage/ThankYouBlock"

const ContactPage = () => {

    return (
        <div className="h-[90vh] flex flex-col items-center justify-center text-zinc-50">
            <motion.div
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.05,
                }}
                className="mx-auto grid max-w-5xl grid-flow-dense grid-cols-12 gap-3"
            >
                <Header />
                <SocialsBlock />
                <ContactFormBlock />
                <LocationBlock />
                <ThankYouBlock />
            </motion.div>
        </div>
    );
};

export default ContactPage
