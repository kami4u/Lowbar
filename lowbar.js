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

_.each = function (list, func) {
    if (Array.isArray(list)) {
        for (var i = 0; i < list.length; i++) {
            func(list[i], i);
        }
    } else if (typeof (list) === 'object') {
        for (var key in list) {
            func(list[key], key);
        }
    }
    return list;
};

if (typeof module !== 'undefined') {
    module.exports = _;
}