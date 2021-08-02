import { useEffect, useState } from 'react';

const page = () => {
  const [capsule, setCapsule] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then(response => response.json())
      .then(data => setCapsule(data))
  }, []);

  return (
    <div>
      <h1 className="title">Launches</h1>
      <div className="content">
        {capsule.map(element => (
          <div key={element.mission_name} className="contentGrid">
            <h1>{element.mission_name}</h1>
            <h3>Details: {element.details}</h3>
            <h3>Date: {element.launch_date_utc}</h3>
            <h2>Rocket:</h2>
            <h3>Name: {element.rocket.rocket_name}</h3>
            <h3>Type: {element.rocket.rocket_type}</h3>
            <h3>Details: {element.details}</h3>
            <h2>Links:</h2>
            <h3>Article: {element.links.article_link}</h3>
            <h3>Wikipedia: {element.links.wikipedia}</h3>
            <h3>Youtube: {element.links.video_link}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;