import React from "react";
import { render } from "@testing-library/react";
import { getByTestId, queryByTestId } from "@testing-library/dom";
import App from "./App";

describe("CardedData", () => {
  const { container } = render(<App />);

  test("should display wrapper and all markup in first item", () => {
    const itemsWrapper = getByTestId(container, "items-wrapper");
    const itemWrapper = itemsWrapper.firstChild;
    expect(itemWrapper).toBeTruthy();

    expect(queryByTestId(itemWrapper, "cell-wrapper-title")).toBeTruthy();
    expect(queryByTestId(itemWrapper, "cell-wrapper-publisher")).toBeTruthy();
    expect(queryByTestId(itemWrapper, "cell-wrapper-description")).toBeTruthy();
    expect(
      queryByTestId(itemWrapper, "cell-wrapper-release_date")
    ).toBeTruthy();
    expect(queryByTestId(itemWrapper, "cell-wrapper-creators")).toBeTruthy();
  });
});
