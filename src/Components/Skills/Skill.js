import React from "react";
import "./Skill.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const Skill = () => {
  return (
    <div className="lg:ml-2 ml-5">
      <h1>My Skills</h1>
      <p>
        Refining my ability everyday. Polishing myself in every possible way
      </p>
      <div className="skill-card my-5 grid lg:grid-cols-3 grid-cols-2 gap-2">
        <div className="skill-grid h-20 mb-20 rounded-xl rounded-b w-[150px]">
          <div className="skill-inner rounded-xl bg-black text-white mt-[3px] w-36 py-10 text-center ml-[3px] mr-[3px] mb-[0px]">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <span className="h-6">
                  {isVisible ? (
                    <CountUp
                      duration={0.5}
                      useEasing={false}
                      start={90}
                      end={98}
                    />
                  ) : null}
                  %
                </span>
              )}
            </VisibilitySensor>
            <p>React</p>
          </div>
        </div>
        <div className="skill-grid h-20 mb-20 rounded-xl rounded-b w-[150px]">
          <div className="skill-inner rounded-xl bg-black text-white mt-[3px] w-36 py-10 text-center ml-[3px] mr-[3px] mb-[0px]">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <span className="h-6">
                  {isVisible ? (
                    <CountUp
                      duration={0.5}
                      useEasing={false}
                      start={90}
                      end={99}
                    />
                  ) : null}
                  %
                </span>
              )}
            </VisibilitySensor>
            <p>Javascript</p>
          </div>
        </div>
        <div className="skill-grid h-20 mb-20 rounded-xl rounded-b w-[150px]">
          <div className="skill-inner rounded-xl bg-black text-white mt-[3px] w-36 py-10 text-center ml-[3px] mr-[3px] mb-[0px]">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <span className="h-6">
                  {isVisible ? (
                    <CountUp
                      duration={0.5}
                      useEasing={false}
                      start={80}
                      end={90}
                    />
                  ) : null}
                  %
                </span>
              )}
            </VisibilitySensor>
            <p>MongoDB</p>
          </div>
        </div>
        <div className="skill-grid h-20 mb-20 rounded-xl rounded-b w-[150px]">
          <div className="skill-inner rounded-xl bg-black text-white mt-[3px] w-36 py-10 text-center ml-[3px] mr-[3px] mb-[0px]">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <span className="h-6">
                  {isVisible ? (
                    <CountUp
                      duration={0.5}
                      useEasing={false}
                      start={90}
                      end={100}
                    />
                  ) : null}
                  %
                </span>
              )}
            </VisibilitySensor>
            <p>HTML</p>
          </div>
        </div>
        <div className="skill-grid h-20 mb-20 rounded-xl rounded-b w-[150px]">
          <div className="skill-inner rounded-xl bg-black text-white mt-[3px] w-36 py-10 text-center ml-[3px] mr-[3px] mb-[0px]">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <span className="h-6">
                  {isVisible ? (
                    <CountUp
                      duration={0.5}
                      useEasing={false}
                      start={90}
                      end={100}
                    />
                  ) : null}
                  %
                </span>
              )}
            </VisibilitySensor>
            <p>CSS</p>
          </div>
        </div>
        <div className="skill-grid h-20 mb-20 rounded-xl rounded-b w-[150px]">
          <div className="skill-inner rounded-xl bg-black text-white mt-[3px] w-36 py-10 text-center ml-[3px] mr-[3px] mb-[0px]">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <span className="h-6">
                  {isVisible ? (
                    <CountUp
                      duration={0.5}
                      useEasing={false}
                      start={90}
                      end={100}
                    />
                  ) : null}
                  %
                </span>
              )}
            </VisibilitySensor>
            <p>Firebase</p>
          </div>
        </div>
        <div className="skill-grid h-20 mb-20 rounded-xl rounded-b w-[150px]">
          <div className="skill-inner rounded-xl bg-black text-white mt-[3px] w-36 py-10 text-center ml-[3px] mr-[3px] mb-[0px]">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <span className="h-6">
                  {isVisible ? (
                    <CountUp
                      duration={0.5}
                      useEasing={false}
                      start={80}
                      end={85}
                    />
                  ) : null}
                  %
                </span>
              )}
            </VisibilitySensor>
            <p>Node</p>
          </div>
        </div>
        <div className="skill-grid h-20 mb-20 rounded-xl rounded-b w-[150px]">
          <div className="skill-inner rounded-xl bg-black text-white mt-[3px] w-36 py-10 text-center ml-[3px] mr-[3px] mb-[0px]">
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <span className="h-6">
                  {isVisible ? (
                    <CountUp
                      duration={0.5}
                      useEasing={false}
                      start={75}
                      end={80}
                    />
                  ) : null}
                  %
                </span>
              )}
            </VisibilitySensor>
            <p>Express</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
