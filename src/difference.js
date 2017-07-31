var _ = {};

_.difference = function (array) {
    var args = [].slice.call(arguments);
    var result = [];

    array.forEach(function (item) {
        var isUnique = true;
        for (var i = 1; i < args.length; i++) {
            if (args[i].indexOf(item) > -1) isUnique = false;
        }
        if (isUnique) result.push(item);
    });
    return result;
};

if (typeof module !== 'undefined') {
    module.exports = _;
}