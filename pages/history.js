import { useEffect, useState } from "react";
import Link from 'next/link';

const page = () => {
  const [capsule, setCapsule] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/history")
      .then((response) => response.json())
      .then((data) => setCapsule(data));
  }, []);

  return (
    <div>
      <h1 className="title">History</h1>
      <div className="content">
        {capsule.map((element) => (
          <div key={element.id} className="contentGrid">
            <h2>Title: {element.title}</h2>
            <h3>Date: {element.event_date_utc}</h3>
            <h3>Details: {element.details}</h3>
            {(element.links.reddit != null || element.links.article != null || element.links.wikipedia != null) && <h2>Links:</h2>}
            {element.links.reddit != null && <Link href={element.links.reddit}><h3>Reddit: <span id="Link">{element.links.reddit}</span></h3></Link>}
            {element.links.article != null && <Link href={element.links.article}><h3>Article: <span id="Link">{element.links.article}</span></h3></Link>}
            {element.links.wikipedia != null && <Link href={element.links.wikipedia}><h3>Wikipedia: <span id="Link">{element.links.wikipedia}</span></h3></Link>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
