var _ = {};

_.once = function (fn) {

    var called = false;

    return function (a) {
        if (!called) {
            called = true;
            return fn(a);
        }
    };
};

if (typeof module !== 'undefined') {
    module.exports = _;
}