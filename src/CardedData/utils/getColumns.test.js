import {
  deriveColumnsFromData,
  combinedColumns,
  formatKeyForTitle,
  getColumns,
} from "./getColumns";

let testData = [
  { firstKey: "One", secondKey: "1st", thirdKey: "First value" },
  { firstKey: "Two", secondKey: "2nd", thirdKey: "Second value" },
  { firstKey: "Three", secondKey: "3rd", thirdKey: "Third value" },
];

describe("deriveColumnsFromData", () => {
  describe("create id key", () => {
    test("should derive columns from standardized data", () => {
      const columns = deriveColumnsFromData(testData);
      expect(columns).toHaveLength(3);
      expect(columns[0].id).toBe("firstKey");
      expect(columns[1].id).toBe("secondKey");
      expect(columns[2].id).toBe("thirdKey");
    });

    test("should derive columns from data, if keys are inconsistent", () => {
      const testDataWithOtherKeys = testData.concat({
        firstKey: "Four",
        fourthKey: "4",
        fifthKey: "Fourth Item",
      });
      const columns = deriveColumnsFromData(testDataWithOtherKeys);

      expect(columns).toHaveLength(5);
      expect(columns[0].id).toBe("firstKey");
      expect(columns[1].id).toBe("secondKey");
      expect(columns[2].id).toBe("thirdKey");
      expect(columns[3].id).toBe("fourthKey");
      expect(columns[4].id).toBe("fifthKey");
    });
  });

  describe("create position key", () => {
    test("should iterate position by 100 for each column item, beginning at 100", () => {
      const columns = deriveColumnsFromData(testData);

      expect(columns).toHaveLength(3);
      expect(columns[0].position).toBe(100);
      expect(columns[1].position).toBe(200);
      expect(columns[2].position).toBe(300);
    });
  });

  describe("create title key", () => {
    test("should capitolize keynames", () => {
      const columns = deriveColumnsFromData(testData);

      expect(columns).toHaveLength(3);
      expect(columns[0].title).toBe("FirstKey");
      expect(columns[1].title).toBe("SecondKey");
      expect(columns[2].title).toBe("ThirdKey");
    });

    test("should replace dashes from keynames", () => {
      const columns = deriveColumnsFromData(
        testData.concat({ underscored_keyname: "value" })
      );

      expect(columns[3].title).toBe("Underscored keyname");
    });
  });
});

// describe("combinedColumns", () => {});

describe("formatKeyForTitle", () => {
  test("should capitalise the first letter of the column title", () => {
    const title = formatKeyForTitle("keyName");
    expect(title).toBe("KeyName");
  });

  test("should replace underscores", () => {
    const title = formatKeyForTitle("underscored_key_name");
    expect(title).toBe("Underscored key name");
  });
});
