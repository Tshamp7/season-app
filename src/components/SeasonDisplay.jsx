import React from "react";

const getSeason = (lat, month) => {
  const latSouthHem = lat <= 0 && lat != null;
  const latNorthHem = lat >= 0 && lat != null;

  if (latSouthHem && ![3, 4, 5, 6, 7, 8].includes(month)) {
    return "Summer";
  } else if (latSouthHem && [3, 4, 5, 6, 7, 8].includes(month)) {
    return "Winter";
  }

  if (latNorthHem && ![3, 4, 5, 6, 7, 8].includes(month)) {
    return "Winter";
  } else if (latNorthHem && [3, 4, 5, 6, 7, 8].includes(month)) {
    return "Summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  return <div>{season}</div>;
};

export default SeasonDisplay;
