var _ = {};

_.invoke = function (arr, functionOrKey) {
    return arr.map(function (item) {
        var method;
        if (typeof (functionOrKey) === 'string') {
            method = item[functionOrKey];
        } else {
            method = functionOrKey;
        }
        return method.apply(item);
    });
};

if (typeof module !== 'undefined') {
    module.exports = _;
}