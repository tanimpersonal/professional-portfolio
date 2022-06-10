import React from "react";
import AnimatedCursor from "react-animated-cursor";

const Contact = () => {
  return (
    <div>
      <AnimatedCursor></AnimatedCursor>
      <div className="text flex lg:flex-nowrap lg:gap-0 gap-4 flex-wrap justify-center lg:justify-between items-center text-white bg-black px-10 my-5 py-52">
        <div className="left">
          <h1 className="text-7xl mb-5">Contact me!</h1>
          <h1>Send me a message and make something together.</h1>
        </div>
        <div className="button">
          <label htmlFor="my-modal-4" className="btn modal-button">
            CONTACT ME!
          </label>
        </div>
      </div>
    </div>
  );
};

export default Contact;
