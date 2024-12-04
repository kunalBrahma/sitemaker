import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        duration:10,
      },
     
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: "0",
      duration:10,
    });
    clipAnimation.from(".about",{
      y:300,
      opacity:0,
      duration:10,
      delay:2
    })
    clipAnimation.from("#about-us",{
      opacity:0,
      duration:10
    })
  });

  return (
    <div className="min-h-screen w-screen" id="about">
      {/* About Section Header */}
      <div className="relative mb-8 mt-10 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[30px]">About Us</h2>
        <AnimatedTitle
          title="Crafting Digital Experiences That <br> Inspire and Innovate"
          containerClass="mt-5 !text-black text-center"
        />
      </div>

      {/* Background and Content Section */}
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image relative overflow-hidden bg-blue-300">
          {/* Background Image */}
          <img
            src=""
            alt="Background"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Text Content */}
          <div className="absolute w-full sm:w-1/2 inset-0 z-10 flex flex-col justify-center text-start px-10">
            <p className="text-blue-75 leading-relaxed font-robert-medium text-sm sm:text-xl about">
            <span className="special-font hero-heading text-blue-50 " >Welcome to Site Maker</span> one of the most trusted best web design in India. We provide
              various digital services, two of our main services are Web Designing and Digital
              Marketing to help your business grow digitally. We specialise in designing stunning
              and responsive WordPress websites. We provide affordable services to our customers,
              keeping everything transparent. We aim to help you strengthen your businesses. We
              offer a wide range of services, including Web design and development, SEO service,
              Social media marketing services, PPC, logo design, and many more.
            </p>
            <p className="text-blue-75 leading-relaxed pt-3 font-robert-medium text-sm sm:text-xl about">
              Site Maker is a local website designing company in India with all its operations
              carried out within India. Our team has both web designer specialists and social media
              marketer specialists. Being the best web design in India, we are always
              customer-centric and execute ourselves with integrity. Site Maker, the best web
              design in India, follows a transparent business model and takes its responsibilities
              very seriously and dedicatedly, satisfying customers with exceptional deliveries.
            </p>
            <Button
            title='Learn More'
            id='about-us'
            classContainer='!text-blue-100 !bg-violet-500 rounded-xl mt-4 flex gap-1'
            rightIcon={<TiLocationArrow />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
