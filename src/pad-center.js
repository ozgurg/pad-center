const isNumber = value => typeof value === "number";
const isString = value => typeof value === "string";
const isStringOrNumber = value => isString(value) || isNumber(value);
const isInteger = value => Number.isInteger(value);

/**
 * @param {{
 * startWith: (string | number),
 * endWith: (string | number),
 * fillWith: (string | number),
 * length: number
 * }} params
 * @returns {string}
 */
const padCenter = params => {
    const {
        startWith,
        endWith,
        fillWith,
        length
    } = validateParams(params);

    const countWithoutFillChar = startWith.length + endWith.length;

    // I'm not sure this behavior is the best
    if (countWithoutFillChar >= length) {
        return `${startWith}${endWith}`;
    }

    const center = fillWith.repeat(length - countWithoutFillChar);

    return `${startWith}${center}${endWith}`;
};

const validateParams = ({ startWith, endWith, fillWith, length }) => {
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

    return {
        startWith,
        endWith,
        fillWith,
        length
    };
};

export {
    padCenter
};
