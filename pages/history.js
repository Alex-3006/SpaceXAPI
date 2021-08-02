import { useEffect, useState } from "react";

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
            <h3>Title: {element.title}</h3>
            <h4>Date: {element.event_date_utc}</h4>
            <h4>Details: {element.details}</h4>
            <h3>Links:</h3>
            {element.links.reddit != null && <h4>Reddit: {element.links.reddit}</h4>}
            {element.links.article != null && <h4>Article: {element.links.article}</h4>}
            {element.links.wikipedia != null && <h4>Wikipedia: {element.links.wikipedia}</h4>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
