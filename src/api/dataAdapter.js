// Logic to adapt 'creators' field,
// currently this is for mock data, but could potentially
// hit the live api with this shape.

const acceptedRoles = {
  A: "artist",
  CA: "cover_artist",
  W: "writer",
};

const restructuredRolesWithNames = dataArray.map((each) => {
  const { creators, ...rest } = each;

  const creatorsString = creators;

  const splitRolesStringRegEx = new RegExp(/(?=[\(])/g); // Splits at opening parenthesis without removing it.
  const rolesWithNames = creatorsString.split(splitRolesStringRegEx);

  const creatorsArray = [];
  rolesWithNames.forEach((str) => {
    const roleIdentifierRegEx = new RegExp(/(?![\(])\w{1,2}(?=[*^\/\)])/g); // Identifies all roles within parenthesis, accounting for dual roles seperated by '/'
    const roleCodes = str.trim().match(roleIdentifierRegEx) || null;

    const removeRoleRegex = new RegExp(/^[\(\w\)\/]*/s); // Identifies parenthesis and all content contained within.
    const nameString = str.replace(removeRoleRegex, "");

    const splitNames = nameString.split(",");
    const namesArray = splitNames.map((name) => {
      const fullName = name.trim();
      const firstName = fullName.substring(0, fullName.lastIndexOf(" "));
      const lastName = fullName.substring(firstName.length).trim();

      if (roleCodes) {
        roleCodes.forEach((role) => {
          creatorsArray.push({
            role: acceptedRoles[role],
            firstName,
            lastName,
            fullName,
          });
        });
      }
      return;
    });
  });

  return { creators: creatorsArray, ...rest };
});
