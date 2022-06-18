import React from "react";
import useData from "../../Utility/useData";

const SingleProject = ({ id }) => {
  const [projects, setProjects] = useData();
  const project = projects.find((project) => project.id === id);
  return (
    <div className="modal">
      <div className="modal-box bg-black relative">
        <label
          htmlFor="my-modal-3"
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>
        <h3 className="text-lg font-bold mb-10">{project?.project_name}</h3>

        <div className="links">
          <a
            className="btn mr-4"
            href={project?.live_link}
            target="_blank"
            rel="noreferrer"
          >
            Live Link
          </a>
          <a
            className="btn"
            href={project?.github}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
