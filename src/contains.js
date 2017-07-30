var _ = {};

// contains method
_.contains = function (arr, num) {
    if (Array.isArray(arr)) {
        if (arr.indexOf(num) > -1) return true;
        return false;
    }
    else if (typeof (arr) === 'object') {

        if (Object.values(arr).indexOf(num) > -1) { return true; }
        return false;
    }
};

if (typeof module !== 'undefined') {
    module.exports = _;
}