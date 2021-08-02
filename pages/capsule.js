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
            <h3>Serial: {element.capsule_serial}</h3>
            <h4>ID: {element.capsule_id}</h4>
            <h4>Status: {element.status}</h4>
            <h4>Type: {element.type}</h4>
            <h4>Details: {element.details}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;