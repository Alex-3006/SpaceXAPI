import { useEffect, useState } from 'react';

const page = () => {
  const [capsule, setCapsule] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launchpads")
      .then(response => response.json())
      .then(data => setCapsule(data))
  }, []);

  return (
    <div>
      <h1 className="title">Launching Pads</h1>
      <div className="content">
        {capsule.map(element => (
          <div key={element.id} className="contentGrid">
            <h1>{element.name}</h1>
            <h2>{element.site_name_long}</h2>
            <h3>Status: {element.status}</h3>
            <h3>Location: {element.location.name}, {element.location.region}</h3>
            <h2>Links:</h2>
            <h3>Wikipedia: {element.wikipedia}</h3>
            <h3>Details: {element.details}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;