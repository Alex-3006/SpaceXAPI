import { useEffect, useState } from 'react';

const page = () => {
  const [capsule, setCapsule] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/ships")
      .then(response => response.json())
      .then(data => setCapsule(data))
  }, []);

  return (
    <div>
      <h1 className="title">Ships</h1>
      <div className="content">
        {capsule.map(element => (
          <div key={element.ship_id} className="contentGrid">
            <h1>{element.ship_name}</h1>
            <h3>Type: {element.ship_type}</h3>
            <h3>Roles: {element.roles}</h3>
            <h3>Home port: {element.home_port}</h3>
            <h3>URL: {element.url}</h3>
            {/* <h3>Images: {element.image}</h3> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;