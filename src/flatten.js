var _ = {};

_.flatten = function (arr) {
    var result = [];
    var simplify = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            if (typeof (arr[i]) === 'number') result.push(arr[i]);
            simplify(arr[i]);
        }
    };
    simplify(arr);
    return result;
};

if (typeof module !== 'undefined') {
    module.exports = _;
}