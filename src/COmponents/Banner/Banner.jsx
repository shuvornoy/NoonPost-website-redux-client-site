import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="relative ">
        <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/75  sm:to-black/50 "></div>
        <img
          className=" bg-cover bg-center bg-no-repeat w-full md:h-[500px] h-96"
          src="http://www.andaluciaesdigital.es/educarparaproteger/adolescentes/images/galeria/perfiles-tic/contenidos-blogs-fbk.jpg"
          alt=""
        />
        <div className="text-gray-300 font-sans text-center absolute top-[33%] left-[35%]">
          <h4 className="md:text-7xl text-4xl">Welcome to</h4>
          <p className="md:text-5xl text-3xl font-extrabold"> Blog Zone</p>
        </div>
      </section>
    </div>
  );
};

export default Banner;
