import React from "react";
import { CardedDataProps } from "./propTypes";
import { getColumns } from "./sortCustomColumns";

const CardedData = ({
  columnOverwrite = false,
  customColumns,
  customMethods,
  data,
}) => {
  const columns = getColumns({
    data,
    customColumns,
    customMethods,
    columnOverwrite,
  });

  return (
    <div className="cb-wrapper" data-testid={`cb-wrapper`}>
      <div className="cb-header-row">
        {columns.map((each) => {
          return (
            <strong
              className="cb-header-title"
              style={{ display: "inline-block", margin: "30px" }}
            >
              {each.title}
            </strong>
          );
        })}
      </div>

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

CardedData.propTypes = CardedDataProps;

export default CardedData;
