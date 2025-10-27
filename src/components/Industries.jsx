import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  CreditCard,
  ShoppingCart,
  GraduationCap,
  Factory,
  Plane,
  Building,
  Truck,
  Users,
  Tv,
  Zap,
  Phone,
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      id: 1,
      icon: Heart,
      title: "Healthcare",
      description:
        "Developing software solutions for electronic medical records (EMR), telemedicine platforms, patient management systems, medical imaging software, and healthcare analytics.",
      gradient: "from-red-500 to-pink-600",
      features: [
        "EMR Systems",
        "Telemedicine",
        "Patient Management",
        "Medical Imaging",
      ],
    },
    {
      id: 2,
      icon: CreditCard,
      title: "Finance and Banking",
      description:
        "Creating fintech applications for online banking, payment processing, mobile wallet apps, investment management platforms, trading platforms, and regulatory compliance software.",
      gradient: "from-green-500 to-emerald-600",
      features: [
        "Online Banking",
        "Payment Processing",
        "Trading Platforms",
        "Compliance",
      ],
    },
    {
      id: 3,
      icon: ShoppingCart,
      title: "E-commerce",
      description:
        "Building e-commerce websites, mobile apps, and omnichannel retail solutions for online stores, inventory management systems, payment gateways, and customer relationship management (CRM) software.",
      gradient: "from-blue-500 to-indigo-600",
      features: [
        "Online Stores",
        "Inventory Management",
        "Payment Gateways",
        "CRM Systems",
      ],
    },
    {
      id: 4,
      icon: GraduationCap,
      title: "Education",
      description:
        "Developing e-learning platforms, learning management systems (LMS), virtual classrooms, educational apps, student information systems (SIS), and online assessment tools.",
      gradient: "from-purple-500 to-violet-600",
      features: [
        "E-learning Platforms",
        "LMS",
        "Virtual Classrooms",
        "Assessment Tools",
      ],
    },
    {
      id: 5,
      icon: Factory,
      title: "Manufacturing",
      description:
        "Providing software solutions for supply chain management, inventory control systems, production planning software, quality management systems (QMS), and enterprise resource planning (ERP) systems tailored to manufacturing processes.",
      gradient: "from-orange-500 to-red-600",
      features: [
        "Supply Chain",
        "Inventory Control",
        "Production Planning",
        "ERP Systems",
      ],
    },
    {
      id: 6,
      icon: Plane,
      title: "Hospitality and Travel",
      description:
        "Creating booking and reservation systems for hotels, airlines, and travel agencies, as well as hospitality management software, property management systems (PMS), and customer loyalty programs.",
      gradient: "from-cyan-500 to-blue-600",
      features: [
        "Booking Systems",
        "PMS",
        "Travel Management",
        "Loyalty Programs",
      ],
    },
    {
      id: 7,
      icon: Building,
      title: "Real Estate",
      description:
        "Developing property management software, real estate listing platforms, CRM solutions for real estate agents, rental management systems, and virtual tour applications.",
      gradient: "from-teal-500 to-green-600",
      features: [
        "Property Management",
        "Listing Platforms",
        "CRM Solutions",
        "Virtual Tours",
      ],
    },
    {
      id: 8,
      icon: Truck,
      title: "Transportation and Logistics",
      description:
        "Building logistics management software, fleet management systems, route optimization software, warehouse management systems (WMS), and transportation analytics platforms.",
      gradient: "from-yellow-500 to-orange-600",
      features: [
        "Fleet Management",
        "Route Optimization",
        "WMS",
        "Analytics Platforms",
      ],
    },
    {
      id: 9,
      icon: Users,
      title: "Government and Public Sector",
      description:
        "Providing software solutions for government agencies, including citizen service portals, tax management systems, public safety software, and regulatory compliance tools.",
      gradient: "from-indigo-500 to-purple-600",
      features: [
        "Citizen Portals",
        "Tax Management",
        "Public Safety",
        "Compliance Tools",
      ],
    },
    {
      id: 10,
      icon: Tv,
      title: "Media and Entertainment",
      description:
        "Developing streaming platforms, content management systems (CMS), digital publishing solutions, video-on-demand (VOD) platforms, and interactive entertainment applications.",
      gradient: "from-pink-500 to-rose-600",
      features: [
        "Streaming Platforms",
        "CMS",
        "Digital Publishing",
        "VOD Platforms",
      ],
    },
    {
      id: 11,
      icon: Zap,
      title: "Energy and Utilities",
      description:
        "Creating software for energy management, utility billing systems, smart grid solutions, asset management software for energy infrastructure, and renewable energy monitoring platforms.",
      gradient: "from-amber-500 to-yellow-600",
      features: [
        "Energy Management",
        "Smart Grid",
        "Asset Management",
        "Monitoring Platforms",
      ],
    },
    {
      id: 12,
      icon: Phone,
      title: "Telecommunications",
      description:
        "Building communication software, billing and customer management systems for telecom companies, network management tools, and voice over internet protocol (VoIP) applications.",
      gradient: "from-violet-500 to-purple-600",
      features: [
        "Communication Software",
        "Billing Systems",
        "Network Management",
        "VoIP Applications",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="industries" className="section-padding gradient-bg">
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
            className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-primary-700 font-medium text-sm mb-6"
          >
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>5
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            INDUSTRIES
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-gray-800 mb-4"
          >
            Industries we cater to
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            We serve diverse industries with tailored technology solutions that
            address unique challenges and drive digital transformation across
            various sectors.
          </motion.p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover group cursor-pointer relative overflow-hidden"
            >
              {/* Background Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Industry Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-bold text-gray-400">
                    {industry.id < 10 ? `0${industry.id}` : industry.id}.
                  </div>
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${industry.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                  {industry.title}:
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                  {industry.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {industry.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div
                        className={`w-1.5 h-1.5 bg-gradient-to-r ${industry.gradient} rounded-full`}
                      ></div>
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
                  {industry.features.length > 2 && (
                    <div className="text-xs text-gray-500 italic">
                      +{industry.features.length - 2} more...
                    </div>
                  )}
                </div>

                {/* Hover Effect Indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${industry.gradient} transition-all duration-300`}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/40">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
            >
              Trusted Across Industries
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  12+
                </div>
                <div className="text-gray-600">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  250+
                </div>
                <div className="text-gray-600">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">
                  99%
                </div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              From startups to enterprise organizations, we deliver innovative
              solutions that transform businesses across all major industries.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
