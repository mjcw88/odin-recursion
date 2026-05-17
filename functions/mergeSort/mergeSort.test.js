import { mergeSort } from "./mergeSort";

describe("mergeSort", () => {
    test("array of 1 number", () => {
        expect(mergeSort([0])).toEqual([0]);
    });
    test("array of 2 numbers", () => {
        expect(mergeSort([1, 0])).toEqual([0, 1]);
    });
    test("array of 3 numbers", () => {
        expect(mergeSort([1, 2, 0])).toEqual([0, 1, 2]);
    });
    test("array of 4 numbers", () => {
        expect(mergeSort([2, 3, 0, 1])).toEqual([0, 1, 2, 3]);
    });
    test("array of 5 numbers", () => {
        expect(mergeSort([0, 4, 2, 3, 1])).toEqual([0, 1, 2, 3, 4]);
    });
    test("array of 6 numbers", () => {
        expect(mergeSort([3, 0, 5, 4, 1, 2])).toEqual([0, 1, 2, 3, 4, 5]);
    });
    test("array of 7 numbers", () => {
        expect(mergeSort([6, 4, 3, 0, 1, 5, 2])).toEqual([0, 1, 2, 3, 4, 5, 6]);
    });
    test("array of 8 numbers", () => {
        expect(mergeSort([6, 3, 4, 1, 5, 2, 7, 0])).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
    });
    test("array with floats included", () => {
        expect(mergeSort([4.5, 7.1, 2, 6, 0.2, 3.7, 5, 1])).toEqual([0.2, 1, 2, 3.7, 4.5, 5, 6, 7.1]);
    });
    test("doesn't accept strings", () => {
        expect(mergeSort("Hello, world!")).toBe(undefined);
    });
    test("doesn't accept integers", () => {
        expect(mergeSort(1)).toBe(undefined);
    });
    test("doesn't accept floats", () => {
        expect(mergeSort(2.5)).toBe(undefined);
    });
    test("doesn't accept arrays with non-numbers inside it", () => {
        expect(mergeSort(["0", "1", "2", "3", 4, 5, 6, 7])).toBe(undefined);
    });
});