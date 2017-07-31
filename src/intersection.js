var _ = {};

_.intersection = function () {
    var args = [].slice.call(arguments);
    var result = [];
    args[0].forEach(function (item) {
        var isShared = false;
        for (var i = 1; i < args.length; i++) {
            if (args[i].indexOf(item) > -1) isShared = true;
        }
        if (isShared) result.push(item);
    });
    return result;
};


if (typeof module !== 'undefined') {
    module.exports = _;
}