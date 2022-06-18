import React from "react";

const Advantage = () => {
  return (
    <div className="h-96 lg:w-80 w-screen rounded-2xl bg-black">
      <div className="eight-years text-center ">
        <h1 className="text-white lg:mt-10 text-8xl">02</h1>
        <p className="text-white">Years of Experience</p>
      </div>
      <div className="client-satisfaction lg:ml-52 lg:w-56 w-56 h-20 ml-40 mt-28 lg:h-20 bg-slate-600 flex items-center gap-5 rounded-3xl px-4 lg:mt-28">
        <h3 className="text-4xl font-bold ">
          100<sup className="text-2xl">%</sup>
        </h3>
        <p>Clients Satisfaction</p>
      </div>
    </div>
  );
};

export default Advantage;
