import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null); 

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event; // Mouse coordinates
      gsap.to(cursorRef.current, {
        x: x,
        y: y,
        duration: 0.5,
        ease: "back.out(3)", // Smooth easing
      });
    };

    // Attach the mousemove event listener to the whole document
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
    className="hidden md:block"
      ref={cursorRef}
      id="cursor"
    ></div>
  );
};

export default Cursor;
