export function mergeSort(array) {
    function merge(left, right) {
        const sortedArray = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                sortedArray.push(left[i]);
                i += 1;
            } else {
                sortedArray.push(right[j]);
                j += 1;
            }
        }
        return sortedArray;
    }

    if (!Array.isArray(array)) return; // Checks if input is an array
    if (array.some((x) => typeof x !== "number")) return; // Checks if all values inside array are valid
    if (array.length === 1) return array;

    const middle = Math.ceil(array.length / 2);
    const leftSide = array.slice(0, middle);
    const rightSide = array.slice(middle, array.length);

    const sortedLeft = mergeSort(leftSide);
    const sortedRight = mergeSort(rightSide);

    return merge(sortedLeft, sortedRight);
}

mergeSort([6, 3, 4, 1, 5, 2, 7, 0]);