/**
 * @param {{startWith: (string|number), endWith: (string|number), fillWith: (string|number), length: number}} options
 * @return {string}
 */
const padCenter = options => {
    const { startWith, endWith, fillWith, length } = validateOptions(options);

    const countWithoutFillChar = startWith.length + endWith.length;

    // I'm not sure this behavior is the best
    if (countWithoutFillChar >= length) {
        return `${startWith}${endWith}`;
    }

    const center = fillWith.repeat(length - countWithoutFillChar);

    return `${startWith}${center}${endWith}`;
};

const isNumber = value => typeof value === "number";
const isString = value => typeof value === "string";
const isStringOrNumber = value => isString(value) || isNumber(value);
const isInteger = value => Number.isInteger(value);

const validateOptions = ({ startWith, endWith, fillWith, length }) => {
    if (!isStringOrNumber(startWith)) {
        throw new Error("\"startWith\" must be a string or a number.");
    }

    if (!isStringOrNumber(endWith)) {
        throw new Error("\"endWith\" must be a string or a number.");
    }

    if (!isStringOrNumber(fillWith)) {
        throw new Error("\"fillWith\" must be a string or a number.");
    }

    if (!isNumber(length)) {
        throw new Error("\"length\" must be a number.");
    }

    if (!isInteger(length)) {
        throw new Error("\"length\" must be an integer.");
    }

    if (length <= 0) {
        throw new Error("\"length\" must be greater than 0.");
    }

    startWith = startWith.toString();
    endWith = endWith.toString();
    fillWith = fillWith.toString();
    length = parseInt(length);

    return { startWith, endWith, fillWith, length };
};

export {
    padCenter
};
