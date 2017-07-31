var _ = {};

_.zip = function () {
    var results = [];
    for (var i = 0; i < arguments.length; i++) {
        var resultsPrior = [];
        for (var j = 0; j < arguments.length; j++) {
            resultsPrior.push(arguments[j][i]);
        }
        results.push(resultsPrior);
    }
    return results;
};

if (typeof module !== 'undefined') {
    module.exports = _;
}