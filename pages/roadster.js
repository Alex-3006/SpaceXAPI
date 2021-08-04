import { useEffect, useState } from "react";
import Link from "next/link";

const page = () => {
  const [capsule, setCapsule] = useState({});

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/roadster")
      .then((response) => response.json())
      .then((data) => setCapsule(data));
  }, []);

  return (
    <div>
      <h1 className="infoTitle">{capsule.name}</h1>
      <div className="infoContent">
        <h3>Details: {capsule.details}</h3>
        {(capsule.wikipedia != null || capsule.video != null) && <h2>Link:</h2>}
        {/* {(capsule.flickr_image).forEach(element => {
          <Link href={element}>
          <h3>
            <span id="Link">{element}</span>
          </h3>
        </Link>
        })} */}
        {/* {capsule.flickr_images != null && (
          <Link href={capsule.flickr_images}>
            <h3>
              Images: <span id="Link">{capsule.flickr_images}</span>
            </h3>
          </Link>
        )} */}
        {capsule.wikipedia != null && (
          <Link href={capsule.wikipedia}>
            <h3>
              Wikipedia: <span id="Link">{capsule.wikipedia}</span>
            </h3>
          </Link>
        )}
        {capsule.video != null && (
          <Link href={capsule.video}>
            <h3>
              Youtube: <span id="Link">{capsule.video}</span>
            </h3>
          </Link>
        )}
      </div>
    </div>
  );
};

export default page;
