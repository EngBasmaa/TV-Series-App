import React from "react";
import "./index.css";

const SeriesListItem = ({ series }) => (
  <li>{series.show.name}</li> // To get every single show name from our series (10 items)
);

const SeriesList = (props) => {
  return (
    <div>
      <ul className="series-list">
        {props.list.map((series) => (
          <SeriesListItem series={series} key={series.show.id} />
        ))}
      </ul>
    </div>
  );
};

export default SeriesList;
