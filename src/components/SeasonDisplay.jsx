import React from "react";
import "../seasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Brrr, it's chilly",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (![3, 4, 5, 6, 7, 8].includes(month)) {
    return lat > 0 ? "winter" : "summer";
  } else {
    return lat > 0 ? "summer" : "winter";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
