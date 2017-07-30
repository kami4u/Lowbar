var _ = {};

_.memoize = function (func, hash) {
    var cache = {};
    var args;
    return function () {
        if (hash) args = hash.apply(null, arguments);
        else args = JSON.stringify(arguments[0]);
        if (cache[args]) return cache[args];
        cache[args] = func.apply(null, arguments);
        return cache[args];
    };
};


if (typeof module !== 'undefined') {
    module.exports = _;
}