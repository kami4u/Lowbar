var _ = {};

_.filter = function (list, func) {
    var arr = [];
    if (Array.isArray(list)) {
        for (var i = 0; i < list.length; i++) {
            if (func(list[i])) arr.push(list[i]);
        }
    } else if (typeof (list) === 'object') {
        for (var key in list) {
            if (func(list[key])) arr.push(list[i]);
        }
    }
    return arr;
};

if (typeof module !== 'undefined') {
    module.exports = _;
}