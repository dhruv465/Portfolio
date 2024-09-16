'use client'
import myImage from '../../assets/Dhruv.jpg'
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
                            Julia Huang is an innovative AI artist based in Los Angeles, renowned for blending cutting-edge technology with creative expression. With a background in both computer science and fine arts, Julia pushes the boundaries of what's possible in digital art and architecture.
                        </p>
                        <p>
                            Her work explores the intersection of artificial intelligence, generative design, and human creativity. Julia's projects have been featured in galleries worldwide and have garnered attention for their unique approach to reimagining urban spaces and architectural concepts.
                        </p>
                        <p>
                            When not working on her latest AI-driven art piece, Julia can be found mentoring young artists and technologists, advocating for ethical AI practices in creative fields, and exploring the vast potential of machine learning in design.
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.div>


    )
}