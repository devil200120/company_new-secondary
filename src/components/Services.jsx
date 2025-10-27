import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Globe,
  Palette,
  HeadphonesIcon,
  ArrowRight,
  Zap,
  Shield,
  Target,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Code,
      title: "Custom Software Development",
      description:
        "We specialize in crafting custom software solutions tailored to the unique requirements of each client. From web applications to mobile apps and enterprise systems, we leverage the latest technologies to deliver robust and scalable software products.",
      image: "/api/placeholder/600/400",
      gradient: "from-blue-500 to-blue-700",
      features: [
        "Web Applications",
        "Enterprise Systems",
        "API Development",
        "Cloud Integration",
      ],
    },
    {
      id: 2,
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Our mobile app development services cover Flutter, React Native, iOS, Android, and cross-platform development. Whether it's a consumer-facing app or an enterprise mobility solution, we have the expertise to bring your ideas to life and ensure a seamless user experience.",
      image: "/api/placeholder/600/400",
      gradient: "from-purple-500 to-purple-700",
      features: [
        "Flutter Development",
        "React Native",
        "iOS & Android",
        "Cross-platform",
      ],
    },
    {
      id: 3,
      icon: Globe,
      title: "Web Development",
      description:
        "From simple websites to complex web applications, we offer end-to-end web development services using cutting-edge technologies such as HTML5, CSS3, JavaScript, and frameworks like Flutter, React, Angular, and Vue.js.",
      image: "/api/placeholder/600/400",
      gradient: "from-green-500 to-green-700",
      features: [
        "React & Vue.js",
        "Modern Frameworks",
        "Responsive Design",
        "PWA Development",
      ],
    },
    {
      id: 4,
      icon: Palette,
      title: "UI/UX Design",
      description:
        "We understand the importance of user-centric design in creating engaging and intuitive software experiences. Our team of UI/UX designers works closely with clients to create visually stunning and user-friendly interfaces that enhance usability and drive customer satisfaction.",
      image: "/api/placeholder/600/400",
      gradient: "from-pink-500 to-pink-700",
      features: [
        "User Research",
        "Prototyping",
        "Design Systems",
        "Usability Testing",
      ],
    },
    {
      id: 5,
      icon: HeadphonesIcon,
      title: "Software Consulting",
      description:
        "Our experienced consultants offer strategic guidance and technical expertise to help businesses navigate the complexities of software development. From project planning and requirements analysis to technology selection and implementation, we provide end-to-end consulting services to ensure project success.",
      image: "/api/placeholder/600/400",
      gradient: "from-orange-500 to-orange-700",
      features: [
        "Strategic Planning",
        "Technical Guidance",
        "Architecture Design",
        "Project Management",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-medium text-sm mb-6"
          >
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>3
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            OUR SERVICES
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-primary-600 font-medium"
          >
            CONNECTING TECHNOLOGY TO BUSINESS
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium text-sm mb-6"
                >
                  <span className="text-lg font-bold mr-2">{service.id}.</span>
                  {service.title}
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  {service.title} :
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary group"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="relative group"
                >
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden">
                    {/* Icon Display */}
                    <div className="relative z-10">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <service.icon className="w-10 h-10 text-white" />
                      </div>

                      {/* Service Illustration */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="space-y-3">
                          <div
                            className={`h-4 bg-gradient-to-r ${service.gradient} rounded opacity-80`}
                          ></div>
                          <div
                            className={`h-3 bg-gradient-to-r ${service.gradient} rounded opacity-60`}
                          ></div>
                          <div
                            className={`h-2 bg-gradient-to-r ${service.gradient} rounded opacity-40`}
                          ></div>
                        </div>
                        <div className="space-y-3">
                          <div
                            className={`h-3 bg-gradient-to-r ${service.gradient} rounded opacity-60`}
                          ></div>
                          <div
                            className={`h-4 bg-gradient-to-r ${service.gradient} rounded opacity-80`}
                          ></div>
                          <div
                            className={`h-2 bg-gradient-to-r ${service.gradient} rounded opacity-40`}
                          ></div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex justify-between items-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">
                            50+
                          </div>
                          <div className="text-xs text-gray-600">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">
                            99%
                          </div>
                          <div className="text-xs text-gray-600">Success</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">
                            24/7
                          </div>
                          <div className="text-xs text-gray-600">Support</div>
                        </div>
                      </div>
                    </div>

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-4 right-4">
                        <service.icon className="w-32 h-32" />
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                      className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br ${service.gradient} rounded-lg opacity-60`}
                    ></motion.div>
                  </div>

                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 blur-2xl transform scale-110 group-hover:opacity-30 transition-opacity duration-300`}
                  ></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
            >
              Ready to Start Your Project?
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how we can help bring your ideas to life with our
              comprehensive development services.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary group"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
