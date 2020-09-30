import {
  sortByKey,
  sortEachByDirection,
  sortEachIfDate,
  validateSortType,
} from "./sortMethods";

describe("sortByKey: ", () => {
  const data = [
    {
      firstName: "Mark",
      lastName: "Hamill",
      age: "25",
      dob: "09/25/1951",
      dobISO: new Date("09-25-1951").toISOString(),
      dobLong: "September 25, 1951",
    },
    {
      firstName: "Harrison",
      lastName: "Ford",
      age: "35",
      dob: "07/13/1942",
      dobISO: new Date("07-13-1942").toISOString(),
      dobLong: "July 13, 1942",
      laRolesPrSW: 8,
    },
    {
      firstName: "Carrie",
      lastName: "Fisher",
      age: "20",
      dob: "10/21/1956",
      dobISO: new Date("10-21-1956").toISOString(),
      dobLong: "October 21, 1956",
      laRolesPrSW: 1,
    },
  ];

  describe("Ascending", () => {
    test("should sort alphabetically from A-Z", () => {
      const newData = sortByKey(data, "firstName", "ASC");

      expect(newData[0].firstName).toBe("Carrie");
      expect(newData[1].firstName).toBe("Harrison");
      expect(newData[2].firstName).toBe("Mark");
    });

    test("should push null, undefined or empty string to the bottom of the sort", () => {
      const newData = sortByKey(data, "laRolesPrSW", "ASC");

      expect(newData[0].lastName).toBe("Fisher");
      expect(newData[1].lastName).toBe("Ford");
      expect(newData[2].lastName).toBe("Hamill");
    });

    describe("dates should sort from earliest to latest when provided", () => {
      const sortAscendingDateResults = (keyToSort) => {
        const newData = sortByKey(data, "dobISO", "ASC");

        expect(newData[0].firstName).toBe("Harrison");
        expect(newData[1].firstName).toBe("Mark");
        expect(newData[2].firstName).toBe("Carrie");
      };

      test("short dates", () => sortAscendingDateResults("dob"));
      test("long dates", () => sortAscendingDateResults("dobLong"));
      test("ISO dates", () => sortAscendingDateResults("dobISO"));
    });
  });

  describe("Descending", () => {
    test("should sort alphabetically from Z-A", () => {
      const newData = sortByKey(data, "lastName", "DESC");

      expect(newData[0].lastName).toBe("Hamill");
      expect(newData[1].lastName).toBe("Ford");
      expect(newData[2].lastName).toBe("Fisher");
    });

    test("should push null, undefined or empty string to the bottom of the sort", () => {
      const newData = sortByKey(data, "laRolesPrSW", "DESC");

      expect(newData[0].lastName).toBe("Ford");
      expect(newData[1].lastName).toBe("Fisher");
      expect(newData[2].lastName).toBe("Hamill");
    });

    describe("dates should sort from latest to earliest when provided", () => {
      const sortDescendingDateResults = (keyToSort) => {
        const newData = sortByKey(data, keyToSort, "DESC");

        expect(newData[0].firstName).toBe("Carrie");
        expect(newData[1].firstName).toBe("Mark");
        expect(newData[2].firstName).toBe("Harrison");
      };

      test("short dates", () => sortDescendingDateResults("dob"));
      test("long dates", () => sortDescendingDateResults("dobLong"));
      test("ISO dates", () => sortDescendingDateResults("dobISO"));
    });
  });
});

describe("validateSortType: ", () => {
  describe("If not provided a valid direction", () => {
    describe("should throw an error", () => {
      const thrownErrorMsg = (recievedVal) =>
        `One of ["ASC","DESC"] required, instead recieved "${recievedVal}"`;

      test("if undefined", () => {
        expect(() => validateSortType(undefined)).toThrow(
          thrownErrorMsg(undefined)
        );
      });

      test("if provided a value besides 'ASC' or 'DESC'", () => {
        expect(() => validateSortType("HEIGHT")).toThrow(
          thrownErrorMsg("HEIGHT")
        );
      });
    });
  });
});

