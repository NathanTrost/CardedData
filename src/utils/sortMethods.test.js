import React from "react";
import { sortAscendingByKey, sortDescendingByKey } from "./sortMethods";

const data = [
  { firstName: "Mark", lastName: "Hamill", age: "25" },
  { firstName: "Harrison", lastName: "Ford", age: "35" },
  { firstName: "Carrie", lastName: "Fisher", age: "20" },
];

describe("sortAscendingByKey: ", () => {
  test("should sort alphabetically from lowest to highest", () => {
    const newData = sortAscendingByKey(data, "firstName");

    expect(newData).toHaveLength(3);
    expect(newData[0].firstName).toBe("Carrie");
    expect(newData[1].firstName).toBe("Harrison");
    expect(newData[2].firstName).toBe("Mark");
  });
});

describe("sortDescendingByKey: ", () => {
  test("should sort alphabetically from highest to lowest", () => {
    const newData = sortDescendingByKey(data, "lastName");

    expect(newData).toHaveLength(3);
    expect(newData[0].lastName).toBe("Hamill");
    expect(newData[1].lastName).toBe("Ford");
    expect(newData[2].lastName).toBe("Fisher");
  });
});
