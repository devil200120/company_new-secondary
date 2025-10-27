import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Users, Trophy, Zap } from "lucide-react";

const Hero = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Trophy, number: "1000+", label: "Projects Completed" },
    { icon: Star, number: "5.0", label: "Client Rating" },
    { icon: Zap, number: "24/7", label: "Support" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden pt-16 lg:pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/40 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-indigo-200/30 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-24 h-24 bg-slate-200/50 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-12 h-12 bg-blue-300/40 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="container-custom relative z-10 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-700 font-semibold text-xs sm:text-sm mb-4 lg:mb-6 shadow-lg border border-white/50"
            >
              <Star className="w-4 h-4 mr-2 text-amber-500" />
              #1 Full Stack Development Company
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6"
            >
              We are full stack{" "}
              <span className="text-gradient">web, mobile & desktop</span> app
              development company
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 mb-6 lg:mb-8 leading-relaxed max-w-xl lg:max-w-2xl"
            >
              Connecting technology to business with innovative solutions that
              drive growth, efficiency, and digital transformation for companies
              across various industries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 lg:mb-12"
            >
              <button
                className="btn-primary group"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="btn-secondary group"
                onClick={() => {
                  // You can replace this with your actual demo video URL
                  window.open(
                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    "_blank"
                  );
                }}
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <div className="flex items-center justify-center lg:justify-start mb-1">
                    <stat.icon className="w-6 h-6 lg:w-7 lg:h-7 text-blue-600 mr-2" />
                    <span className="text-xl lg:text-2xl font-bold text-slate-900">
                      {stat.number}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs lg:text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 bg-white/80 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/60"
              >
                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                  <div className="space-y-3 lg:space-y-4">
                    <div className="h-16 lg:h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-md"></div>
                    <div className="h-10 lg:h-12 bg-gradient-to-r from-slate-400 to-slate-500 rounded-lg shadow-md"></div>
                  </div>
                  <div className="space-y-3 lg:space-y-4">
                    <div className="h-10 lg:h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg shadow-md"></div>
                    <div className="h-16 lg:h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg shadow-md"></div>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center border border-blue-100"
                >
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg"></div>
                </motion.div>

                <motion.div
                  animate={{ rotate: [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-3 -left-3 lg:-bottom-4 lg:-left-4 w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center border border-indigo-100"
                >
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg"></div>
                </motion.div>
              </motion.div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 blur-2xl lg:blur-3xl transform scale-110"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
