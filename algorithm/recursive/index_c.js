function add(A, B) {

    function myadd(A, cur, B) {
        cur = cur + A
        if (B == 1) return cur
        B--;
        return myadd(A, cur, B)
    }
    return myadd(A, 0, B)
};

console.log(add(3, 100))