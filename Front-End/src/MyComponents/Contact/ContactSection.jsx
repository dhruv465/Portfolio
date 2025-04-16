import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Send, Loader2, CheckCircle, XCircle, Mail, MapPin } from "lucide-react";
import { toast } from "react-hot-toast";
import { ParticleBackground } from "../../components/ui/particle-background";
import { AnimatedText } from "../../components/ui/animated-text";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(false);
    setError(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    fetch("https://portfolio-d10i.onrender.com/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        email: formData.email, 
        message: formData.message,
        name: formData.name
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.message === "Email sent successfully") {
          setSubmitted(true);
          // Form will reset after animation completes
        } else {
          setError(true);
          toast.custom((t) => (
            <div className="flex items-center gap-3 bg-red-50 border border-red-200 px-4 py-3 rounded-lg">
              <XCircle className="text-red-500" size={18} />
              <p>Failed to send message. Please try again.</p>
            </div>
          ));
        }
      })
      .catch(() => {
        setLoading(false);
        setError(true);
        toast.custom((t) => (
          <div className="flex items-center gap-3 bg-red-50 border border-red-200 px-4 py-3 rounded-lg">
            <XCircle className="text-red-500" size={18} />
            <p>Failed to send message. Please try again.</p>
          </div>
        ));
      });
  };

  const inputClasses = (field) => `
    w-full px-4 py-3 border rounded-lg transition-all
    ${focusedField === field ? 'border-black ring-1 ring-black' : 'border-gray-200'} 
    focus:ring-black focus:border-black
  `;

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Particle background for subtle movement */}
      <ParticleBackground quantity={30} staticity={30} ease={40} color="#000000" className="opacity-40 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="block mb-3 text-sm font-medium tracking-wider"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              GET IN TOUCH
            </motion.span>
            
            <AnimatedText
              text="Let's work together"
              className="text-3xl md:text-5xl font-bold mb-6"
              once={true}
              delay={0.1}
            />
            
            <motion.p 
              className="text-gray-600 mb-8 md:text-lg md:pr-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm currently available for freelance work and collaborations. 
              If you have a project you'd like to discuss, please get in touch!
            </motion.p>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div 
                  className="bg-white p-3 rounded-full shadow-sm"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "#000",
                    color: "#fff"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a 
                    href="mailto:hello@dhruv.dev" 
                    className="text-gray-600 hover:text-black transition-colors relative group"
                  >
                    hello@dhruv.dev
                    <motion.span 
                      className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300"
                      whileHover={{ width: "100%" }}
                    />
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div 
                  className="bg-white p-3 rounded-full shadow-sm"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "#000",
                    color: "#fff"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-5 h-5" />
                </motion.div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-gray-600">
                    Pune, India
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative element */}
            <motion.div
              className="absolute -bottom-20 -left-20 w-60 h-60 bg-yellow-200 rounded-full mix-blend-multiply blur-3xl opacity-20"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
          
          {/* Right column - Contact Form or Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm p-8 md:p-10 relative overflow-hidden min-h-[450px]"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ 
                      duration: 0.8, 
                      times: [0, 0.6, 1],
                      ease: "easeInOut"
                    }}
                    className="flex items-center justify-center mb-8"
                  >
                    <div className="relative">
                      <motion.div 
                        className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center"
                      >
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </motion.div>
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: [0, 1.5, 1],
                          opacity: [0, 0.8, 0]
                        }}
                        transition={{ 
                          duration: 1.5,
                          delay: 0.2,
                          repeat: 2,
                          repeatDelay: 1
                        }}
                        className="absolute inset-0 rounded-full border-4 border-green-400"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-center w-full max-w-sm px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                    <p className="text-gray-600 mb-8 text-base">
                      Thanks for reaching out. I'll get back to you soon.
                    </p>
                    
                    <motion.button
                      onClick={resetForm}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-black text-white rounded-lg font-medium"
                    >
                      Send another message
                    </motion.button>
                  </motion.div>
                  
                  {/* Success animation particles */}
                  <AnimatePresence>
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={`particle-${i}`}
                        initial={{ 
                          x: 0, 
                          y: 0,
                          opacity: 0,
                          scale: 0
                        }}
                        animate={{ 
                          x: (Math.random() - 0.5) * 200,
                          y: (Math.random() - 0.5) * 200,
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0.5, 0]
                        }}
                        transition={{ 
                          duration: 1.5 + Math.random(),
                          delay: 0.2 + i * 0.1,
                          ease: "easeOut"
                        }}
                        className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full"
                        style={{ 
                          backgroundColor: i % 3 === 0 ? '#10B981' : i % 2 === 0 ? '#000000' : '#FBBF24',
                          zIndex: 20
                        }}
                      />
                    ))}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={sendEmail} 
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <motion.div
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        placeholder="Your name"
                        required
                        className={inputClasses('name')}
                      />
                    </motion.div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <motion.div
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        placeholder="your@email.com"
                        required
                        className={inputClasses('email')}
                      />
                    </motion.div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <motion.div
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        placeholder="Tell me about your project..."
                        required
                        rows={5}
                        className={`${inputClasses('message')} resize-none`}
                      />
                    </motion.div>
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02, backgroundColor: "#111" }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-6 bg-black text-white rounded-lg font-medium flex items-center justify-center gap-2 ${
                      loading ? "opacity-70" : ""
                    }`}
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send message</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                            repeatDelay: 1
                          }}
                        >
                          <Send size={18} />
                        </motion.div>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
            
            {/* Decorative dots pattern */}
            <div className="absolute -right-12 -bottom-12 w-24 h-24 grid grid-cols-3 gap-2 opacity-10">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-black"
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ 
                    duration: 3, 
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
