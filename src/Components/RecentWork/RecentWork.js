import React from "react";
import influencer from "../../Assets/Images/portfolio/influencer.png";
import idea from "../../Assets/Images/portfolio/idea.png";
import panda from "../../Assets/Images/portfolio/panda.png";
import penguin from "../../Assets/Images/portfolio/fashion.png";
const RecentWork = () => {
  return (
    <div>
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <div className="project flex flex-wrap lg:flex-nowrap gap-2">
            <div className="first px-5 py-5 shadow-lg my-3 mx-3 rounded-xl">
              <img src={influencer} alt="" />
              <div className="text-and-button text-center">
                <p className="">
                  It's based on influencer bucket. This is a basic template of a
                  website
                </p>
                <button className="btn mt-2 text-center">View Details</button>
              </div>
            </div>
            <div className="second px-5 py-5 shadow-lg my-3 mx-3 rounded-xl">
              <img src={panda} alt="" />
              <div className="text-and-button text-center mt-4">
                <p className="">It's a website containing e-commerce setup</p>
                <button className="btn mt-2 text-center">View Details</button>
              </div>
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <div className="project flex flex-wrap lg:flex-nowrap gap-2">
            <div className="first px-5 py-5 shadow-lg my-3 mx-3 rounded-xl">
              <img src={idea} alt="" />
              <div className="text-and-button text-center mt-3">
                <p className="">
                  It's based on course website bucket. This is a basic template
                  of a website
                </p>
                <button className="btn mt-2 text-center">View Details</button>
              </div>
            </div>
            <div className="second px-5 py-5 shadow-lg my-3 mx-3 rounded-xl">
              <img src={penguin} alt="" />
              <div className="text-and-button text-center">
                <p className="">It's a website containing e-commerce setup</p>
                <button className="btn mt-2 text-center">View Details</button>
              </div>
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
