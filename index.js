function match(haystack, filter) {
    if (!filter) {
        return true;
    }

    return Object.keys(filter).every(function(key) {
        var val = filter[key];
        if (val instanceof Object) {
            return match(haystack[key], val);
        }
        var haystackVal = haystack[key];
        // Check that `val` equals `haystackVal` using the `SameValueZero`
        // algorithm. That algorithm is the same as `===` except it returns true
        // when comparing if `NaN` equals `NaN` (unlike `===`). I copied the
        // algorithm from
        // https://github.com/lodash/lodash/blob/4.0.0-npm-packages/lodash.eq/index.js
        return val === haystackVal || (val !== val && haystackVal !== haystackVal);
    });
};

module.exports = match;
