function addition(a, b, ...rest) {
    if (a === undefined) {
        return undefined;
    }
    if (isNaN(a) || isNaN(b)) {
        return "not a number";
    }
    if (typeof a === "string" || typeof b === "string") {
        return Number(a) + Number(b);
    }

    return a + b + rest.reduce((acc, val) => acc + val, 0);
};

module.exports = addition;