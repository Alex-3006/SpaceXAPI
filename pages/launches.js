import { useEffect, useState } from 'react';
import Link from 'next/link';

const page = () => {
  const [capsule, setCapsule] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then(response => response.json())
      .then(data => setCapsule(data))
  }, []);

  return (
    <div>
      <h1 className="title">Launches</h1>
      <div className="content">
        {capsule.map(element => (
          <div key={element.mission_name} className="contentGrid">
            <h1>{element.mission_name}</h1>
            <h3>Details: {element.details}</h3>
            <h3>Date: {element.launch_date_utc}</h3>
            <h2>Rocket:</h2>
            <h3>Name: {element.rocket.rocket_name}</h3>
            <h3>Type: {element.rocket.rocket_type}</h3>
            <h3>Details: {element.details}</h3>
            {(element.links.article_link != null || element.links.wikipedia != null || element.links.video_link != null) && <h2>Links:</h2>}
            {element.links.article_link != null && <Link href={element.links.article_link}><h3>Article: <span id="Link">{element.links.article_link}</span></h3></Link>}
            {element.links.wikipedia != null && <Link href={element.links.wikipedia}><h3>Wikipedia: <span id="Link">{element.links.wikipedia}</span></h3></Link>}
            {element.links.video_link != null && <Link href={element.links.video_link}><h3>Youtube: <span id="Link">{element.links.video_link}</span></h3></Link>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;