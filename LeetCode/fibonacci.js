
const fibbonaci = function(i, memo) {
    memo = memo || {}
    if (memo[n]) {
        return memo[n];
    }
    if (i <= 1) {return 1};
    return memo[n] = fibbonaci(i - 1, memo) + fibbonaci(i - 2, memo);
}

const fibbonaci = function(n, memo) {
    if (n === 0) return 0;
    else if (n === 1) return 1;

    const memo = []
    memo[0] = 0;
    memo[1] = 1;

    for (const i = 2; i < n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }
}