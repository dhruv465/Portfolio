import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import Avatar from '../../assets/Dhruv-Avatar.png';

export default function Component() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // For button loading animation

  const soilParticleAnimation = {
    hidden: { opacity: 1, x: 0, y: 0, scale: 1 },
    visible: (i) => ({
      opacity: 0,
      x: Math.random() * 50 - 25,
      y: Math.random() * 150 + 50,
      scale: [1, 0.8, 0.2],
      rotate: Math.random() * 360,
      transition: {
        delay: i * 0.02,
        duration: 1.2,
        ease: "easeOut",
      },
    }),
  };

  const toastVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.5 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 20, scale: 0.5 },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { type: "spring", stiffness: 500, damping: 10 } },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Show button loading animation

    fetch("https://portfolio-m4r9oesff-dhruv465s-projects.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false); // Stop button loading animation
        if (data.message === "Email sent successfully") {
          showToast(true);
          setSubmitted(true);
          setTimeout(() => {
            setMessage("");
            setSubmitted(false);
          }, 1500);
        } else {
          showToast(false);
        }
      })
      .catch(() => {
        setLoading(false); // Stop button loading animation
        showToast(false);
      });
  };

  const showToast = (success) => {
    toast.custom((t) => (
      <AnimatePresence>
        {t.visible && (
          <motion.div
            variants={toastVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5"
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <motion.div variants={iconVariants} initial="hidden" animate="visible">
                    {success ? (
                      <img
                        className="h-10 w-10 rounded-full"
                        src={Avatar}
                        alt="Avatar"
                      />
                    ) : (
                      <XCircle className="h-10 w-10 text-red-500" />
                    )}
                  </motion.div>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {success ? "Dhruv" : "Error"}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {success
                      ? "I'll get back to you soon."
                      : "Failed to send the message. Please try again."}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    ));
  };

  return (
    <div id="contact" className="mt-12 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <h1 className="text-4xl font-bold text-center mb-2">Got a project idea?</h1>
        <h2 className="text-2xl font-semibold text-center mb-8">Drop me a message..</h2>
        <form onSubmit={sendEmail} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div>
              {submitted ? (
                <motion.div className="w-full h-40 p-4 text-lg border border-gray-300 rounded-3xl bg-white overflow-hidden flex flex-wrap">
                  {message.split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      variants={soilParticleAnimation}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                      style={{ display: "inline-block", fontSize: "20px", margin: "2px" }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.div>
              ) : (
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here"
                  className="w-full h-40 p-4 text-lg border border-gray-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
                  required
                />
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading} // Disable button when loading
              className={`px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full flex items-center space-x-2 focus:outline-none ${loading ? "opacity-50" : ""}`}
            >
              <AnimatePresence>
                {loading ? (
                  <motion.div
                    initial={{ opacity: 0, rotate: 0 }}
                    animate={{ opacity: 1, rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  >
                    <Loader2 className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <>
                    <span>Send</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
