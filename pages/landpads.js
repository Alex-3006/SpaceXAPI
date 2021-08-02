import { useEffect, useState } from 'react';

const page = () => {
  const [capsule, setCapsule] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/landpads")
      .then(response => response.json())
      .then(data => setCapsule(data))
  }, []);

  return (
    <div>
      <h1 className="title">Landing Pads</h1>
      <div className="content">
      {capsule.map(element => (
        <div key={element.id} className="contentGrid">
          <h1>{element.full_name}</h1>
          <h3>Status: {element.status}</h3>
          <h3>Location: {element.location.name}, {element.location.region}</h3>
          <h3>Type: {element.landing_type}</h3>
          <h3>Wikipedia: {element.wikipedia}</h3>
          <h3>Details: {element.details}</h3>
        </div>
      ))}
      </div>
    </div>
  );
};

export default page;