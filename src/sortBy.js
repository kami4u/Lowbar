var _ = {};

_.sortBy = function (collection, iterator) {
    if (typeof (iterator) === 'function') {
        return collection.sort(function (a, b) {
            return iterator(a) - iterator(b);
        });
    } else {
        return collection.sort(function (a, b) {
            return a[iterator] - b[iterator];
        });
    }
};


if (typeof module !== 'undefined') {
    module.exports = _;
}