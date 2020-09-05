import React from "react";
import { render } from "@testing-library/react";
import { getByTestId, queryByTestId } from "@testing-library/dom";
import App from "./App";

describe("CardedData", () => {
  const { container } = render(<App />);

  test("should display wrapper and all markup in first item", () => {
    const itemsWrapper = getByTestId(container, "cb-items-wrapper");
    const firstItem = itemsWrapper.firstChild;
    expect(firstItem).toBeTruthy();

    expect(queryByTestId(firstItem, "cb-title")).toBeTruthy();
    expect(queryByTestId(firstItem, "cb-publisher")).toBeTruthy();
    expect(queryByTestId(firstItem, "cb-description")).toBeTruthy();
    expect(queryByTestId(firstItem, "cb-release_date")).toBeTruthy();
    expect(queryByTestId(firstItem, "cb-creators")).toBeTruthy();
  });
});
