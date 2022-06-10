import axios from "axios";
import React, { useState } from "react";

const useData = () => {
  const [projects, setProjects] = useState([]);
  axios("https://json.extendsclass.com/bin/180d96892874").then((data) =>
    setProjects(data.data)
  );
  return [projects, setProjects];
};

export default useData;
