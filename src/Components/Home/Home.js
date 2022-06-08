import React from "react";
import TypeAnimation from "react-type-animation";
const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${require("../../Assets/Images/line-2.png")})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        marginTop: "-70px",
      }}
      className="h-screen w-screen "
    >
      <div className="text-and-image pt-60 px-16">
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
        <div className="image">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
