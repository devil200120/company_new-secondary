import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Values from "./components/Values";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Values />
        <Services />
        <Technologies />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
