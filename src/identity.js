var _ = {};

_.identity = function (arg) {
    return arg;
};

if (typeof module !== 'undefined') {
    module.exports = _;
}