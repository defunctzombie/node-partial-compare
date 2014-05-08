var assert = require('assert');
var match = require('./');

test('degenerate', function() {
    assert.ok(match({}));
});

test('simple valid', function() {
    assert.ok(match({ foo: 'bar', baz: 54 }, { baz: 54 }))
});

test('simple invalid', function() {
    assert.ok(!match({ foo: 'bar', baz: 54 }, { baz: 55 }))
});

test('nested valid', function() {
    assert.ok(match({ foo: { baz: 'bar' }, quux: 'kill me'}, { foo: { baz: 'bar' }}));
});

test('nested invalid', function() {
    assert.ok(!match({ foo: { baz: 'bar' }, quux: 'kill me'}, { foo: { baz: 'baz' }}));
});

