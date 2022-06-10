import React from "react";
import TypeAnimation from "react-type-animation";
import tanim from "../../Assets/Images/Blue Yellow Simple Professional  Instagram Profile Picture.png";
import TiltSkill from "../TiltSkill/TiltSkill";
import Tilt from "react-parallax-tilt";
import Advantage from "../Advantage/Advantage";
import Skill from "../Skills/Skill";
import ServiceTab from "../ServiceTab/ServiceTab";
import RecentWork from "../RecentWork/RecentWork";
import climbing from "../../Assets/Images/Logos/climbing.png";
import Contact from "../Contact/Contact";
import useData from "../../Utility/useData";

const Home = () => {
  return (
    <section className="lg:px-16">
      <div
        style={{
          backgroundImage: `url(${require("../../Assets/Images/line-2.png")})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          marginTop: "-70px",
        }}
        className="h-screen w-full lg:w-auto"
      >
        <div className="text-and-image grid lg:grid-cols-2 lg:gap-96 gap-20 items-center pt-40 px-16 lg:px-0 lg:pt-40">
          <div className="text">
            <h1 className="text-7xl font-bold">Hello,</h1>
            <h1 className="lg:text-7xl text-5xl font-bold">I'm Tanim.</h1>
            <div className="lg:w-full w-full mt-5 lg:mt-0">
              <TypeAnimation
                cursor={true}
                sequence={[
                  "Web Developer",
                  2000,
                  "Web Designer",
                  2000,
                  "WP Developer",
                  2000,
                ]}
                wrapper="h2"
                className="text-3xl"
                repeat={Infinity}
              />
            </div>
          </div>
          <div className="image lg:w-96 relative ">
            <img
              className="lg:w-100 mr-12 ml-[-5px] lg:mr-0 lg:ml-[0px]
          "
              src={tanim}
              alt=""
            />
            <div className="tilt absolute bottom-5 left-5 lg:left-2">
              <Tilt reset={true}>
                <TiltSkill></TiltSkill>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
      <div className="advantage-skill py-20 items-center grid lg:grid-cols-2 grid-cols-1 justify-between">
        <Advantage></Advantage>
        <Skill></Skill>
      </div>
      <ServiceTab></ServiceTab>
      <div className="recent-work my-5">
        <div className="text flex flex-wrap justify-between items-center my-5">
          <div className="left">
            <h1 className="text-7xl">Recent Work</h1>
            <p className="text-lg w-80 mt-5">
              My recent works offer you to look how good I'm and what can you
              expect from me. Please take a look!
            </p>
          </div>
          <div className="tracking h-52 w-52 lg:ml-0 ml-20 lg:mt-0 mt-5  relative bg-slate-700 rounded-full">
            <div className="inner h-40 w-40  absolute top-0 bottom-0 right-0 left-0 m-auto rounded-full bg-slate-300">
              <img
                className="w-40 p-8 absolute top-0 bottom-0 right-0 left-0 m-auto"
                src={climbing}
                alt=""
              />
            </div>
          </div>
        </div>
        <RecentWork></RecentWork>
        <Contact></Contact>
      </div>
    </section>
  );
};

export default Home;
