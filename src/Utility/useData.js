import axios from "axios";
import React, { useEffect, useState } from "react";

const useData = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios("https://json.extendsclass.com/bin/180d96892874").then((data) =>
      setProjects(data.data)
    );
  }, []);
  return [projects, setProjects];
};

export default useData;
