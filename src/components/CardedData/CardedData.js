import React from "react";
import { CardedDataProps } from "../../types";
import { getColumns } from "../../utils/getColumns";
import Header from "../Header";

const CardedData = ({
  columnOverwrite = false,
  customColumns,
  customMethods,
  data,
  headerDisplayType = "columnTitles",
}) => {
  const columns = getColumns({
    data,
    customColumns,
    customMethods,
    columnOverwrite,
  });

  return (
    <div className="cb-wrapper" data-testid={`cb-wrapper`}>
      <Header {...{ columns, headerDisplayType }} />
      <div className="cb-items-wrapper" data-testid={`cb-items-wrapper`}>
        {data.map((each, index) => {
          const {
            publisher,
            description,
            title,
            creators,
            release_date,
          } = each;
          const itemKey = `${index}-item-${each.id}`;
          return (
            <div
              className="cb-item-wrapper"
              data-testid={`cb-item-wrapper`}
              key={itemKey}
            >
              <span className="cb-title" data-testid={`cb-title`}>
                {title}
              </span>
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
    </div>
  );
};

CardedData.propTypes = CardedDataProps;
export default CardedData;
