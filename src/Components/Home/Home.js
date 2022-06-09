import React from "react";
import TypeAnimation from "react-type-animation";
import tanim from "../../Assets/Images/Blue Yellow Simple Professional  Instagram Profile Picture.png";
import TiltSkill from "../TiltSkill/TiltSkill";
import Tilt from "react-parallax-tilt";
import Advantage from "../Advantage/Advantage";
import Skill from "../Skills/Skill";
import ServiceTab from "../ServiceTab/ServiceTab";
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
            <div style={{ width: "20em" }}>
              <TypeAnimation
                cursor={true}
                sequence={[
                  "Web Developer",
                  2000,
                  "Web Designer",
                  2000,
                  "Wordpress Developer",
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
              className="lg:w-100 w-100 mr-12 ml-[-30px] lg:mr-0 lg:ml-[0px]
          "
              src={tanim}
              alt=""
            />
            <div className="tilt absolute bottom-10 left-5 lg:left-2">
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
    </section>
  );
};

export default Home;
