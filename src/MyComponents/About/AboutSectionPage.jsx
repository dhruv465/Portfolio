'use client'
import myImage from '../../assets/Dhruv.png'
import { motion } from 'framer-motion'


export default function About() {

    return (


        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
        >
            <h2 className="text-4xl font-bold mb-8">About Dhruv Sathe</h2>
            <div className="bg-indigo-100 p-6 rounded-3xl">
                <div className="md:flex md:space-x-6">
                    <motion.img
                        src={myImage}
                        alt="Julia Huang"
                        className="w-full md:w-1/3 h-64 md:h-auto object-cover rounded-2xl mb-4 md:mb-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p>
                        I’m creative, unique, independent, passionate developer with extensive experience creating percussive and attractive marketing and communications.                         </p>
                        <p>
                        I look forward to work in a healthy, innovative & challenging environment extracting the best out of me, which is conductive to learn at professional as well as personal level thereby directing my future endeavours as an asset to the organisations.                        </p>
                        
                    </motion.div>
                </div>
            </div>
        </motion.div>


    )
}