describe("sortEachByDirection: ", () => {
  const xWing = "X-Wing";
  const atat = "AT-AT Walker";
  describe("Ascending", () => {
    describe("should sort alphabetically from A-Z", () => {
      const compareAgainstXWing = sortEachByDirection(xWing, atat, true);
      expect(compareAgainstXWing).toBe(1);

      const compareAgainstAT = sortEachByDirection(atat, xWing, true);
      expect(compareAgainstAT).toBe(-1);
    });

    describe("With non-value", () => {
      describe("should return 0 if first param is null, undefined or an empty string", () => {
        const compareWithNullAsc = sortEachByDirection(null, atat, true);
        expect(compareWithNullAsc).toBe(0);

        const compareWithUndefinedAsc = sortEachByDirection(
          undefined,
          atat,
          true
        );
        expect(compareWithUndefinedAsc).toBe(0);

        const compareWithEmptyAsc = sortEachByDirection("", xWing, true);
        expect(compareWithEmptyAsc).toBe(0);
      });

      describe("should return -1 if second param is null, undefined or an empty string", () => {
        const compareWithEmptyAsc = sortEachByDirection(xWing, "", true);
        expect(compareWithEmptyAsc).toBe(-1);
      });
    });
  });

  describe("Descending", () => {
    describe("should sort alphabetically from Z-A", () => {
      const compareAgainstXWing = sortEachByDirection(xWing, atat, false);
      expect(compareAgainstXWing).toBe(-1);

      const compareAgainstAT = sortEachByDirection(atat, xWing, false);
      expect(compareAgainstAT).toBe(1);
    });

    describe("With non-value", () => {
      describe("should return 0 if first param is null, undefined or an empty string", () => {
        const compareWithNullDesc = sortEachByDirection(null, xWing, false);
        expect(compareWithNullDesc).toBe(0);

        const compareWithUndefinedDesc = sortEachByDirection(
          undefined,
          xWing,
          false
        );
        expect(compareWithUndefinedDesc).toBe(0);

        const compareWithEmptyDesc = sortEachByDirection("", xWing, false);
        expect(compareWithEmptyDesc).toBe(0);
      });

      describe("should return -1 if second param is null, undefined or an empty string", () => {
        const compareWithNullDesc = sortEachByDirection(atat, null, false);
        expect(compareWithNullDesc).toBe(-1);

        const compareWithUndefinedDesc = sortEachByDirection(
          atat,
          undefined,
          false
        );
        expect(compareWithUndefinedDesc).toBe(-1);

        const compareWithEmptyDesc = sortEachByDirection(xWing, "", false);
        expect(compareWithEmptyDesc).toBe(-1);
      });
    });
  });
});

