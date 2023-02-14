import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="relative ">
        <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/75  sm:to-black/50 "></div>
        <img
          className=" bg-cover bg-center bg-no-repeat w-full md:h-[500px] h-96"
          src="https://demo-noonpost.assiagroupe.net/html/assets/img/blog/1.jpg"
          alt=""
        />
        <div className="text-gray-300 font-sans text-center absolute top-[33%] xl:left-[23%]
         lg:left-[18%] md:left-[8%] left-[2%]">
          <h4 className="md:text-6xl text-4xl">Welcome to my new site</h4>
          <p className="md:text-5xl text-3xl font-extrabold"> Noon Post</p>
        </div>
      </section>
    </div>
  );
};

export default Banner;
