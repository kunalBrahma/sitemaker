import React from "react";

const Servicesection = ({ title, id, containerClass, rightIcon, iconId }) => {
  return (
    <div id="main2"  className={`${containerClass} w-full px-5 sm:px-0 md:w-1/2 flex justify-between items-center`}>

      <div className="flex justify-between realative items-center w-full h-min-scrren py-3"
        id={id}>
          <div id="overlay" className="w-full md:w-1/2"></div>
          <h3  id="id"  className={`pb-2 text-xl md:text-2xl font-circular-web !text-black uppercase`} >
          {title}
        </h3>
        <span className="text-4xl" id={iconId}>{rightIcon}</span>
      </div>
    </div>
  );
};

export default Servicesection;
