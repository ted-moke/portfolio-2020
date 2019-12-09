var random = function(a, b, c) {
    return parseFloat((Math.random() * ((a ? a : 1) - (b ? b : 0)) + (b ? b : 0)).toFixed(c ? c : 0))
};

export default {
    random
}