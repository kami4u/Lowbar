var _ = {};

_.first = function (arr, num) {
    if (!Array.isArray(arr)) return;
    if (arguments.length === 1 || num === 1) return arr[0];
    return arr.slice(0, num);
};

if (typeof module !== 'undefined') {
    module.exports = _;
}