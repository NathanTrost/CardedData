import React from "react";
import { ColumnLabelsProps } from "../../types";

import ColumnLabel from "./ColumnLabel";
import { StyledColumnLabelsWrapper } from "../styled/Grid";

const ColumnLabels = ({ columns, onFilter }) => {
  return (
    <StyledColumnLabelsWrapper
      className="column-labels-row"
      data-testid={`column-labels-row`}
      gridLength={columns.length}
    >
      {columns.map((each, index) => {
        const titleKey = `${index}-${each.id}`;
        return (
          <ColumnLabel key={titleKey} onFilter={onFilter}>
            {each.title}
          </ColumnLabel>
        );
      })}
    </StyledColumnLabelsWrapper>
  );
};

ColumnLabels.propTypes = ColumnLabelsProps;

export default ColumnLabels;
