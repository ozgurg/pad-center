/**
 * @param {{
 * startWith: (string | number),
 * endWith: (string | number),
 * fillWith: (string | number),
 * length: number
 * }} params
 * @returns {string}
 */
export function padCenter(params: {
    startWith: (string | number);
    endWith: (string | number);
    fillWith: (string | number);
    length: number;
}): string;
