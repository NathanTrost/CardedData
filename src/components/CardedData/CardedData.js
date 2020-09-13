import React from "react";
import { CardedDataProps } from "../../types";
import { getColumns } from "../../utils/getColumns";
import Header from "../Header";

const CardedData = ({
  columnOverwrite = false,
  customColumns,
  customMethods,
  data,
  displayHeader = true,
  headerType = "columnTitles",
}) => {
  const columns = getColumns({
    data,
    customColumns,
    customMethods,
    columnOverwrite,
  });

  const onFilter = (event) => {
    console.log(event);
  };

  return (
    <div className="wrapper" data-testid={`wrapper`}>
      {displayHeader && <Header {...{ columns, onFilter, headerType }} />}

      <div className="items-wrapper" data-testid={`items-wrapper`}>
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
              className="item-wrapper"
              data-testid={`item-wrapper`}
              key={itemKey}
            >
              <span className="title" data-testid={`title`}>
                {title}
              </span>
              <span className="publisher" data-testid={`publisher`}>
                {publisher}
              </span>
              <span className="description" data-testid={`description`}>
                {description}
              </span>
              <span className="release_date" data-testid={`release_date`}>
                {release_date}
              </span>
              <span className="creators" data-testid={`creators`}>
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
