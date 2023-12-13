import AboutUs from "../components/Sections/About Us/AboutUs";
import Blog from "../components/Sections/Blog/Blog";
import Causes from "../components/Sections/Causes/Causes";
import Donation from "../components/Sections/Donation/Donation";
import Events from "../components/Sections/Events/Events";
import Hero from "../components/Sections/Hero/Hero";
import Mission from "../components/Sections/Mission/Mission";
import Sponsors from "../components/Sections/Sponsors/Sponsors";
import Stats from "../components/Sections/Stats/Stats";
import Testimonials from "../components/Sections/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Mission />
      <AboutUs />
      <Causes />
      <Donation />
      <Stats />
      <Events />
      <Testimonials />
      <Blog />
      <Sponsors />
    </main>
  );
};

export default HomePage;
