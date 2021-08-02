import {useEffect, useState} from 'react';

const page = () => {
  const [capsule, setCapsule] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/ships")
    .then(response => response.json())
    .then(data => setCapsule(data))
  }, []);

  return (
    <div>
      {capsule.map(element => (
        <div key={element.ship_id}>
          <h1>{element.ship_name}</h1>
          <h3>{element.ship_type}</h3>
        </div>
      ))}
    </div>
  );
};

export default page;