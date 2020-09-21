import React from "react";
import { HeaderProps } from "../../types";
import ColumnLabel from "./ColumnLabel";

import { StyledColumnLabels } from "../styled/Grid";

const ColumnLabels = ({ columns, onFilter }) => {
  return (
    <StyledColumnLabels
      className="columnLabels-row"
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
    </StyledColumnLabels>
  );
};

ColumnLabels.propTypes = HeaderProps;

export default ColumnLabels;
