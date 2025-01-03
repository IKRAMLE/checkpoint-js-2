
// Find Maximum
function findMaximum(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Find Minimum
function findMinimum(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Sum of Array
function sumOfArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


// Filter Array
function filterArray(arr, condition) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}





