import {
  deriveColumnsFromData,
  combinedColumns,
  formatKeyForTitle,
} from "./getColumns";

const data = [
  { firstName: "Mark", lastName: "Hamill", age: "25" },
  { firstName: "Harrison", lastName: "Ford", age: "35" },
  { firstName: "Carrie", lastName: "Fisher", age: "20" },
];

describe("deriveColumnsFromData: ", () => {
  describe("create id key", () => {
    test("should derive columns from standardized data", () => {
      const columns = deriveColumnsFromData(data);
      expect(columns).toHaveLength(3);
      expect(columns[0].id).toBe("firstName");
      expect(columns[1].id).toBe("lastName");
      expect(columns[2].id).toBe("age");
    });

    test("should derive columns from data, if keys are inconsistent", () => {
      const dataWithInconsistentKeys = data.concat({
        firstName: "Billy Dee",
        phone: "948-203-0549",
        address: "Lover Ave",
      });
      const columns = deriveColumnsFromData(dataWithInconsistentKeys);

      expect(columns).toHaveLength(5);
      expect(columns[0].id).toBe("firstName");
      expect(columns[1].id).toBe("lastName");
      expect(columns[2].id).toBe("age");
      expect(columns[3].id).toBe("phone");
      expect(columns[4].id).toBe("address");
    });
  });

  describe("create position key", () => {
    test("should iterate position by 100 for each column item, beginning at 100", () => {
      const columns = deriveColumnsFromData(data);

      expect(columns).toHaveLength(3);
      expect(columns[0].position).toBe(100);
      expect(columns[1].position).toBe(200);
      expect(columns[2].position).toBe(300);
    });
  });

  describe("create title key", () => {
    test("should capitolize keynames", () => {
      const columns = deriveColumnsFromData(data);

      expect(columns).toHaveLength(3);
      expect(columns[0].title).toBe("FirstName");
      expect(columns[1].title).toBe("LastName");
      expect(columns[2].title).toBe("Age");
    });

    test("should replace dashes from keynames", () => {
      const columns = deriveColumnsFromData(
        data.concat({ underscored_keyname: "value" })
      );

      expect(columns[3].title).toBe("Underscored keyname");
    });
  });
});

describe("combinedColumns: ", () => {
  const defaultColumnArray = [
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

  const customColumnAsArray = [
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

  // Centralizing these tests as they should apply
  // for both array and function overwrites
  const runGeneralTests = (mergedColumns) => {
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
  };

  describe("when provided default column array and customColumn array", () => {
    const mergedColumns = combinedColumns(
      defaultColumnArray,
      customColumnAsArray
    );

    runGeneralTests(mergedColumns);
  });

  describe("when provided default column array and customColumn function with customMethods", () => {
    const mockCustomMethods = {};
    mockCustomMethods.returnStaticText = () => "Mock functional return";

    const customColumnAsFunc = (customMethods) => {
      const columnArrayFromFunc = customColumnAsArray;
      columnArrayFromFunc[3].render = () => customMethods.returnStaticText();
      return columnArrayFromFunc;
    };

    const mergedColumns = combinedColumns(
      defaultColumnArray,
      customColumnAsFunc(mockCustomMethods)
    );

    runGeneralTests(mergedColumns);

    test("should accept customMethods if provided", () => {
      const actionColumnMarkup = mergedColumns[2].render();
      expect(actionColumnMarkup).toBe("Mock functional return");
    });
  });
});

describe("formatKeyForTitle: ", () => {
  test("should capitalize the first letter for the column title", () => {
    const title = formatKeyForTitle("keyName");
    expect(title).toBe("KeyName");
  });

  test("should replace underscores for the column title", () => {
    const title = formatKeyForTitle("underscored_key_name");
    expect(title).toBe("Underscored key name");
  });
});
