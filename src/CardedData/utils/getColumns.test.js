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

describe("combinedColumns", () => {
  const defaultTestColumnArray = [
    {
      className: "col-firstName",
      dataKey: "firstName",
      id: "firstName",
      position: 0,
      render: (text) => <div>{text}</div>,
      title: "FirstName",
    },
    {
      className: "col-lastName",
      dataKey: "lastName",
      id: "lastName",
      position: 100,
      render: (text) => <div>{text}</div>,
      title: "LastName",
    },
    {
      className: "col-age",
      dataKey: "age",
      id: "age",
      position: 200,
      render: (text) => <div>{text}</div>,
      title: "Age",
    },
    {
      className: "col-phone",
      dataKey: "phone",
      id: "phone",
      position: 300,
      render: (text) => <div>{text}</div>,
      title: "Phone",
    },
  ];
  const customTestColumnAsArray = [
    {
      id: "firstName",
      position: -1, // Remove firstName with negative position
    },
    {
      id: "age",
      position: 0, // Use 0 position to have age render as the first column
      render: () => "Age goes here",
    },
    {
      // Insert an additional action column between age and lastName not specific to any particular key
      className: "col-actionColumn",
      id: "actionColumn",
      position: 50,
      render: () => {},
      title: "Do Action Here",
    },
    {
      className: "col-name", // Change class to 'col-name'
      id: "lastName",
      title: "Name", // Change title for lastName
    },
  ];

  describe("should merge columns", () => {
    const mergedColumns = combinedColumns(
      defaultTestColumnArray,
      customTestColumnAsArray
    );

    test("should remove firstName column", () => {
      const hasFirstNameCol = mergedColumns.some(
        ({ id }) => id === "firstName"
      );
      expect(hasFirstNameCol).toBe(false);
    });

    test("should set columns in order of [`age`, `actionColumn`, `lastName`, `phone`]", () => {
      expect(mergedColumns.length).toBe(4);
      expect(mergedColumns[0].id).toBe("age");
      expect(mergedColumns[1].id).toBe("actionColumn");
      expect(mergedColumns[2].id).toBe("lastName");
      expect(mergedColumns[3].id).toBe("phone");
    });

    test("should change title `LastName` to `Name`", () => {
      expect(mergedColumns[2].title).toBe("Name");
    });

    test("should set titles to [`Age`, `Do Action Here`, `Name`, `Phone`]", () => {
      expect(mergedColumns[0].title).toBe("Age");
      expect(mergedColumns[1].title).toBe("Do Action Here");
      expect(mergedColumns[2].title).toBe("Name");
      expect(mergedColumns[3].title).toBe("Phone");
    });

    test("should overwrite render element for age column", () => {
      expect(mergedColumns[0].render()).toBe("Age goes here");
    });

    test("should change className from `col-lastName` to `col-name`", () => {
      expect(mergedColumns[2].title).toBe("Name");
    });
  });
});

describe("formatKeyForTitle", () => {
  test("should capitalize the first letter for the column title", () => {
    const title = formatKeyForTitle("keyName");
    expect(title).toBe("KeyName");
  });

  test("should replace underscores for the column title", () => {
    const title = formatKeyForTitle("underscored_key_name");
    expect(title).toBe("Underscored key name");
  });
});
