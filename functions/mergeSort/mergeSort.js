function isValid(array) {
    if (!Array.isArray(array)) return false;
    if (array.some((x) => typeof x !== "number") || array.length === 0) return false;
    return true;
}

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
    sortedArray.push(...left.slice(i), ...right.slice(j));
    return sortedArray;
}

export function mergeSort(array) {
    if (!isValid(array)) return;
    if (array.length === 1) return array;

    const middle = Math.ceil(array.length / 2);
    const leftSide = array.slice(0, middle);
    const rightSide = array.slice(middle, array.length);

    const sortedLeft = mergeSort(leftSide);
    const sortedRight = mergeSort(rightSide);
    
    return merge(sortedLeft, sortedRight);
}