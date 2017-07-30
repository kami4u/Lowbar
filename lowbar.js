var _ = {};

_.identity = function (arg) {
    return arg;
};

_.first = function (arr, num) {
    if (!Array.isArray(arr)) return;
    if (arguments.length === 1 || num === 1) return arr[0];
    return arr.slice(0, num);
};

_.last = function (arr, num) {
    if (arguments.length === 1 || num === 1) return arr[arr.length - 1];
     return arr.slice(-num);
};


if (typeof module !== 'undefined') {
    module.exports = _;
}