export function fibs(n) {
    if(!Number.isInteger(n) || n < 0) return;
    if (n === 0) return n;

    let prevNum1 = 1;
    let prevNum2 = 0;
    let currentNum = prevNum1 + prevNum2;

    for (let i = 2; i <= n; i++) {
        currentNum = prevNum1 + prevNum2;
        prevNum2 = prevNum1;
        prevNum1 = currentNum;
    }
    return currentNum;
}

export function fibsRec(n) {
    if(!Number.isInteger(n) || n < 0) return;
    if (n < 2) return n;
    return (fibsRec(n-1) + fibsRec(n-2));
}