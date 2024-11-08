"use client"
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/ContactPage/Header"
import SocialsBlock from "@/components/ContactPage/SocialsBlock"
import ContactFormBlock from "@/components/ContactPage/ContactFormBlock"
import LocationBlock from "@/components/ContactPage/LocationBlock"
import ThankYouBlock from "@/components/ContactPage/ThankYouBlock"
import Footer from "@/components/ContactPage/Footer"

const ContactPage = () => {

    return (
        <div className="min-h-screen px-4 py-12 text-zinc-50">
           
            <motion.div
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.05,
                }}
                className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
            >
                 <Header />
                <SocialsBlock />
                <ContactFormBlock />
                <LocationBlock />
                <ThankYouBlock />
            </motion.div>
            <Footer />
        </div>
    );
};

export default ContactPage
