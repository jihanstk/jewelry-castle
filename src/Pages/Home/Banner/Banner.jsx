import { useEffect } from "react";
import "./Banner.css";
const Banner = () => {
  useEffect(() => {
    const banner = document.getElementById("banner-inter");
    const navBG = document.getElementById("main-nav");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            navBG.classList.add("nav-show");
          } else {
            navBG.classList.remove("nav-show");
          }
        });
        console.log(entries);
      },
      {
        rootMargin: "-200px",
      }
    );
    observer.observe(banner);
  }, []);
  return (
    <div className="flex" id="banner-inter">
      <div className="w-full ">
        <img
          src="https://i.ibb.co/Jjynj9y/pexels-ari-roberts-9637586.png"
          alt=""
          className="w-full "
        />
      </div>
      <div className="w-full bg-[#d1f2fd] flex flex-col justify-center align-middle ">
        <div className="mx-auto text-center">
          <p className="text-xl text-[#246183] font-semibold uppercase">
            personalize jewelry
          </p>
          <h1 className="text-5xl w-8/12 mx-auto text-[#358ebe] my-4">
            Care comes in the box of jewelry
          </h1>
          <button className="btn btn-outline btn-info mt-5">
            See Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
