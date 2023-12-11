const fibonacci = function(x) {
        Number(x);
        if(x == 1) return 1;
        if(x == 2) return 1;
        if(x < 0) return "OOPS";
        let old = 1;
        let current = 1;
        for (let i = 3; i <= x ; i++) {
            value = old + current;
            old = current;
            current = value;
        }
        return value;
};

// Do not edit below this line
module.exports = fibonacci;
