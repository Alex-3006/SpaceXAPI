import { useEffect, useState } from 'react';

const page = () => {
  const [capsule, setCapsule] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/rockets")
      .then(response => response.json())
      .then(data => setCapsule(data))
  }, []);

  return (
    <div>
      <h1 className="title">Rockets</h1>
      <div className="content">
        {capsule.map(element => (
          <div key={element.id} className="contentGrid">
            <h1>Name: {element.rocket_name}</h1>
            <h3>First flight: {element.first_flight}</h3>
            <h3>Country: {element.country}</h3>
            <h3>Company: {element.company}</h3>
            {/* <h3>Images: {element.flickr_images}</h3> */}
            <h3>Wikipedia: {element.wikipedia}</h3>
            <h3>Description: {element.description}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;