import { useEffect, useState } from 'react';
import Link from 'next/link';

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
            {element.url != null && <h2>Link:</h2>}
            {/* <h3>Images: {element.image}</h3> */}
            {element.url != null && <Link href={element.url}><h3>URL: <span id="Link">{element.url}</span></h3></Link>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;