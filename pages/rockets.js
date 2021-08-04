import { useEffect, useState } from "react";
import Link from "next/link";

const page = () => {
  const [capsule, setCapsule] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/rockets")
      .then((response) => response.json())
      .then((data) => setCapsule(data));
  }, []);

  return (
    <div>
      <h1 className="title">Rockets</h1>
      <div className="content">
        {capsule.map((element) => (
          <div key={element.id} className="contentGrid">
            <h1>Name: {element.rocket_name}</h1>
            <h3>First flight: {element.first_flight}</h3>
            <h3>Country: {element.country}</h3>
            <h3>Company: {element.company}</h3>
            <h3>Description: {element.description}</h3>
            {element.wikipedia != null && <h2>Link:</h2>}
            <div>
              <h3>Images: </h3>
              {element.flickr_images.forEach((el) => {
                <Link href={el}>
                  <h3>
                    <span id="Link">{el}</span>
                  </h3>
                </Link>;
              })}
            </div>
            {element.wikipedia != null && (
              <Link href={element.wikipedia}>
                <h3>
                  Wikipedia: <span id="Link">{element.wikipedia}</span>
                </h3>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
