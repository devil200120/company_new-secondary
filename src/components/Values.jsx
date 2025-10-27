import React from "react";
import { motion } from "framer-motion";
import { Eye, Target, Heart, Users } from "lucide-react";

const Values = () => {
  return (
    <section id="values" className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Vision Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 card-hover"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">VISION</h3>
                <p className="text-gray-600 text-sm">
                  To create, sustain and follow the right path
                </p>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 card-hover mt-8"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  MISSION
                </h3>
                <p className="text-gray-600 text-sm">
                  Develop a team that eats well, works well & enjoys well
                </p>
              </motion.div>

              {/* Team Image Placeholders */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl h-32 flex items-center justify-center"
              >
                <Users className="w-12 h-12 text-primary-600" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl h-32 flex items-center justify-center"
              >
                <Heart className="w-12 h-12 text-secondary-600" />
              </motion.div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary-300 rounded-full opacity-60 animate-bounce"></div>
            <div
              className="absolute -bottom-6 -left-6 w-10 h-10 bg-secondary-300 rounded-full opacity-40 animate-bounce"
              style={{ animationDelay: "1s" }}
            ></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-primary-700 font-medium text-sm mb-6"
            >
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
              2
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              OUR VALUES
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-primary-600 font-medium mb-8"
            >
              CONNECTING TECHNOLOGY TO BUSINESS
            </motion.p>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">VISION</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To create, sustain and follow the right path in technology
                  innovation, building lasting partnerships and delivering
                  exceptional value to our clients while maintaining the highest
                  standards of quality and integrity.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">MISSION</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Develop a team that eats well, works well & enjoys well. We
                  believe in creating a positive work environment where
                  creativity flourishes, collaboration thrives, and every team
                  member can achieve their full potential.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Values;
