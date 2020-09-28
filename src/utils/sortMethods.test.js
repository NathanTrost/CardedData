import { sortByKey, sortByDirection, sortIfDate } from "./sortMethods";

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
    },
    {
      firstName: "Carrie",
      lastName: "Fisher",
      age: "20",
      dob: "10/21/1956",
      dobISO: new Date("10-21-1956").toISOString(),
      dobLong: "October 21, 1956",
    },
  ];

  describe("Ascending", () => {
    test("should sort alphabetically from A-Z", () => {
      const newData = sortByKey(data, "firstName", "ASC");

      expect(newData).toHaveLength(3);
      expect(newData[0].firstName).toBe("Carrie");
      expect(newData[1].firstName).toBe("Harrison");
      expect(newData[2].firstName).toBe("Mark");
    });

    describe("dates should sort from earliest to latest when provided", () => {
      const sortAscendingDateResults = (keyToSort) => {
        const newData = sortByKey(data, "dobISO", "ASC");

        expect(newData).toHaveLength(3);
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

      expect(newData).toHaveLength(3);
      expect(newData[0].lastName).toBe("Hamill");
      expect(newData[1].lastName).toBe("Ford");
      expect(newData[2].lastName).toBe("Fisher");
    });

    describe("dates should sort from lastest to earliest when provided", () => {
      const sortDescendingDateResults = (keyToSort) => {
        const newData = sortByKey(data, keyToSort, "DESC");

        expect(newData).toHaveLength(3);
        expect(newData[0].firstName).toBe("Carrie");
        expect(newData[1].firstName).toBe("Mark");
        expect(newData[2].firstName).toBe("Harrison");
      };

      test("short dates", () => sortDescendingDateResults("dob"));
      test("long dates", () => sortDescendingDateResults("dobLong"));
      test("ISO dates", () => sortDescendingDateResults("dobISO"));
    });
  });

  describe("If not provided a direction", () => {
    describe("should throw an error", () => {
      const thrownErrorMsg = (recievedVal) =>
        `One of [\"ASC\",\"DESC\"] required, instead recieved \"${recievedVal}\"`;

      test("if undefined", () => {
        expect(() => sortByKey("Luke", "Chewbacca")).toThrow(
          thrownErrorMsg(undefined)
        );
      });

      test("if provided a value besides 'ASC' or 'DESC'", () => {
        expect(() => sortByKey("Leia", "Han", "HEIGHT")).toThrow(
          thrownErrorMsg("HEIGHT")
        );
      });
    });
  });
});

describe("sortByDirection: ", () => {
  const xWing = "X-Wing";
  const atatWalker = "AT-AT Walker";
  describe("Ascending", () => {
    describe("should sort alphabetically from A-Z", () => {
      const compareAgainstXWing = sortByDirection(xWing, atatWalker, true);
      expect(compareAgainstXWing).toBe(1);

      const compareAgainstAT = sortByDirection(atatWalker, xWing, true);
      expect(compareAgainstAT).toBe(-1);
    });
  });

  describe("Descending", () => {
    describe("should sort alphabetically from Z-A", () => {
      const compareAgainstXWing = sortByDirection(xWing, atatWalker, false);
      expect(compareAgainstXWing).toBe(-1);

      const compareAgainstAT = sortByDirection(atatWalker, xWing, false);
      expect(compareAgainstAT).toBe(1);
    });
  });
});

describe("sortIfDates: ", () => {
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
        const result1 = sortIfDate(
          short(swrd.hope),
          short(swrd.empire),
          sortAsc
        );
        expect(result1).toBe(-1);
        const result2 = sortIfDate(
          short(swrd.revenge),
          short(swrd.return),
          sortAsc
        );
        expect(result2).toBe(1);
        const result3 = sortIfDate(short(swrd.rise), short(swrd.rise), sortAsc);
        expect(result3).toBe(0);
      });

      test("long dates", () => {
        const result1 = sortIfDate(
          long(swrd.revenge),
          long(swrd.solo),
          sortAsc
        );
        expect(result1).toBe(-1);
        const result2 = sortIfDate(
          long(swrd.force),
          long(swrd.empire),
          sortAsc
        );
        expect(result2).toBe(1);
        const result3 = sortIfDate(long(swrd.rogue), long(swrd.rogue), sortAsc);
        expect(result3).toBe(0);
      });

      test("ISO dates", () => {
        const result1 = sortIfDate(iso(swrd.menace), iso(swrd.return), sortAsc);
        expect(result1).toBe(1);
        const result2 = sortIfDate(
          iso(swrd.lastjedi),
          iso(swrd.revenge),
          sortAsc
        );
        expect(result2).toBe(1);
        const result3 = sortIfDate(iso(swrd.solo), iso(swrd.solo), sortAsc);
        expect(result3).toBe(0);
      });

      test("mixture of formatted dates", () => {
        const result1 = sortIfDate(iso(swrd.revenge), long(swrd.rise), sortAsc);
        expect(result1).toBe(-1);
        const result2 = sortIfDate(
          long(swrd.rogue),
          short(swrd.clones),
          sortAsc
        );
        expect(result2).toBe(1);
        const result3 = sortIfDate(
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
        const result1 = sortIfDate(
          short(swrd.hope),
          short(swrd.empire),
          sortAsc
        );
        expect(result1).toBe(1);
        const result2 = sortIfDate(
          short(swrd.solo),
          short(swrd.return),
          sortAsc
        );
        expect(result2).toBe(-1);
        const result3 = sortIfDate(short(swrd.rise), short(swrd.rise), sortAsc);
        expect(result3).toBe(0);
      });

      test("long dates ", () => {
        const result1 = sortIfDate(
          long(swrd.revenge),
          long(swrd.rise),
          sortAsc
        );
        expect(result1).toBe(1);
        const result2 = sortIfDate(
          long(swrd.lastjedi),
          long(swrd.empire),
          sortAsc
        );
        expect(result2).toBe(-1);
        const result3 = sortIfDate(long(swrd.rogue), long(swrd.rogue), sortAsc);
        expect(result3).toBe(0);
      });

      test("ISO dates", () => {
        const result1 = sortIfDate(iso(swrd.hope), iso(swrd.menace), sortAsc);
        expect(result1).toBe(1);
        const result2 = sortIfDate(
          iso(swrd.lastjedi),
          iso(swrd.revenge),
          sortAsc
        );
        expect(result2).toBe(-1);
        const result3 = sortIfDate(iso(swrd.rise), iso(swrd.rise), sortAsc);
        expect(result3).toBe(0);
      });

      test("mixture of formatted dates", () => {
        const result1 = sortIfDate(iso(swrd.menace), long(swrd.solo), sortAsc);
        expect(result1).toBe(1);
        const result2 = sortIfDate(
          long(swrd.rogue),
          short(swrd.return),
          sortAsc
        );
        expect(result2).toBe(-1);
        const result3 = sortIfDate(
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
      const decending = sortIfDate("Millenium Falcon", "X-Wing", false);
      expect(decending).toBe(null);

      const decendingWithOneDate = sortIfDate("May 14, 1944", "X-Wing", false);
      expect(decendingWithOneDate).toBe(null);

      const ascending = sortIfDate("Millenium Falcon", "X-Wing", true);
      expect(ascending).toBe(null);

      const ascendingWithOneDate = sortIfDate("May 14, 1944", "X-Wing", true);
      expect(ascendingWithOneDate).toBe(null);
    });
  });
});
