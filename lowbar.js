var _ = {};

_.identity = function (arg) {
    return arg;
};

_.first = function (arr, num) {
    if (!Array.isArray(arr)) return;
    if (arguments.length === 1 || num === 1) return arr[0];
    return arr.slice(0, num);
};

_.last = function (arr, num) {
    if (arguments.length === 1 || num === 1) return arr[arr.length - 1];
    return arr.slice(-num);
};

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

_.reject = function (list, func) {
    var arr = [];
    if (Array.isArray(list)) {
        for (var i = 0; i < list.length; i++) {
            if (!func(list[i])) arr.push(list[i]);
        }
    } else if (typeof (list) === 'object') {
        for (var key in list) {
            if (!func(list[key])) arr.push(list[i]);
        }
    }
    return arr;
};

// uniq method
_.uniq = function (arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
};

// map method
_.map = function (arr, func) {
    var result = [];
    if (Array.isArray(arr)) {
        for (var i = 0; i < arr.length; i++) {
            result.push(func(arr[i]));
        }
    } else if (typeof (arr) === 'object') {

        for (var key in arr) {
            result.push(func(arr[key]));
        }
    }
    return result;
};

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