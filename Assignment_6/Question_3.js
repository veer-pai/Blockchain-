
let str = "025468";

function computeDash(str) {
    let count = 0;
    let p = 0;
    let q = 0;
    let ans = "";

    for (let i = 0; i < str.length - 1; i++) {
        p = str[i];
        q = str[i + 1];
        if (p % 2 == 0 && q % 2 == 0) {
            if (count == 0) {
                ans += "" + p + "-" + q;
                count++;
            } else {
                ans += "" + "-" + q;
            }
        } else {
            ans += q;
        }
    }
    return ans;
}

let ans = computeDash(str);
console.log(ans);