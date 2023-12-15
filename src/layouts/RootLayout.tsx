import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import ScreenLoader from "../components/Loaders/ScreenLoader";

const RootLayout = () => {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (showLoader) {
    return <ScreenLoader />;
  }
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
