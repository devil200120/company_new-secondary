import React from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, Database, Cloud, Monitor, Cpu } from "lucide-react";

const Technologies = () => {
  const techCategories = [
    {
      title: "Programming Languages",
      items: [
        "Dart",
        "Java",
        "React",
        "Python",
        "C#",
        "JavaScript",
        "Swift",
        "Kotlin",
        "PHP",
        "Express",
        "GoLang",
        "Ruby on Rails",
      ],
      color: "primary",
    },
    {
      title: "Frameworks",
      items: [
        "Flutter",
        "Javascript",
        "Spring Boot",
        "Django",
        ".NET Core",
        "Node.js",
        "React Native",
        "Laravel",
        "Magento",
      ],
      color: "secondary",
    },
    {
      title: "CMS",
      items: ["WordPress"],
      color: "primary",
    },
    {
      title: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Hive"],
      color: "secondary",
    },
    {
      title: "Cloud Platforms",
      items: [
        "Amazon Web Services (AWS)",
        "Microsoft Azure",
        "Google Cloud Platform",
        "Digital Ocean",
      ],
      color: "primary",
    },
    {
      title: "Operating Systems",
      items: ["Windows", "Android", "iOS", "MAC", "Linux"],
      color: "secondary",
    },
    {
      title: "Devices",
      items: [
        "Mobiles",
        "Smart Watches",
        "Kiosk",
        "Smart TV",
        "Tablets",
        "iPad",
        "Desktop",
      ],
      color: "primary",
    },
  ];

  const iconMap = {
    "Programming Languages": Code2,
    Frameworks: Cpu,
    CMS: Monitor,
    Databases: Database,
    "Cloud Platforms": Cloud,
    "Operating Systems": Monitor,
    Devices: Smartphone,
  };

  return (
    <section
      id="technologies"
      className="section-padding dark-gradient-bg text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-400/20 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-secondary-400/20 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-24 h-24 bg-primary-300/20 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
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
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-300 font-medium text-sm mb-6"
          >
            <span className="w-2 h-2 bg-primary-400 rounded-full mr-2"></span>4
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            TECHNOLOGIES
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-primary-300 font-medium mb-8"
          >
            CONNECTING TECHNOLOGY TO BUSINESS
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-white mb-12"
          >
            Tech Stack We Follow
          </motion.p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, index) => {
            const IconComponent = iconMap[category.title];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${
                      category.color === "primary"
                        ? "from-primary-500 to-primary-700"
                        : "from-secondary-500 to-secondary-700"
                    } rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors duration-300">
                    {category.title}:
                  </h3>
                </div>

                {/* Tech Items */}
                <div className="space-y-2">
                  <p className="text-gray-300 leading-relaxed">
                    {category.items.join(", ")}
                  </p>
                </div>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    category.color === "primary"
                      ? "from-primary-600/10 to-primary-700/10"
                      : "from-secondary-600/10 to-secondary-700/10"
                  } rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </motion.div>
            );
          })}
        </div>

        {/* Technology Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-white mb-6"
            >
              Cutting-Edge Technology Stack
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg"
            >
              We stay at the forefront of technology, continuously updating our
              skills and adopting the latest tools and frameworks to deliver
              innovative solutions that drive business growth.
            </motion.p>

            {/* Technology Icons Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-8 mb-8"
            >
              {[Code2, Database, Cloud, Smartphone, Monitor, Cpu].map(
                (Icon, index) => (
                  <motion.div
                    key={index}
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
                    className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                )
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">20+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-400 text-sm">Frameworks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-gray-400 text-sm">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-400 text-sm">Cloud Platforms</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
