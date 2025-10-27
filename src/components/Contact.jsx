import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  Calendar,
  Clock,
  CheckCircle,
  Star,
  Sparkles,
  ArrowRight,
  Globe,
  Shield,
  Zap,
  Users,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setSubmitMessage(result.message);

        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        }, 5000);
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage(
        error.message ||
          "Failed to send message. Please try again or contact us directly."
      );

      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9980948578",
      href: "tel:+919980948578",
      gradient: "from-emerald-500 via-green-500 to-teal-600",
      bgGlow: "bg-emerald-500/10",
      description: "Call us anytime during business hours",
    },
    {
      icon: Mail,
      title: "Email",
      value: "insight.technosoft@gmail.com",
      href: "mailto:insight.technosoft@gmail.com",
      gradient: "from-blue-500 via-indigo-500 to-purple-600",
      bgGlow: "bg-blue-500/10",
      description: "Get a response within 24 hours",
    },
    {
      icon: Mail,
      title: "Alternative Email",
      value: "abhay.varma@injitian.online",
      href: "mailto:abhay.varma@injitian.online",
      gradient: "from-purple-500 via-violet-500 to-indigo-600",
      bgGlow: "bg-purple-500/10",
      description: "Alternative contact method",
    },
    {
      icon: MapPin,
      title: "Address",
      value:
        "GM Infinite Silver Corner, Atmananda Colony, RT Nagar, Bangalore -32",
      href: "https://maps.google.com/?q=GM+Infinite+Silver+Corner+RT+Nagar+Bangalore",
      gradient: "from-red-500 via-pink-500 to-rose-600",
      bgGlow: "bg-red-500/10",
      description: "Visit our modern office space",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure & Confidential",
      description: "Your data is protected with enterprise-grade security",
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "We respond to all inquiries within 2 business hours",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Work directly with our senior developers and consultants",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with 24/7 support availability",
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 overflow-hidden py-16 lg:py-20"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            className={`absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full ${
              i % 2 === 0 ? "top-1/4" : "top-3/4"
            }`}
            style={{
              left: `${20 + i * 12}%`,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-xl flex items-center justify-center shadow-xl">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-1 -right-1"
              >
                <Sparkles className="w-4 h-4 text-yellow-500" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl blur-lg opacity-20 -z-10"></div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              Let's Create Something Amazing
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-base text-slate-600 max-w-2xl mx-auto"
          >
            Ready to transform your vision into reality? Let's discuss how we
            can bring your ideas to life with cutting-edge technology solutions.
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-8 mt-8 flex-wrap"
          >
            {[
              { icon: Star, text: "5-Star Rated", color: "text-yellow-500" },
              {
                icon: Shield,
                text: "Secure & Trusted",
                color: "text-green-500",
              },
              { icon: Zap, text: "Fast Response", color: "text-blue-500" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-slate-600"
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Premium Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Why Choose Us Section */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl">
              <h3 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-4">
                Why Choose Insight Technosoft?
              </h3>

              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/40 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Get in Touch
              </h3>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-start gap-3 p-4 bg-white/70 backdrop-blur-lg rounded-xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 group block relative overflow-hidden"
                >
                  {/* Background glow */}
                  <div
                    className={`absolute inset-0 ${info.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>

                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-lg`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-1">
                      {info.value}
                    </p>
                    <p className="text-slate-500 text-xs">{info.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300 ml-auto mt-2 relative z-10" />
                </motion.a>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600/90 to-indigo-700/90 backdrop-blur-lg rounded-2xl p-6 text-white border border-blue-400/20 shadow-xl relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>

              <div className="flex items-center mb-4 relative z-10">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-bold">Business Hours</h4>
              </div>
              <div className="space-y-3 text-sm relative z-10">
                {[
                  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map((schedule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm"
                  >
                    <span className="text-white/90">{schedule.day}:</span>
                    <span className="font-semibold text-white">
                      {schedule.hours}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-2xl rounded-2xl shadow-xl border border-white/20 p-6 lg:p-8 relative overflow-hidden">
              {/* Premium background patterns */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-500/10 to-blue-500/10 rounded-tr-full"></div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-6 right-6 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg opacity-20"
              />
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-6 left-6 w-4 h-4 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20"
              />

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                      Send us a Message
                    </h3>
                    <p className="text-slate-600 text-sm">
                      We'll get back to you within 24 hours
                    </p>
                  </div>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-3">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {submitMessage ||
                        "Thank you for reaching out! Our team will review your message and get back to you within 24 hours with a comprehensive response."}
                    </p>
                    <p className="text-sm text-slate-500">
                      You should receive a confirmation email shortly. Check
                      your spam folder if you don't see it.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {submitMessage && !isSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
                      >
                        {submitMessage}
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          viewport={{ once: true }}
                        >
                          <label className="block text-sm font-bold text-slate-700 mb-3">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-slate-200/50 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-slate-900 placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="Your full name"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <label className="block text-sm font-bold text-slate-700 mb-3">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={isLoading}
                            className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-slate-200/50 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-slate-900 placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="Your phone number"
                          />
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <label className="block text-sm font-bold text-slate-700 mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                          className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-slate-200/50 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-slate-900 placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="your.email@example.com"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <label className="block text-sm font-bold text-slate-700 mb-3">
                          Project Type *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                          className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-slate-200/50 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <option value="">Select project type...</option>
                          <option value="Web Development">
                            Web Development
                          </option>
                          <option value="Mobile App Development">
                            Mobile App Development
                          </option>
                          <option value="E-commerce Solutions">
                            E-commerce Solutions
                          </option>
                          <option value="Custom Software">
                            Custom Software
                          </option>
                          <option value="Digital Marketing">
                            Digital Marketing
                          </option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="Consulting">Consulting</option>
                          <option value="Other">Other</option>
                        </select>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <label className="block text-sm font-bold text-slate-700 mb-3">
                          Project Details *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                          rows={6}
                          className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border-2 border-slate-200/50 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none text-slate-900 placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="Tell us about your project requirements, timeline, budget, and any specific features you need..."
                        ></textarea>
                      </motion.div>

                      <motion.button
                        type="submit"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: isLoading ? 1 : 1.02,
                          y: isLoading ? 0 : -2,
                        }}
                        whileTap={{ scale: isLoading ? 1 : 0.98 }}
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-800 text-white font-bold py-5 px-8 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {isLoading ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                              />
                              Sending Message...
                            </>
                          ) : (
                            <>
                              Send Message
                              <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <Send className="w-5 h-5" />
                              </motion.div>
                            </>
                          )}
                        </span>

                        {/* Shimmer effect */}
                        {!isLoading && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        )}
                      </motion.button>

                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        viewport={{ once: true }}
                        className="text-xs text-slate-500 text-center mt-4"
                      >
                        By submitting this form, you agree to our privacy policy
                        and terms of service. We respect your privacy and will
                        never share your information.
                      </motion.p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Premium CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-16"
        >
          <div className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-2xl p-6 lg:p-10 text-white overflow-hidden">
            {/* Premium background patterns */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full"></div>

            {/* Floating elements */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
                className="absolute w-2 h-2 bg-white/30 rounded-full"
                style={{
                  left: `${10 + i * 10}%`,
                  top: `${20 + (i % 3) * 20}%`,
                }}
              />
            ))}

            <div className="relative z-10 text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl lg:text-3xl font-bold mb-4"
              >
                Ready to Get Started?
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-white/90 text-base mb-6 max-w-2xl mx-auto"
              >
                Let's schedule a consultation to discuss your project
                requirements and discover how our innovative solutions can
                accelerate your business growth and digital transformation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-700 font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 group relative overflow-hidden"
                  onClick={() =>
                    window.open(
                      "https://calendly.com/insight-technosoft",
                      "_blank"
                    )
                  }
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Calendar className="w-5 h-5" />
                    Schedule a Call
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 group"
                  onClick={() => window.open("tel:+919980948578")}
                >
                  <span className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </span>
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8 text-white/70 text-sm"
              >
                📞 Available Mon-Fri 9AM-6PM IST | 🚀 Free consultation | ⚡
                Same-day response
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
