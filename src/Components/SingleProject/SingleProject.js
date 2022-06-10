import React from "react";
import useData from "../../Utility/useData";

const SingleProject = ({ id }) => {
  const [projects, setProjects] = useData();
  const project = projects.find((project) => project.id === id);
  return (
    <div class="modal">
      <div class="modal-box bg-black relative">
        <label
          for="my-modal-3"
          class="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>
        <h3 class="text-lg font-bold mb-10">{project?.project_name}</h3>

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
