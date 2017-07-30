var _ = {};

_.shuffle = function (list) {
    var res = [];
    var copy = list.slice();
    while (copy.length) {
        var randomIndex = Math.floor(Math.random() * copy.length);
        res.push(copy[randomIndex]);
        copy.splice(randomIndex, 1);
    }
    return res;
};

if (typeof module !== 'undefined') {
    module.exports = _;
}