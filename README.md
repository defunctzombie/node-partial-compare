# partial-compare

deep partial compare of objects

```
var partial_compare = require('partial-compare');

partial_compare({ foo: 'bar', baz: 'quux' }, { foo: 'bar' }); // true
partial_compare({ foo: 'bar', baz: 'quux' }, { foo: 'baz' }); // false
```

## license

MIT
