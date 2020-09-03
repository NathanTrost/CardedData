import React from "react";
import PropTypes from "prop-types";

const CardedData = ({ data }) => {
  return (
    <div className="cb-wrapper">
      {data.map((each) => {
        const { publisher, description, title, creators, release_date } = each;
        return (
          <div className="cb-item-wrapper">
            <title className="cb-title">{title}</title>
            <span className="cb-publisher">{publisher}</span>
            <span className="cb-descriptions">{description}</span>
            <span className="cb-release_date">{release_date}</span>
            <span classNAme="cb-creators">{creators}</span>
          </div>
        );
      })}
    </div>
  );
};

CardedData.propTypes = {
  data: PropTypes.array,
};

export default CardedData;
