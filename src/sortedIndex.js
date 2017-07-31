var _ = {};

_.sortedIndex = function (arr, num) {
    var startIndex = 0,
        stopIndex = arr.length - 1,
        middle = Math.floor((stopIndex + startIndex) / 2);
    while (arr[middle] != num && startIndex < stopIndex) {
        if (num < arr[middle]) {
            stopIndex = middle - 1;
        } else if (num > arr[middle]) {
            startIndex = middle + 1;
        }
        middle = Math.floor((stopIndex + startIndex) / 2);
    }
    if (arr[middle] != num) return middle + 1;
};

if (typeof module !== 'undefined') {
    module.exports = _;
}