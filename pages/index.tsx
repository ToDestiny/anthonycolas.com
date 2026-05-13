import type { NextPage } from 'next';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Workshops } from '../components/Workshops';
import { Building } from '../components/Building';
import { Experience } from '../components/Experience';
import { Context } from '../components/Context';
import { Testimonials } from '../components/Testimonials';
import { Insights } from '../components/Insights';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#09090b] font-sans">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Workshops />
        <Building />
        <Experience />
        <Context />
        <Testimonials />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
