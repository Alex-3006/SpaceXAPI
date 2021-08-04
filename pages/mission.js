import { useEffect, useState } from 'react';
import Link from 'next/link';

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
            <h3>Description: {element.description}</h3>
            {(element.wikipedia != null || element.website != null || element.twitter != null) && <h2>Link:</h2>}
            {element.wikipedia != null && <Link href={element.wikipedia}><h3>Wikipedia: <span id="Link">{element.wikipedia}</span></h3></Link>}
            {element.website != null && <Link href={element.website}><h3>Website: <span id="Link">{element.website}</span></h3></Link>}
            {element.twitter != null && <Link href={element.twitter}><h3>Twitter: <span id="Link">{element.twitter}</span></h3></Link>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;