var _ = {};

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