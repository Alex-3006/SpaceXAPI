import { useEffect, useState } from "react";

const page = () => {
  const [capsule, setCapsule] = useState({});

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/info")
      .then((response) => response.json())
      .then((data) => setCapsule(data));
  }, []);

  return (
    <div>
      <h1 className="infoTitle">{capsule.name}</h1>
      <div className="infoContent">
        <h3>Founder: {capsule.founder}</h3>
        <h3>Founded: {capsule.founded}</h3>
        <h3>Employees: {capsule.employees}</h3>
        <h3>CEO: {capsule.ceo}</h3>
        <h3>CTO: {capsule.cto}</h3>
        <h3>COO: {capsule.coo}</h3>
        <h3>Valuation: {capsule.valuation}</h3>
        {/* <h3>Headquarters: {capsule.headquaters.city}</h3> */}
        {console.log(capsule.headquaters)}
        {console.log(capsule.ceo)}
        <h3>Summary: {capsule.summary}</h3>
        {/* {(capsule.links.website != null || capsule.links.flickr != null || capsule.links.twitter != null || capsule.links.elon_twitter) && <h2>Links:</h2>} */}
        {/* <h3>Website: {capsule.links.website}</h3> */}
        {/* <h3>Flickr: {capsule.links.flickr}</h3> */}
        {/* <h3>Twitter: {capsule.links.twitter}</h3> */}
        {/* <h3>Elons Twitter: {capsule.links.elon_twitter}</h3> */}
      </div>
    </div>
  );
};

export default page;
