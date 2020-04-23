//爬楼梯

function stairs(n) {
    // const totalN = 0;
    // if (n == 1 || n == 2) {
    //     return n
    // }
    // if (n > 2) {
    //     for (let i = 3; i < n + 1; i++) {
    //         totalN = (i - 1) + (i - 2)
    //     }
    // }
    // return totalN

    var dp = new Array(n + 1);
    console.log(dp)
    if (n <= 3) {
        return n;
    }
    dp[1] = 1;
    dp[2] = 2;
    for (var i = 3; i <= n; i++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }
    console.log(dp[n])
    return dp[n];

}
stairs(20)