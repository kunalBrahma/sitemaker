import { useEffect } from "react";
import AnimatedTitle from "./AnimatedTitle";
import Servicesection from "./Servicesection";
import { GoArrowRight } from "react-icons/go";
import gsap from "gsap";

const Services = () => {
  useEffect(() => {
    const main = document.querySelector("#main2");
    const cursor = document.querySelector("#cursor");

    const images = {
      "web-dev": "/img/1.jpg",
      graphics: "/img/2.jpg",
      dm: "/img/3.jpg",
      seo: "/img/4.jpg",
      ui: "/img/5.jpg",
    };

    const setImageSize = () => {
      if (window.innerWidth <= 768) {
        return { width: "120px", height: "80px" };
      }
      return { width: "220px", height: "150px" };
    };

    main.addEventListener("mousemove", function (dets) {
      gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.3,
        ease: "back.out(3)",
      });
    });

    Object.keys(images).forEach((id) => {
      const imageDiv = document.querySelector(`#${id}`);
      if (imageDiv) {
        imageDiv.addEventListener("mouseenter", function () {
          const { width, height } = setImageSize();
          cursor.innerHTML = `<img src="${images[id]}" alt="View More" style="width: ${width}; height: ${height};  border-radius: 10px;  overflow-x: hidden;">`;
          gsap.to(cursor, {
            scale: 3,
            width: "150px",
            height: "200px",
            borderRadius: "0%",
            backgroundColor: "transparent",
            overflowX: "hidden", 
          });
          gsap.to(`#${id}-icon`, {
            rotate: -30,
            duration: 0.5,
          });
        });

        imageDiv.addEventListener("mouseleave", function () {
          cursor.innerHTML = "";
          gsap.to(cursor, {
            scale: 1,
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: "white",
            color: "",
          });
          gsap.to("#web-dev-icon, #graphics-icon, #dm-icon, #seo-icon, #ui-icon ", {
            rotate: 0,
            duration: 0.5,
          });
        });
      }
    });

    window.addEventListener("resize", () => {
      const { width, height } = setImageSize();
    });
  }, []);

  return (
    <div className="mt-36 h-dvh w-screen pt-5 relative overflow-hidden ">
      <div className="relative mb-8 w-full h-dvh flex flex-col items-center gap-5 overflow-hidden ">
        <h2 className="font-general text-sm uppercase md:text-[30px] relative z-50">
          Our Services
        </h2>
        <AnimatedTitle
          title="Transforming Ideas into Reality <br> with Our Expert Solutions"
          containerClass="mt-5 !text-black text-center"
        />
        <Servicesection
          title="Web Development"
          id="web-dev"
          containerClass="border-b-2 mt-10 border-black pt-5"
          rightIcon={<GoArrowRight />}
          iconId="web-dev-icon"
        />
        <Servicesection
          title="Graphics Design"
          id="graphics"
          containerClass="border-b-2 border-black pt-4"
          rightIcon={<GoArrowRight />}
          iconId="graphics-icon"
        />
        <Servicesection
          title="Digital Marketing"
          id="dm"
          containerClass="border-b-2 border-black pt-4"
          rightIcon={<GoArrowRight />}
          iconId="dm-icon"
        />
        <Servicesection
          title="SEO"
          id="seo"
          containerClass="border-b-2 border-black pt-4"
          rightIcon={<GoArrowRight />}
          iconId="seo-icon"
        />
        <Servicesection
          title="UI/UX"
          id="ui"
          containerClass="border-b-2 border-black pt-5"
          rightIcon={<GoArrowRight />}
          iconId="ui-icon"
        />
      </div>
    </div>
  );
};

export default Services;
