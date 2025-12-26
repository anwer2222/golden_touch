import React from "react";
import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Topbar from "@/components/Topbar";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Work from "@/components/Work";
import Faq from "@/components/Faq";
import Projects from "@/components/Projects";

const Home = () => {
  return(
    <div className="bg-background w-full overflow-x-hidden">
      <Topbar/>
      <Header/>
      <Hero/>
      <About/>
      <Stats/>
      <Services/>
      <Work/>
      <Projects/>
      <Testimonials/>
      <Faq/>
      <Content/>
      <Footer/>

    </div>
  )
}

export default Home