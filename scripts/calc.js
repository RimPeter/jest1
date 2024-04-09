function addition(a, b, ...rest) {
    if (a === undefined) {
        return undefined;
    }
    if (isNaN(a) || isNaN(b) || isNaN(rest)) {
      return "not a number";
    }
    if (
      typeof a === "string" ||
      typeof b === "string" ||
      typeof rest === "string"
    ) {
      return Number(a) + Number(b) + Number(rest);
    }


    return a + b + rest.reduce((acc, val) => acc + val, 0);
};

module.exports = addition;