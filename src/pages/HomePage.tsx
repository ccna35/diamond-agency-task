import AboutUs from "../components/Navbar/sections/About Us/AboutUs";
import Causes from "../components/Navbar/sections/Causes/Causes";
import Donation from "../components/Navbar/sections/Donation/Donation";
import Hero from "../components/Navbar/sections/Hero/Hero";
import Mission from "../components/Navbar/sections/Mission/Mission";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Mission />
      <AboutUs />
      <Causes />
      <Donation />
    </main>
  );
};

export default HomePage;
