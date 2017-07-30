var _ = {};

// map method
_.map = function (arr, func) {
    var result = [];
    if (Array.isArray(arr)) {
        for (var i = 0; i < arr.length; i++) {
            result.push(func(arr[i]));
        }
    } else if (typeof (arr) === 'object') {

        for (var key in arr) {
            result.push(func(arr[key]));
        }
    }
    return result;
};

if (typeof module !== 'undefined') {
    module.exports = _;
}