import { useEffect, useState } from "react";

const page = () => {
  const [capsule, setCapsule] = useState({});

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/roadster")
      .then((response) => response.json())
      .then((data) => setCapsule(data));
  }, []);

  return (
    <div>
      <h1 className="infoTitle">{capsule.name}</h1>
      <div className="infoContent">
        <h3>Date: {capsule.launch_date_utc}</h3>
        {/* <h3>Images: {capsule.flickr_images}</h3> */}
        <h3>Wikipedia: {capsule.wikipedia}</h3>
        <h3>Youtube: {capsule.video}</h3>
        <h3>Details: {capsule.details}</h3>
      </div>
    </div>
  );
};

export default page;
