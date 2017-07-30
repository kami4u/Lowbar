var _ = {};

_.indexOf = function (arr, num, bool) {
    if (arguments.length < 3 || !bool) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === num) return i;
        }
        return -1;
    }
    if (bool) {
        return binarySearch(arr, num);
    }

    function binarySearch(arr, num) {
        var midPoint = Math.floor(arr.length - 1 / 2);
        if (arr[midPoint] > num) return binarySearch(arr.slice(0, midPoint), num);
        else if (arr[midPoint] < num) return binarySearch(arr.slice(midPoint + 1, arr.length - 1), num);
        else return midPoint;
    }
};

if (typeof module !== 'undefined') {
    module.exports = _;
}