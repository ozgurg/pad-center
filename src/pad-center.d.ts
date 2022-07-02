/**
 * @param {{startWith: (string|number), endWith: (string|number), fillWith: (string|number), length: number}} options
 * @return {string}
 */
export function padCenter(options: {
    startWith: (string | number);
    endWith: (string | number);
    fillWith: (string | number);
    length: number;
}): string;
