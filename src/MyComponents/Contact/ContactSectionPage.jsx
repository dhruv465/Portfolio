import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
    return (
        <div className="flex flex-col justify-center items-center p-4">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-2xl"
            >
                {/* Contact Us Header */}
                <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#645CBB] to-[#865DFF]">
                    Contact
                </h1>

                {/* Under Development Text */}
                <p className="text-2xl mb-8 text-[#737373] font-medium">
                    Under Development!!
                </p>

                {/* Skeleton Form Structure */}
                <div className="space-y-4 w-full max-w-md mx-auto">
                    {/* Name Field Skeleton */}
                    <div className="w-full h-12 bg-gray-300 rounded-lg animate-pulse"></div>

                    {/* Email Field Skeleton */}
                    <div className="w-full h-12 bg-gray-300 rounded-lg animate-pulse"></div>

                    {/* Message Field Skeleton */}
                    <div className="w-full h-24 bg-gray-300 rounded-lg animate-pulse"></div>

                    {/* Submit Button Skeleton */}
                    <div className="w-full h-12 bg-gray-400 rounded-full animate-pulse"></div>
                </div>

                {/* Get in Touch Button */}
                <motion.div
                    className="mt-8 inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="bg-[#865DFF] text-white font-bold py-2 px-6 rounded-full transition duration-300">
                        Get in Touch (Soon!)
                    </span>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ContactUs;