describe("sortEachIfDates: ", () => {
  const swrd = {
    menace: new Date("May 19, 1999"),
    clones: new Date("May 16, 2002"),
    revenge: new Date("May 19, 2005"),
    hope: new Date("May 25, 1977"),
    empire: new Date("May 21, 1980"),
    return: new Date("May 25, 1983"),
    force: new Date("December 18, 2015"),
    lastjedi: new Date("December 15, 2017"),
    rise: new Date("December 20, 2019"),
    rogue: new Date("December 16, 2016"),
    solo: new Date("May 25, 2018"),
  };

  const short = (date) =>
    date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }); // mm/dd/yyyy
  const long = (date) =>
    date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  const iso = (date) => date.toISOString();

  describe("Ascending", () => {
    const sortAsc = true;
    describe("should sort from earliest to latest when provided", () => {
      test("short dates", () => {
        const result1 = sortEachIfDate(
          short(swrd.hope),
          short(swrd.empire),
          sortAsc
        );
        expect(result1).toBe(-1);
        const result2 = sortEachIfDate(
          short(swrd.revenge),
          short(swrd.return),
          sortAsc
        );
        expect(result2).toBe(1);
        const result3 = sortEachIfDate(
          short(swrd.rise),
          short(swrd.rise),
          sortAsc
        );
        expect(result3).toBe(0);
      });

      test("long dates", () => {
        const result1 = sortEachIfDate(
          long(swrd.revenge),
          long(swrd.solo),
          sortAsc
        );
        expect(result1).toBe(-1);
        const result2 = sortEachIfDate(
          long(swrd.force),
          long(swrd.empire),
          sortAsc
        );
        expect(result2).toBe(1);
        const result3 = sortEachIfDate(
          long(swrd.rogue),
          long(swrd.rogue),
          sortAsc
        );
        expect(result3).toBe(0);
      });

      test("ISO dates", () => {
        const result1 = sortEachIfDate(
          iso(swrd.menace),
          iso(swrd.return),
          sortAsc
        );
        expect(result1).toBe(1);
        const result2 = sortEachIfDate(
          iso(swrd.lastjedi),
          iso(swrd.revenge),
          sortAsc
        );
        expect(result2).toBe(1);
        const result3 = sortEachIfDate(iso(swrd.solo), iso(swrd.solo), sortAsc);
        expect(result3).toBe(0);
      });

      test("mixture of formatted dates", () => {
        const result1 = sortEachIfDate(
          iso(swrd.revenge),
          long(swrd.rise),
          sortAsc
        );
        expect(result1).toBe(-1);
        const result2 = sortEachIfDate(
          long(swrd.rogue),
          short(swrd.clones),
          sortAsc
        );
        expect(result2).toBe(1);
        const result3 = sortEachIfDate(
          short(swrd.menace),
          iso(swrd.menace),
          sortAsc
        );
        expect(result3).toBe(0);
      });
    });
  });

  describe("Descending", () => {
    const sortAsc = false;
    describe("should sort from latest to earliest when provided", () => {
      test("short dates", () => {
        const result1 = sortEachIfDate(
          short(swrd.hope),
          short(swrd.empire),
          sortAsc
        );
        expect(result1).toBe(1);
        const result2 = sortEachIfDate(
          short(swrd.solo),
          short(swrd.return),
          sortAsc
        );
        expect(result2).toBe(-1);
        const result3 = sortEachIfDate(
          short(swrd.rise),
          short(swrd.rise),
          sortAsc
        );
        expect(result3).toBe(0);
      });

      test("long dates ", () => {
        const result1 = sortEachIfDate(
          long(swrd.revenge),
          long(swrd.rise),
          sortAsc
        );
        expect(result1).toBe(1);
        const result2 = sortEachIfDate(
          long(swrd.lastjedi),
          long(swrd.empire),
          sortAsc
        );
        expect(result2).toBe(-1);
        const result3 = sortEachIfDate(
          long(swrd.rogue),
          long(swrd.rogue),
          sortAsc
        );
        expect(result3).toBe(0);
      });

      test("ISO dates", () => {
        const result1 = sortEachIfDate(
          iso(swrd.hope),
          iso(swrd.menace),
          sortAsc
        );
        expect(result1).toBe(1);
        const result2 = sortEachIfDate(
          iso(swrd.lastjedi),
          iso(swrd.revenge),
          sortAsc
        );
        expect(result2).toBe(-1);
        const result3 = sortEachIfDate(iso(swrd.rise), iso(swrd.rise), sortAsc);
        expect(result3).toBe(0);
      });

      test("mixture of formatted dates", () => {
        const result1 = sortEachIfDate(
          iso(swrd.menace),
          long(swrd.solo),
          sortAsc
        );
        expect(result1).toBe(1);
        const result2 = sortEachIfDate(
          long(swrd.rogue),
          short(swrd.return),
          sortAsc
        );
        expect(result2).toBe(-1);
        const result3 = sortEachIfDate(
          iso(swrd.revenge),
          short(swrd.revenge),
          sortAsc
        );
        expect(result3).toBe(0);
      });
    });
  });

  describe("When provided non-dates", () => {
    test("should return as null", () => {
      const decending = sortEachIfDate("Millenium Falcon", "X-Wing", false);
      expect(decending).toBe(null);

      const decendingWithOneDate = sortEachIfDate(
        "May 14, 1944",
        "X-Wing",
        false
      );
      expect(decendingWithOneDate).toBe(null);

      const ascending = sortEachIfDate("Millenium Falcon", "X-Wing", true);
      expect(ascending).toBe(null);

      const ascendingWithOneDate = sortEachIfDate(
        "May 14, 1944",
        "X-Wing",
        true
      );
      expect(ascendingWithOneDate).toBe(null);
    });
  });
});
