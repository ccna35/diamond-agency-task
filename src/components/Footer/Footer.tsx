import { ArrowBigUp, InstagramIcon } from "lucide-react";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const gallery = [
  { id: 1, img: "./footer/gallery/gallery1.webp" },
  { id: 2, img: "./footer/gallery/gallery2.webp" },
  { id: 3, img: "./footer/gallery/gallery3.webp" },
  { id: 4, img: "./footer/gallery/gallery4.webp" },
  { id: 5, img: "./footer/gallery/gallery5.webp" },
  { id: 6, img: "./footer/gallery/gallery6.webp" },
];

const Footer = () => {
  const backToTop = () => window.scrollTo({ top: 0 });
  return (
    <footer className="relative bg-primary px-4 isolate mt-32">
      <div className="relative px-4 bg-greyBg py-32 -translate-y-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <article className="flex flex-col gap-8 items-start">
            <img src="./logo.webp" alt="Logo" />
            <p>
              Lorem Ipsum is simply dummy text of the industry orem Ipsum has
              been the industry's since the when unknown.
            </p>
            <div className="font-yeseva flex flex-col gap-4">
              <p className="text-2xl text-primary">Total Raised:</p>
              <p className="text-6xl gradient-text">$8,965</p>
            </div>
          </article>
          <article>
            <h2 className="flex items-center mb-8">
              <span className="inline-block h-1 w-12 bg-accent mr-4" />
              <span className="text-primary font-yeseva text-3xl">Gallery</span>
            </h2>
            <div className="inline-grid grid-cols-3 gap-2">
              {gallery.map(({ id, img }) => {
                return (
                  <div className="relative group" key={id}>
                    <img src={img} alt="" />
                    <div className="z-10 absolute left-0 top-0 w-full h-full gradientBg transition-all duration-500 opacity-0 group-hover:opacity-100 grid place-items-center">
                      <span>
                        <InstagramIcon style={{ color: "white" }} />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
          <article>
            <h2 className="flex items-center mb-8">
              <span className="inline-block h-1 w-12 bg-accent mr-4" />
              <span className="text-primary font-yeseva text-3xl">
                Quick Links
              </span>
            </h2>
            <div className="flex gap-16">
              <div className="flex flex-col gap-4">
                <Link to="/" className="footerLink">
                  About Us
                </Link>
                <Link to="/" className="footerLink">
                  About Us
                </Link>
                <Link to="/" className="footerLink">
                  About Us
                </Link>
                <Link to="/" className="footerLink">
                  About Us
                </Link>
                <Link to="/" className="footerLink">
                  About Us
                </Link>
                <Link to="/" className="footerLink">
                  About Us
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <Link to="/" className="footerLink">
                  About Us
                </Link>
                <Link to="/" className="footerLink">
                  About Us
                </Link>
                <Link to="/" className="footerLink">
                  About Us
                </Link>
                <Link to="/" className="footerLink">
                  About Us
                </Link>
                <Link to="/" className="footerLink">
                  About Us
                </Link>
                <Link to="/" className="footerLink">
                  About Us
                </Link>
              </div>
            </div>
          </article>
        </div>
        <div className="absolute bottom-0 translate-y-1/2 -translate-x-1/2 left-1/2 w-12 h-12 gradientBg rounded-full grid place-items-center">
          <span className="text-white cursor-pointer" onClick={backToTop}>
            <ArrowBigUp />
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10">
        <img
          src="./footer/banner-title-shape.webp"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-8 text-white">
        <p className="text-center">
          © 2025 <span className="text-accent">Givest</span>. Made
          <span className="text-accent inline-block mx-1">
            <BsHeartFill />
          </span>
          with by HasThemes
        </p>
      </div>
    </footer>
  );
};

export default Footer;
