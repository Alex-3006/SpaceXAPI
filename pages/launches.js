import {useEffect, useState} from 'react';

const page = () => {
  const [capsule, setCapsule] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
    .then(response => response.json())
    .then(data => setCapsule(data))
  }, []);

  return (
    <div>
      {capsule.map(element => (
        <div key={element.flight_number}>
          <h1>{element.mission_name}</h1>
          <h3>{element.details}</h3>
        </div>
      ))}
    </div>
  );
};

export default page;