import { useEffect, useState } from 'react';

const page = () => {
  const [capsule, setCapsule] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/capsules")
      .then(response => response.json())
      .then(data => setCapsule(data))
  }, []);

  return (
    <div>
      <h1 className="title">Capsules</h1>
      <div className="content">
        {capsule.map(element => (
          <div key={element.capsule_serial} className="contentGrid">
            <h2>Serial: {element.capsule_serial}</h2>
            <h3>ID: {element.capsule_id}</h3>
            <h3>Status: {element.status}</h3>
            <h3>Type: {element.type}</h3>
            <h3>Details: {element.details}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;