import React from "react";
import { render } from "@testing-library/react";
import { getByTestId, queryByTestId } from "@testing-library/dom";
import App from "./App";

describe("CardedData", () => {
  const { container } = render(<App />);

  test("should display wrapper and all markup in first item", () => {
    const itemsWrapper = getByTestId(container, "items-wrapper");
    const firstItem = itemsWrapper.firstChild;
    expect(firstItem).toBeTruthy();

    expect(queryByTestId(firstItem, "title")).toBeTruthy();
    expect(queryByTestId(firstItem, "publisher")).toBeTruthy();
    expect(queryByTestId(firstItem, "description")).toBeTruthy();
    expect(queryByTestId(firstItem, "release_date")).toBeTruthy();
    expect(queryByTestId(firstItem, "creators")).toBeTruthy();
  });
});
