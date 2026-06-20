import React from "react";
import Banner from "../components/home/Banner";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Testimonial from "../components/home/Testimonial";
import CallToAction from "../components/home/CallToAction";
import Footer from "../components/home/Footer";
import AnimatedSection from "../components/home/AnimatedSection";

const Home = () => {
  return (
    <div>
      <AnimatedSection delay={0}>
  <Banner />
</AnimatedSection>

<AnimatedSection delay={0.1}>
  <Hero />
</AnimatedSection>

<AnimatedSection delay={0.15}>
  <Features />
</AnimatedSection>

<AnimatedSection delay={0.2}>
  <Testimonial />
</AnimatedSection>

<AnimatedSection delay={0.25}>
  <CallToAction />
</AnimatedSection>

<AnimatedSection delay={0.3}>
  <Footer />
</AnimatedSection>
    </div>
  );
};

export default Home;