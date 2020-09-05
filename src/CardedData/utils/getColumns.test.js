import {
  deriveColumnsFromData,
  combinedColumns,
  formatKeyForTitle,
  getColumns,
} from "./getColumns";

let testData = [
  { firstKey: "One", secondKey: "1st" },
  { firstKey: "Two", secondKey: "2nd" },
];

describe("getColumns", () => {
  const columns = getColumns({
    data: testData,
    customColumns: null,
    customMethods: null,
    columnOverwrite: false,
  });

  describe("if custom columns are not provied", () => {
    const columns = getColumns({
      data: testData,
      customColumns: null,
      customMethods: null,
      columnOverwrite: false,
    });
    test("should derive columns exclusively from data", () => {
      expect(columns).toHaveLength(2);
    });
  });
});

describe("deriveColumnsFromData", () => {
  let testData = [
    { firstKey: "One", secondKey: "1st" },
    { firstKey: "Two", secondKey: "2nd" },
  ];
  test("Should derive titles from standardized keys", () => {
    const columns = deriveColumnsFromData(testData);
    expect(columns).toHaveLength(2);
    expect(columns[0].id).toBe("firstKey");
    expect(columns[1].id).toBe("secondKey");
  });

  test("Should derive all keys from data, if inconsistent keys are provided", () => {
    testData.push({ firstKey: "Three", thirdKey: "3rd", fourthKey: "4rth" });
    const columns = deriveColumnsFromData(testData);

    expect(columns).toHaveLength(4);
    expect(columns[0].id).toBe("firstKey");
    expect(columns[1].id).toBe("secondKey");
    expect(columns[2].id).toBe("thirdKey");
    expect(columns[3].id).toBe("fourthKey");
  });
});

// describe("combinedColumns", () => {});

// describe("formatKeyForTitle", () => {});
