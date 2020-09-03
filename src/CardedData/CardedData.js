import React from "react";
import PropTypes from "prop-types";

const CardedData = ({ data }) => {
  return (
    <div className="cb-wrapper" data-testid={`cb-wrapper`}>
      {data.map((each, key) => {
        const { publisher, description, title, creators, release_date } = each;
        const itemKey = `${key}-title`;
        return (
          <div
            className="cb-item-wrapper"
            data-testid={`cb-item-wrapper`}
            key={itemKey}
          >
            <title className="cb-title" data-testid={`cb-title`}>
              {title}
            </title>
            <span className="cb-publisher" data-testid={`cb-publisher`}>
              {publisher}
            </span>
            <span className="cb-description" data-testid={`cb-description`}>
              {description}
            </span>
            <span className="cb-release_date" data-testid={`cb-release_date`}>
              {release_date}
            </span>
            <span className="cb-creators" data-testid={`cb-creators`}>
              {creators}
            </span>
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
