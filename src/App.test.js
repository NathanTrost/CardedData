import React from "react";
import { render } from "@testing-library/react";
import { queryByTestId } from "@testing-library/dom";
import App from "./App";

describe("CardedData", () => {
  const { container } = render(<App />);

  test("should display wrapper and all markup in first item", () => {
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("cb-wrapper");
    const itemWrapper = wrapper.firstChild;
    expect(itemWrapper).toHaveClass("cb-item-wrapper");

    expect(queryByTestId(itemWrapper, "cb-title")).toBeTruthy();
    expect(queryByTestId(itemWrapper, "cb-publisher")).toBeTruthy();
    expect(queryByTestId(itemWrapper, "cb-description")).toBeTruthy();
    expect(queryByTestId(itemWrapper, "cb-release_date")).toBeTruthy();
    expect(queryByTestId(itemWrapper, "cb-creators")).toBeTruthy();
  });
});
