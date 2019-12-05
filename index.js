function match(haystack, filter) {
    if (!filter) {
        return true;
    }
    
    if (!haystack) {
        return false;
    }

    return Object.keys(filter).every(function(key) {
        var val = filter[key];
        if (val instanceof Object) {
            return match(haystack[key], val);
        }
        return filter[key] === haystack[key];
    });
};

module.exports = match;
