import { useEffect, useState } from 'react';

const page = () => {
  const [capsule, setCapsule] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/missions")
      .then(response => response.json())
      .then(data => setCapsule(data))
  }, []);

  return (
    <div>
      <h1 className="title">Missions</h1>
      <div className="content">
        {capsule.map(element => (
          <div key={element.mission_id} className="contentGrid">
            <h1>{element.mission_name}</h1>
            <h3>{element.description}</h3>
            <h2>Link:</h2>
            <h3>Wikipedia: {element.wikipedia}</h3>
            <h3>Website: {element.website}</h3>
            <h3>Twitter: {element.twitter}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;