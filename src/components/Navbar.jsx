import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useWindowScroll } from "react-use";

const navItems = ["", "About", "Services", "Portfolio", "Blog", "Contact"];  
const Navbar = () => {
  const [lastY, setLastY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll(); 

  const navContainerRef = useRef(null); 

 
  useEffect(() => {
    if (currentScrollY === 0) {
     
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastY) {
     
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastY) {
     
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastY(currentScrollY);
  }, [currentScrollY, lastY]);  

  
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]); 

  return (
    <div
      ref={navContainerRef}
      className="fixed hidden md:block h-16 inset-x-0 top-4 z-50 border-none transition-all duration-700 sm:inset-x-6 "
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2 px-4">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <a href="/"><img src="" alt="logo" className="w-10" /></a>
            
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
