import { fibs, fibsRec } from "./fibonacci";

describe("fibonacci iteratively", () => {
    test("fibonacci of 0", () => {
        expect(fibs(0)).toBe(0);
    });
    test("fibonacci of 1", () => {
        expect(fibs(1)).toBe(1);
    });
    test("fibonacci of 2", () => {
        expect(fibs(2)).toBe(1);
    });
    test("fibonacci of 3", () => {
        expect(fibs(3)).toBe(2);
    });
    test("fibonacci of 4", () => {
        expect(fibs(4)).toBe(3);
    });
    test("fibonacci of 5", () => {
        expect(fibs(5)).toBe(5);
    });
    test("fibonacci of 6", () => {
        expect(fibs(6)).toBe(8);
    })
    test("fibonacci of 7", () => {
        expect(fibs(7)).toBe(13);
    });
    test("fibonacci of 8", () => {
        expect(fibs(8)).toBe(21);
    });
    test("fibonacci of 9", () => {
        expect(fibs(9)).toBe(34);
    });
    test("fibonacci of 10", () => {
        expect(fibs(10)).toBe(55);
    });
    test("doesn't accept negative numbers", () => {
        expect(fibs(-25)).toBe(undefined);
    })
    test("doesn't accpet floats", () => {
        expect(fibs(2.5)).toBe(undefined);
    });
    test("doesn't accept strings", () => {
        expect(fibs("Hello, World!")).toBe(undefined);
    });
    test("doesn't accept arrays", () => {
        expect(fibs([])).toBe(undefined);
    });
});

describe("fibonacci recursively", () => {
    test("fibonacci of 0", () => {
        expect(fibsRec(0)).toBe(0);
    });
    test("fibonacci of 1", () => {
        expect(fibsRec(1)).toBe(1);
    });
    test("fibonacci of 2", () => {
        expect(fibsRec(2)).toBe(1);
    });
    test("fibonacci of 3", () => {
        expect(fibsRec(3)).toBe(2);
    });
    test("fibonacci of 4", () => {
        expect(fibsRec(4)).toBe(3);
    });
    test("fibonacci of 5", () => {
        expect(fibsRec(5)).toBe(5);
    });
    test("fibonacci of 6", () => {
        expect(fibsRec(6)).toBe(8);
    })
    test("fibonacci of 7", () => {
        expect(fibsRec(7)).toBe(13);
    });
    test("fibonacci of 8", () => {
        expect(fibsRec(8)).toBe(21);
    });
    test("fibonacci of 9", () => {
        expect(fibsRec(9)).toBe(34);
    });
    test("fibonacci of 10", () => {
        expect(fibsRec(10)).toBe(55);
    });
    test("doesn't accept negative numbers", () => {
        expect(fibsRec(-25)).toBe(undefined);
    })
    test("doesn't accpet floats", () => {
        expect(fibsRec(2.5)).toBe(undefined);
    });
    test("doesn't accept strings", () => {
        expect(fibsRec("Hello, World!")).toBe(undefined);
    });
    test("doesn't accept arrays", () => {
        expect(fibsRec([])).toBe(undefined);
    });
});