import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Achivement } from './Achivement';
import { Calendar } from './Calendar';
import Contact from './Contact';
import Education from './Education';
import Faith from './Faith';
import Footer from './Footer';
import Gallery from './Galery';
import { Hero } from './Hero';
import NewsLetter from './NewsLetter';
import NewsSection from './NewsSection';
import Testimonials from './Testimonials';
import Video from './Video';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Education />
    <Faith />
    <Calendar />
    <Achivement />
    <NewsSection />
    <Gallery />
    <Video />
    <Testimonials />
    <NewsLetter />
    <Contact />
    <Footer />
  </div>
);

export { Base };
