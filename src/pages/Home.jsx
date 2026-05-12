import { Box } from "@chakra-ui/react";

import Seo from "../components/seo/Seo";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import TrustStrip from "../components/home/TrustStrip";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Clients from "../components/home/Clients";
import CTASection from "../components/ui/CTASection";

function Home() {
  return (
    <Box bg="abm.paper">
      <Seo
        title="ABM Codeworks | Web, Mobile & Software Development in Zimbabwe"
        description="ABM Codeworks designs and builds reliable websites, web apps, mobile apps, custom dashboards, school systems, e-commerce platforms and cloud software for organisations in Zimbabwe."
        path="/"
      />

      <Navbar />

      <Box as="main">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Clients />
        <CTASection />
      </Box>

      <Footer />
    </Box>
  );
}

export default Home;
