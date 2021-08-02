import { useEffect, useState } from "react";

const page = () => {
  const [capsule, setCapsule] = useState({});

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/info")
      .then((response) => response.json())
      .then((data) => setCapsule(data));
  }, []);

  return (
    <div>
      <h1>{capsule.name}</h1>
      <h3>{capsule.founder}</h3>
    </div>
  );
};

export default page;
