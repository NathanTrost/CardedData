import React from "react";
import { sortAscendingByKey, sortDescendingByKey } from "./sortMethods";

const data = [
  {
    firstName: "Mark",
    lastName: "Hamill",
    age: "25",
    dob: "09-25-1951",
    dobLong: "September 25th, 1951",
  },
  {
    firstName: "Harrison",
    lastName: "Ford",
    age: "35",
    dob: "07-13-1942",
    dobLong: "July 13th, 1942",
  },
  {
    firstName: "Carrie",
    lastName: "Fisher",
    age: "20",
    dob: "10-21-1956",
    dobLong: "October 21st, 1956",
  },
];

describe("sortAscendingByKey: ", () => {
  test("should sort alphabetically from lowest to highest", () => {
    const newData = sortAscendingByKey(data, "firstName");

    expect(newData).toHaveLength(3);
    expect(newData[0].firstName).toBe("Carrie");
    expect(newData[1].firstName).toBe("Harrison");
    expect(newData[2].firstName).toBe("Mark");
  });

  test("should sort dates alphabetically from earliest to latest", () => {
    const newData = sortAscendingByKey(data, "dob");

    expect(newData).toHaveLength(3);
    expect(newData[0].firstName).toBe("Harrison");
    expect(newData[1].firstName).toBe("Mark");
    expect(newData[2].firstName).toBe("Carrie");
  });

  //   test("should sort long dates non-alphabetically from earliest to latest", () => {
  //     const newData = sortAscendingByKey(data, "dobLong");

  //     expect(newData).toHaveLength(3);
  //     expect(newData[0].firstName).toBe("Harrison");
  //     expect(newData[1].firstName).toBe("Mark");
  //     expect(newData[2].firstName).toBe("Carrie");
  //   });
});

describe("sortDescendingByKey: ", () => {
  test("should sort alphabetically from highest to lowest", () => {
    const newData = sortDescendingByKey(data, "lastName");

    expect(newData).toHaveLength(3);
    expect(newData[0].lastName).toBe("Hamill");
    expect(newData[1].lastName).toBe("Ford");
    expect(newData[2].lastName).toBe("Fisher");
  });

  test("should sort dates alphabetically from latest to earliest", () => {
    const newData = sortDescendingByKey(data, "dob");

    expect(newData).toHaveLength(3);
    expect(newData[0].firstName).toBe("Carrie");
    expect(newData[1].firstName).toBe("Mark");
    expect(newData[2].firstName).toBe("Harrison");
  });

  //   test("should sort long dates non-alphabetically from latest to earliest", () => {
  //     const newData = sortDescendingByKey(data, "dob");

  //     expect(newData).toHaveLength(3);
  //     expect(newData[0].firstName).toBe("Carrie");
  //     expect(newData[1].firstName).toBe("Mark");
  //     expect(newData[2].firstName).toBe("Harrison");
  //   });
});
