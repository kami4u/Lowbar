var _ = {};

_.last = function (arr, num) {
    if (arguments.length === 1 || num === 1) return arr[arr.length - 1];
    return arr.slice(-num);
};

if (typeof module !== 'undefined') {
    module.exports = _;
}