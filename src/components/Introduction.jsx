import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users2, Target, Lightbulb, Award } from "lucide-react";

const Introduction = () => {
  const features = [
    {
      icon: Target,
      text: "Insight as the name suggests uses the right technology to be leveraged in your business",
    },
    {
      icon: Users2,
      text: "We are proud to introduce ourselves as a Software Development, Design and Consulting firm focusing on development of mobile applications, web applications and desktop applications.",
    },
    {
      icon: Lightbulb,
      text: "We believe in accepting challenges and produce the outputs with flying colours",
    },
    {
      icon: Award,
      text: "We are dedicated to providing innovative and tailored solutions to meet the evolving needs of businesses across various industries.",
    },
    {
      icon: CheckCircle,
      text: "With a team of experienced developers, designers, and project managers, we strive to deliver high-quality software products that drive efficiency, productivity, and growth for our clients.",
    },
  ];

  return (
    <section id="introduction" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-medium text-sm mb-6"
            >
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
              1
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              INTRODUCTION
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-primary-600 font-medium mb-8"
            >
              CONNECTING TECHNOLOGY TO BUSINESS
            </motion.p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Team Illustration */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
              >
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    {/* Central figure */}
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                      <Users2 className="w-12 h-12 text-white" />
                    </div>

                    {/* Surrounding team members */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute"
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: `translate(-50%, -50%) rotate(${
                            i * 60
                          }deg) translateY(-60px)`,
                        }}
                      >
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-8 h-8 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary-50 rounded-xl">
                    <div className="text-2xl font-bold text-primary-600 mb-1">
                      150+
                    </div>
                    <div className="text-sm text-gray-600">Team Members</div>
                  </div>
                  <div className="text-center p-4 bg-secondary-50 rounded-xl">
                    <div className="text-2xl font-bold text-secondary-600 mb-1">
                      5+
                    </div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center p-4 bg-primary-50 rounded-xl">
                    <div className="text-2xl font-bold text-primary-600 mb-1">
                      12+
                    </div>
                    <div className="text-sm text-gray-600">Industries</div>
                  </div>
                  <div className="text-center p-4 bg-secondary-50 rounded-xl">
                    <div className="text-2xl font-bold text-secondary-600 mb-1">
                      20+
                    </div>
                    <div className="text-sm text-gray-600">Technologies</div>
                  </div>
                </div>
              </motion.div>

              {/* Background Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-200 rounded-full opacity-60 animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-200 rounded-full opacity-40 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
