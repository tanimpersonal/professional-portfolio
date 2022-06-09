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
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const Home = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
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
          <Particles
            height="100px"
            id="tsparticles"
            init={particlesInit}
            options={{
              autoPlay: true,
              background: {
                color: {
                  value: "#000000",
                },
                image: "",
                position: "",
                repeat: "",
                size: "",
                opacity: 1,
              },
              backgroundMask: {
                composite: "destination-out",
                cover: {
                  color: {
                    value: "#fff",
                  },
                  opacity: 1,
                },
                enable: false,
              },
              fullScreen: {
                enable: true,
                zIndex: -1,
              },
              detectRetina: true,
              duration: 0,
              fpsLimit: 120,
              interactivity: {
                detectsOn: "window",
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onDiv: {
                    selectors: [],
                    enable: false,
                    mode: [],
                    type: "circle",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                    parallax: {
                      enable: false,
                      force: 2,
                      smooth: 10,
                    },
                  },
                  resize: true,
                },
                modes: {
                  attract: {
                    distance: 200,
                    duration: 0.4,
                    easing: "ease-out-quad",
                    factor: 1,
                    maxSpeed: 50,
                    speed: 1,
                  },
                  bounce: {
                    distance: 200,
                  },
                  bubble: {
                    distance: 200,
                    duration: 0.4,
                    mix: false,
                  },
                  connect: {
                    distance: 80,
                    links: {
                      opacity: 0.5,
                    },
                    radius: 60,
                  },
                  grab: {
                    distance: 100,
                    links: {
                      blink: false,
                      consent: false,
                      opacity: 1,
                    },
                  },
                  light: {
                    area: {
                      gradient: {
                        start: {
                          value: "#ffffff",
                        },
                        stop: {
                          value: "#000000",
                        },
                      },
                      radius: 1000,
                    },
                    shadow: {
                      color: {
                        value: "#000000",
                      },
                      length: 2000,
                    },
                  },
                  push: {
                    default: true,
                    groups: [],
                    quantity: 4,
                  },
                  remove: {
                    quantity: 2,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: "ease-out-quad",
                    divs: {
                      distance: 200,
                      duration: 0.4,
                      factor: 100,
                      speed: 1,
                      maxSpeed: 50,
                      easing: "ease-out-quad",
                      selectors: [],
                    },
                  },
                  slow: {
                    factor: 3,
                    radius: 200,
                  },
                  trail: {
                    delay: 1,
                    pauseOnStop: false,
                    quantity: 1,
                  },
                },
              },
              manualParticles: [],
              motion: {
                disable: false,
                reduce: {
                  factor: 4,
                  value: true,
                },
              },
              particles: {
                bounce: {
                  horizontal: {
                    random: {
                      enable: false,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                  vertical: {
                    random: {
                      enable: false,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                },
                collisions: {
                  bounce: {
                    horizontal: {
                      random: {
                        enable: false,
                        minimumValue: 0.1,
                      },
                      value: 1,
                    },
                    vertical: {
                      random: {
                        enable: false,
                        minimumValue: 0.1,
                      },
                      value: 1,
                    },
                  },
                  enable: false,
                  mode: "bounce",
                  overlap: {
                    enable: true,
                    retries: 0,
                  },
                },
                color: {
                  value: "#ff0000",
                  animation: {
                    h: {
                      count: 0,
                      enable: true,
                      offset: 0,
                      speed: 20,
                      sync: true,
                    },
                    s: {
                      count: 0,
                      enable: false,
                      offset: 0,
                      speed: 1,
                      sync: true,
                    },
                    l: {
                      count: 0,
                      enable: false,
                      offset: 0,
                      speed: 1,
                      sync: true,
                    },
                  },
                },
                destroy: {
                  mode: "none",
                  split: {
                    count: 1,
                    factor: {
                      random: {
                        enable: false,
                        minimumValue: 0,
                      },
                      value: 3,
                    },
                    rate: {
                      random: {
                        enable: false,
                        minimumValue: 0,
                      },
                      value: {
                        min: 4,
                        max: 9,
                      },
                    },
                    sizeOffset: true,
                  },
                },
                gradient: [],
                groups: {},
                life: {
                  count: 0,
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 0,
                    sync: false,
                  },
                  duration: {
                    random: {
                      enable: false,
                      minimumValue: 0.0001,
                    },
                    value: 0,
                    sync: false,
                  },
                },
                links: {
                  blink: false,
                  color: {
                    value: "#ffffff",
                  },
                  consent: false,
                  distance: 100,
                  enable: true,
                  frequency: 1,
                  opacity: 0.4,
                  shadow: {
                    blur: 5,
                    color: {
                      value: "#000",
                    },
                    enable: false,
                  },
                  triangles: {
                    enable: false,
                    frequency: 1,
                  },
                  width: 1,
                  warp: false,
                },
                move: {
                  angle: {
                    offset: 0,
                    value: 90,
                  },
                  attract: {
                    distance: 200,
                    enable: false,
                    rotate: {
                      x: 3000,
                      y: 3000,
                    },
                  },
                  center: {
                    x: 50,
                    y: 50,
                    radius: 0,
                  },
                  decay: 0,
                  distance: {},
                  direction: "none",
                  drift: 0,
                  enable: true,
                  gravity: {
                    acceleration: 9.81,
                    enable: false,
                    inverse: false,
                    maxSpeed: 50,
                  },
                  path: {
                    clamp: true,
                    delay: {
                      random: {
                        enable: false,
                        minimumValue: 0,
                      },
                      value: 0,
                    },
                    enable: false,
                    options: {},
                  },
                  outModes: {
                    default: "out",
                    bottom: "out",
                    left: "out",
                    right: "out",
                    top: "out",
                  },
                  random: false,
                  size: false,
                  speed: 6,
                  spin: {
                    acceleration: 0,
                    enable: false,
                  },
                  straight: false,
                  trail: {
                    enable: false,
                    length: 10,
                    fillColor: {
                      value: "#000000",
                    },
                  },
                  vibrate: false,
                  warp: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                    factor: 1000,
                  },
                  limit: 0,
                  value: 80,
                },
                opacity: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 0.5,
                  animation: {
                    count: 0,
                    enable: false,
                    speed: 2,
                    sync: false,
                    destroy: "none",
                    startValue: "random",
                  },
                },
                orbit: {
                  animation: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    sync: false,
                  },
                  enable: false,
                  opacity: 1,
                  rotation: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 45,
                  },
                  width: 1,
                },
                reduceDuplicates: false,
                repulse: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                  enabled: false,
                  distance: 1,
                  duration: 1,
                  factor: 1,
                  speed: 1,
                },
                roll: {
                  darken: {
                    enable: false,
                    value: 0,
                  },
                  enable: false,
                  enlighten: {
                    enable: false,
                    value: 0,
                  },
                  mode: "vertical",
                  speed: 25,
                },
                rotate: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                  animation: {
                    enable: false,
                    speed: 0,
                    sync: false,
                  },
                  direction: "clockwise",
                  path: false,
                },
                shadow: {
                  blur: 0,
                  color: {
                    value: "#000",
                  },
                  enable: false,
                  offset: {
                    x: 0,
                    y: 0,
                  },
                },
                shape: {
                  options: {},
                  type: "circle",
                },
                size: {
                  random: {
                    enable: false,
                    minimumValue: 1,
                  },
                  value: {
                    min: 0.1,
                    max: 3,
                  },
                  animation: {
                    count: 0,
                    enable: false,
                    speed: 5,
                    sync: false,
                    destroy: "none",
                    startValue: "random",
                  },
                },
                stroke: {
                  width: 0,
                },
                tilt: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                  animation: {
                    enable: false,
                    speed: 0,
                    sync: false,
                  },
                  direction: "clockwise",
                  enable: false,
                },
                twinkle: {
                  lines: {
                    enable: false,
                    frequency: 0.05,
                    opacity: 1,
                  },
                  particles: {
                    enable: false,
                    frequency: 0.05,
                    opacity: 1,
                  },
                },
                wobble: {
                  distance: 5,
                  enable: false,
                  speed: 50,
                },
                zIndex: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                  opacityRate: 1,
                  sizeRate: 1,
                  velocityRate: 1,
                },
              },
              pauseOnBlur: true,
              pauseOnOutsideViewport: true,
              responsive: [],
              style: {},
              themes: [],
              zLayers: 100,
            }}
          ></Particles>
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
