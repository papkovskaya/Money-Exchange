// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let h = 0;
    let H = 50;
    let q = 0;
    let Q = 25;
    let d = 0;
    let D = 10;
    let n = 0;
    let N = 5;
    let p = 0
    let P = 1;
    var result = {};

    if (currency > 10000){
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    } else if (currency <= 0) {
        return {};
    } else {
        while((currency / H) >= 1 ){
            currency -= 50;
            h += 1;
        }
        while ((currency / Q) >= 1){
            currency -= 25;
            q += 1;
        }
        while ((currency / D) >= 1) {
            currency -= 10;
            d += 1;
        }
        while ((currency / N) >= 1) {
            currency -= 5;
            n += 1;
        }
        while ((currency / P) >= 1) {
            currency -= 1;
            p += 1;
        }
        if (h != 0){
            result.H = h;
        }
        if (q != 0) {
            result.Q = q;
        }
        if (d != 0) {
            result.D = d;
        }
        if (n != 0) {
            result.N = n;
        }
        if (p != 0) {
            result.P = p;
        }
        return result;
    }

}
