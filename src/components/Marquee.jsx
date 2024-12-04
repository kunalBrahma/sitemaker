import React, { useEffect } from "react";
import gsap from "gsap";

const Marquee = () => {
  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0) {
       
        gsap.to(".marquee", {
          x: "-200%", 
          duration: 10,
          repeat: -1,
          ease: "none",
        });
      
      } else {
        
        gsap.to(".marquee", {
          x: "0%", 
          duration: 10,
          repeat: -1,
          ease: "sine.inOut",
        });
        
      }
    };

    // Add the wheel event listener
    window.addEventListener("wheel", handleWheel);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div id="move" className="flex bg-violet-400 overflow-hidden px-5">
      <div className="marquee">
      <h1 className="special-font text-[6rem] hero-heading uppercase text-blue-50 py-8">Designing Dreams, Building Digital Realities</h1>
      </div>
      <div className="marquee">
      <h1 className="special-font text-[6rem] hero-heading uppercase text-blue-50 py-8">Designing Dreams, Building Digital Realities</h1>
      </div>
      <div className="marquee">
      <h1 className="special-font text-[6rem] hero-heading uppercase text-blue-50 py-8">Designing Dreams, Building Digital Realities</h1>
      </div>
      <div className="marquee">
      <h1 className="special-font text-[6rem] hero-heading uppercase text-blue-50 py-8">Designing Dreams, Building Digital Realities</h1>
      </div>
      <div className="marquee">
      <h1 className="special-font text-[6rem] hero-heading uppercase text-blue-50 py-8">Designing Dreams, Building Digital Realities</h1>
      </div>
    </div>
  );
};

export default Marquee;
