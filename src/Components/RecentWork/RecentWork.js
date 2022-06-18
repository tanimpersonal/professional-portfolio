import React, { useState } from "react";
import influencer from "../../Assets/Images/portfolio/influencer.png";
import idea from "../../Assets/Images/portfolio/idea.png";
import panda from "../../Assets/Images/portfolio/panda.png";
import penguin from "../../Assets/Images/portfolio/fashion.png";
import useData from "../../Utility/useData";
import { useNavigate } from "react-router-dom";
import SingleProject from "../SingleProject/SingleProject";
const RecentWork = () => {
  const [projects, setProjects] = useData();
  const [modal, setModal] = useState({
    id: false,
  });
  console.log(projects);
  const navigate = useNavigate();
  const handleClick = (id) => {
    setModal({ id: id });
  };
  return (
    <div id="projects">
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      {modal && <SingleProject id={modal?.id} />}
      <div
        data-aos="fade-down-right"
        data-aos-duration="1500"
        className="carousel w-full"
      >
        <div id="slide1" className="carousel-item relative w-full">
          <div className="project flex flex-wrap lg:flex-nowrap gap-2">
            <div className="first px-5 py-5 shadow-lg my-3 mx-3 rounded-xl">
              <img src={projects[0]?.image} alt="" />
              <div className="text-and-button text-center">
                <p className="text-2xl mt-2 mb-2">
                  {projects[0]?.project_name}
                </p>
                <p className="grid grid-cols-1 lg:block">
                  Technology Profile:
                  {projects[0]?.technology.map((tech) => (
                    <button className="btn btn-outline mr-2 text-white">
                      {tech}
                    </button>
                  ))}
                </p>
                <label
                  onClick={() => handleClick(projects[0]?.id)}
                  htmlFor="my-modal-3"
                  className="btn modal-button"
                >
                  View Details
                </label>
              </div>
            </div>
            <div className="second px-5 py-5 shadow-lg my-3 mx-3 rounded-xl">
              <img src={projects[1]?.image} alt="" />
              <div className="text-and-button text-center">
                <p className="text-2xl mt-2 mb-2">
                  {projects[1]?.project_name}
                </p>
                <p className="grid grid-cols-1 lg:block">
                  Technology Profile:
                  {projects[1]?.technology.map((tech) => (
                    <button className="btn btn-outline mr-2 text-white">
                      {tech}
                    </button>
                  ))}
                </p>
                <label
                  onClick={() => handleClick(projects[1]?.id)}
                  htmlFor="my-modal-3"
                  className="btn modal-button"
                >
                  View Details
                </label>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="project flex flex-wrap lg:flex-nowrap gap-2">
            <div className="first px-5 py-5 shadow-lg my-3 mx-3 rounded-xl">
              <img src={projects[2]?.image} alt="" />
              <div className="text-and-button text-center">
                <p className="text-2xl mt-2 mb-2">
                  {projects[2]?.project_name}
                </p>
                <p className="grid grid-cols-1 lg:block">
                  Technology Profile:
                  {projects[2]?.technology.map((tech) => (
                    <button className="btn btn-outline mr-2 text-white">
                      {tech}
                    </button>
                  ))}
                </p>
                <label
                  onClick={() => handleClick(projects[2]?.id)}
                  htmlFor="my-modal-3"
                  className="btn modal-button"
                >
                  View Details
                </label>
              </div>
            </div>
            <div className="second px-5 py-5 shadow-lg my-3 mx-3 rounded-xl">
              <img src={projects[3]?.image} alt="" />
              <div className="text-and-button text-center">
                <p className="text-2xl mt-2 mb-2">
                  {projects[3]?.project_name}
                </p>
                <p className="grid grid-cols-1 lg:block">
                  Technology Profile:
                  {projects[3]?.technology.map((tech) => (
                    <button className="btn btn-outline mr-2 text-white">
                      {tech}
                    </button>
                  ))}
                </p>
                <label
                  onClick={() => handleClick(projects[3]?.id)}
                  htmlFor="my-modal-3"
                  className="btn modal-button"
                >
                  View Details
                </label>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="project flex flex-wrap lg:flex-nowrap gap-2">
            <div className="first px-5 py-5 shadow-lg my-3 mx-3 rounded-xl">
              <img src={projects[4]?.image} alt="" />
              <div className="text-and-button text-center">
                <p className="text-2xl mt-2 mb-2">
                  {projects[4]?.project_name}
                </p>
                <p className="grid grid-cols-1 lg:block">
                  Technology Profile:
                  {projects[4]?.technology.map((tech) => (
                    <button className="btn btn-outline mr-2 text-white">
                      {tech}
                    </button>
                  ))}
                </p>
                <label
                  onClick={() => handleClick(projects[4]?.id)}
                  htmlFor="my-modal-3"
                  className="btn modal-button"
                >
                  View Details
                </label>
              </div>
            </div>
            <div className="second px-5 py-5 shadow-lg my-3 mx-3 rounded-xl">
              <img src={projects[5]?.image} alt="" />
              <div className="text-and-button text-center">
                <p className="text-2xl mt-2 mb-2">
                  {projects[5]?.project_name}
                </p>
                <p className="grid grid-cols-1 lg:block">
                  Technology Profile:
                  {projects[5]?.technology.map((tech) => (
                    <button className="btn btn-outline mr-2 text-white">
                      {tech}
                    </button>
                  ))}
                </p>
                <label
                  onClick={() => handleClick(projects[5]?.id)}
                  htmlFor="my-modal-3"
                  className="btn modal-button"
                >
                  View Details
                </label>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
