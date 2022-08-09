// noinspection JSCheckFunctionSignatures

import { padCenter } from "./pad-center.js";

describe("pad-center", () => {
    it("should pad a string with a character in the center", () => {
        expect(padCenter({
            startWith: "053",
            endWith: "0",
            fillWith: "*",
            length: 11
        })).toStrictEqual("053*******0");

        expect(padCenter({
            startWith: "053",
            endWith: "",
            fillWith: "*",
            length: 11
        })).toStrictEqual("053********");

        expect(padCenter({
            startWith: "",
            endWith: "0",
            fillWith: "*",
            length: 11
        })).toStrictEqual("**********0");

        expect(padCenter({
            startWith: "",
            endWith: "A",
            fillWith: "0",
            length: 10
        })).toStrictEqual("000000000A");

        expect(padCenter({
            startWith: "PAD",
            endWith: "",
            fillWith: "0",
            length: 10
        })).toStrictEqual("PAD0000000");

        expect(padCenter({
            startWith: "O",
            endWith: "G",
            fillWith: "_",
            length: 8
        })).toStrictEqual("O______G");

        expect(padCenter({
            startWith: 1,
            endWith: 2,
            fillWith: 0,
            length: 5
        })).toStrictEqual("10002");
    });

    it("should ignore 'length'-'fillWith', if total length of 'startWith'-'endWith' is greater than or equal to 'length' and return 'startsWith'-'endsWith' combined", () => {
        expect(padCenter({
            startWith: "A",
            endWith: "12",
            fillWith: "_",
            length: 3 // "A" + "12" = 3
        })).toStrictEqual("A12");

        expect(padCenter({
            startWith: "AB",
            endWith: "XY",
            fillWith: "__",
            length: 3 // "AB" + "XY" = 4
        })).toStrictEqual("ABXY");
    });

    describe("params validation", () => {
        const params = {
            startWith: "S",
            endWith: "E",
            fillWith: "F",
            length: 10
        };

        it("should throw error if 'startWith', 'endWith' or 'fillWith' is invalid", () => {
            [null, undefined, {}, [], true, false].forEach(testValue => {
                expect(() => {
                    padCenter({ ...params, startWith: testValue });
                }).toThrowError("\"startWith\" must be a string or a number.");

                expect(() => {
                    padCenter({ ...params, endWith: testValue });
                }).toThrowError("\"endWith\" must be a string or a number.");

                expect(() => {
                    padCenter({ ...params, fillWith: testValue });
                }).toThrowError("\"fillWith\" must be a string or a number.");
            });
        });

        it("should not throw any error if 'startWith', 'endWith' or 'fillWith' is valid", () => {
            [0, 1, -1, NaN, Infinity, "", "A"].forEach(testValue => {
                expect(() => {
                    padCenter({ ...params, startWith: testValue });
                }).not.toThrow();

                expect(() => {
                    padCenter({ ...params, endWith: testValue });
                }).not.toThrow();

                expect(() => {
                    padCenter({ ...params, fillWith: testValue });
                }).not.toThrow();
            });
        });

        it("should throw error if 'length' is invalid", () => {
            expect(() => {
                padCenter({ ...params, length: "im-not-a-number" });
            }).toThrowError("\"length\" must be a number.");

            expect(() => {
                padCenter({ ...params, length: 0 });
            }).toThrowError("\"length\" must be greater than 0.");

            expect(() => {
                padCenter({ ...params, length: -1 });
            }).toThrowError("\"length\" must be greater than 0.");

            expect(() => {
                padCenter({ ...params, length: 1.5 });
            }).toThrowError("\"length\" must be an integer.");
        });
    });
});
