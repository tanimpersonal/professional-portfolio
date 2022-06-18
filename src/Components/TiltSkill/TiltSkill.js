import React from "react";
import nodeImage from "../../Assets/Images/Logos/nodejs.png";
import express from "../../Assets/Images/Logos/express.png";
import firebase from "../../Assets/Images/Logos/firebase.png";
import reactImage from "../../Assets/Images/Logos/react.webp";
import mongo from "../../Assets/Images/Logos/mongo.png";
import html from "../../Assets/Images/Logos/html.png";
import css from "../../Assets/Images/Logos/1452px-CSS3_logo_and_wordmark.svg.png";
import js from "../../Assets/Images/Logos/js.png";
const TiltSkill = () => {
  return (
    <div className=" w-72 lg:w-96">
      <div className="logos bg-transparent grid grid-cols-2 gap-10 lg:grid-cols-3 items-center">
        <div className="node w-14">
          <img src={nodeImage} alt="" />
        </div>
        <div className="react w-14">
          <img src={reactImage} alt="" />
        </div>
        <div className="express w-14">
          <img src={express} alt="" />
        </div>
        <div className="mongo-firebase lg:flex hidden lg:col-span-3 justify-between items-center">
          <div className="mongo w-10">
            <img src={mongo} alt="" />
          </div>
          <div className="firebase w-12">
            <img src={firebase} alt="" />
          </div>
        </div>
        <div className="html w-14">
          <img src={html} alt="" />
        </div>
        <div className="css w-10">
          <img src={css} alt="" />
        </div>
        <div className="js w-[90px]">
          <img src={js} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TiltSkill;
