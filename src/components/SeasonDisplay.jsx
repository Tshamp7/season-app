import React from "react";

const getSeason = (lat, month) => {
  if (![3, 4, 5, 6, 7, 8].includes(month)) {
    return lat > 0 ? "winter" : "summer";
  } else {
    return lat > 0 ? "summer" : "winter";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text =
    season === "winter" ? "Brrr, it's chilly!" : "Let's hit the beach!";

  const icon = season === "winter" ? "snowflake" : "sun";

  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
