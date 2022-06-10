import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";
import {
  faBezierCurve,
  faCode,
  faDatabase,
  faPenNib,
  faPlug,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import photoshop from "../../Assets/Images/Logos/photoshop.png";
import illustrator from "../../Assets/Images/Logos/illustrator.png";
import figma from "../../Assets/Images/Logos/figma.png";
const ServiceTab = () => {
  const [development, setDevelopment] = useState(true);
  const [design, setDesign] = useState(false);
  const [wordpress, setWordpress] = useState(false);
  const handleDevelopment = () => {
    setDesign(false);
    setWordpress(false);
    setDevelopment(true);
  };
  const handleDesign = () => {
    setDesign(true);
    setWordpress(false);
    setDevelopment(false);
  };
  const handleWordpress = () => {
    setDesign(false);
    setWordpress(true);
    setDevelopment(false);
  };
  return (
    <div>
      <Tabs>
        <TabList className="mb-5 lg:grid-cols-3 grid-cols-2  text-center">
          <Tab
            onClick={handleDevelopment}
            className={`text-2xl mr-5 lg:mb-0 mb-5 btn ${
              development && "btn btn-outline"
            }`}
          >
            Development
          </Tab>
          <Tab
            onClick={handleWordpress}
            className={`btn text-2xl mr-5 ${wordpress && "btn-outline"}`}
          >
            Wordpress
          </Tab>
          <Tab
            onClick={handleDesign}
            className={`btn text-2xl mr-5 ${design && "btn-outline"}`}
          >
            Design
          </Tab>
        </TabList>

        <TabPanel>
          <div className="inner grid lg:grid-cols-3 grid-cols-1 gap-2 text-center">
            <div className="frontend rounded-xl bg-black text-white py-20 px-5">
              <div className="icon  rounded-full bg-slate-600 p-16 inline-block relative transition-all duration-1000 hover:bg-slate-700">
                <FontAwesomeIcon
                  className="text-7xl left-0 right-0 top-0 bottom-0 m-auto absolute "
                  icon={faBezierCurve}
                ></FontAwesomeIcon>
              </div>
              <h1 className="text-3xl my-4">Frontend</h1>
              <p>
                I'm specialized in frontend technology. My expertise covers
                HTML, CSS, Javascript, React Library
              </p>
            </div>
            <div className="frameworks rounded-xl bg-black text-white py-20 px-5">
              <div className="icon  rounded-full bg-slate-600 p-16 inline-block relative transition-all duration-1000 hover:bg-slate-700">
                <FontAwesomeIcon
                  className="text-7xl left-0 right-0 top-0 bottom-0 m-auto absolute "
                  icon={faCode}
                ></FontAwesomeIcon>
              </div>
              <h1 className="text-3xl my-4">Frameworks</h1>
              <p>
                I'm comfortable with frameworks including Bootstrap, Tailwind,
                Flowbite, Tailwind Elements, React Bootstrap, Daisy UI and many
                more are familiar to me.
              </p>
            </div>
            <div className="backend rounded-xl bg-black text-white py-20 px-5">
              <div className="icon  rounded-full bg-slate-600 p-16 inline-block relative transition-all duration-1000 hover:bg-slate-700">
                <FontAwesomeIcon
                  className="text-7xl left-0 right-0 top-0 bottom-0 m-auto absolute "
                  icon={faDatabase}
                ></FontAwesomeIcon>
              </div>
              <h1 className="text-3xl my-4">Database</h1>
              <p>
                I'm expertise in backend runtime Node js and Express Js. I am
                also comfortable with MongoDB and JSON
              </p>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="inner grid lg:grid-cols-3 grid-cols-1 gap-2 text-center">
            <div className="frontend rounded-xl bg-black text-white py-20 px-5">
              <div className="icon  rounded-full bg-slate-600 p-16 inline-block relative transition-all duration-1000 hover:bg-slate-700">
                <FontAwesomeIcon
                  className="text-7xl left-0 right-0 top-0 bottom-0 m-auto absolute "
                  icon={faPenNib}
                ></FontAwesomeIcon>
              </div>
              <h1 className="text-3xl my-4">Theme</h1>
              <p>
                I am both expertise in free and premium themes. I can ready your
                themes according to your need. I can also customize it.
              </p>
            </div>
            <div className="frameworks rounded-xl bg-black text-white py-20 px-5">
              <div className="icon  rounded-full bg-slate-600 p-16 inline-block relative transition-all duration-1000 hover:bg-slate-700">
                <FontAwesomeIcon
                  className="text-7xl left-0 right-0 top-0 bottom-0 m-auto absolute "
                  icon={faPlug}
                ></FontAwesomeIcon>
              </div>
              <h1 className="text-3xl my-4">Plugin</h1>
              <p>
                I'm familiar with most of the popular plugins of Wordpress. Even
                my services are compatible with the 5000+ plugins repository.
              </p>
            </div>
            <div className="backend rounded-xl bg-black text-white py-20 px-5">
              <div className="icon  rounded-full bg-slate-600 p-16 inline-block relative transition-all duration-1000 hover:bg-slate-700">
                <FontAwesomeIcon
                  className="text-7xl left-0 right-0 top-0 bottom-0 m-auto absolute "
                  icon={faGear}
                ></FontAwesomeIcon>
              </div>
              <h1 className="text-3xl my-4">Custom Design</h1>
              <p>
                According to clients need I can write custom CSS for you. Your
                site will be unique and will look way better than most of the
                regular websites available on the market.
              </p>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="inner grid lg:grid-cols-3 grid-cols-1 gap-2 text-center">
            <div className="frontend rounded-xl bg-black text-white py-20 px-5">
              <div className="icon  rounded-full bg-slate-600 p-16 inline-block relative transition-all duration-1000 hover:bg-slate-700">
                <img
                  className="text-7xl left-0 right-0 top-0 bottom-0 m-auto absolute "
                  src={photoshop}
                  alt=""
                />
              </div>
              <h1 className="text-3xl my-4">Photoshop</h1>
              <p>
                I'm familiar with basic editing and manipulation on Photoshop. I
                can create website ready contents keeping the standard.
              </p>
            </div>
            <div className="frameworks rounded-xl bg-black text-white py-20 px-5">
              <div className="icon  rounded-full bg-slate-600 p-16 inline-block relative transition-all duration-1000 hover:bg-slate-700">
                <img
                  className="text-7xl left-0 right-0 top-0 bottom-0 m-auto absolute "
                  src={illustrator}
                  alt=""
                />
              </div>
              <h1 className="text-3xl my-4">Illustrator</h1>
              <p>
                Illustrator is one of my comfort zone to work with. I can do
                eye-catchy illustrations and make the ready for web publishing.
              </p>
            </div>
            <div className="backend rounded-xl bg-black text-white py-20 px-5">
              <div className="icon  rounded-full bg-slate-600 p-16 inline-block relative transition-all duration-1000 hover:bg-slate-700">
                <img
                  className="text-7xl left-0 right-0 top-0 bottom-0 m-auto absolute "
                  src={figma}
                  alt=""
                />
              </div>
              <h1 className="text-3xl my-4">Figma</h1>
              <p>
                I'm expertise to grab the design, the exact calculation from the
                UI file on figma. I can also implement the exact thing on
                Website
              </p>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ServiceTab;
