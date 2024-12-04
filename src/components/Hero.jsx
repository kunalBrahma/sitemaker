import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 4;
  const upcommingVideos = (currentIndex % totalVideos) + 1;
  const nextVideoRef = useRef(null);
  const handleMiniVidClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcommingVideos);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);
  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath:
        "polygon(0 0, 75% 1%, 100% 100%, 21% 100%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath:
        "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        duration: 400,
        delay: 9,
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  const handleVideoLoaded = () => {
    setLoadedVideos((prev) => prev + 1);
  };
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center overflow-hidden absolute z-[100] h-dvh w-screen bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="realative h-dvh w-screen overflow-hidden z-10 rounded-lg bg-blue-75"
      >
        <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer rounded-lg overflow-hidden">
          <div
            onClick={handleMiniVidClick}
            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
          >
            <video
              ref={nextVideoRef}
              src={getVideoSrc(upcommingVideos)}
              loop
              muted
              id="current-video"
              className="size-64 origin-center object-cover object-center scale-150"
              onLoadedData={handleVideoLoaded}
            />
          </div>
        </div>
        <video
          ref={nextVideoRef}
          src={getVideoSrc(currentIndex)}
          loop
          muted
          id="next-video"
          className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          onLoadedData={handleVideoLoaded}
        />
        <video
          src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
          autoPlay
          loop
          muted
          className="absolute left-0 right-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoaded}
        />
       <div className="flex flex-col justify-between px-5 mt-28 sm:px-10 flex-wrap absolute z-50">
            <div className="">
                <h1 className="special-font hero-heading text-blue-50">
                Transf<b>or</b>m Your <b>O</b>nline <br /> Pr<b>e</b>sence with <br /> Site<b>M</b>aker
                </h1>
            </div>
            <div className="w-full pr-10 pt-3 sm:pt-0 sm:w-1/2 md:w-1/2  ">

            <p className="font-robert-regular text-blue-75 pt-3 sm:w-[650px] text-sm sm:text-xl">At SiteMaker, we specialize in creating visually stunning websites that enhance your brand's identity. Our expert team is dedicated to delivering user-friendly designs that drive engagement and conversions.</p>
            <div className="flex gap-2">
            <Button 
            title='Learn More'
            id='learnMore'
            classContainer='!bg-violet-500 text-blue-50 flex-center gap-1 duration-400 hover:bg-violet-500 rounded-xl mt-3'
            leftIcon={<TiLocationArrow />}
            />
             
            </div>
          
            </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-blue-50">
        Site<b>M</b>aker.c<b>o</b>.in
      </h1>
    </div>
  );
};

export default Hero;
