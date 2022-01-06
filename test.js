import randomString from './index.js';
import test from 'ava';

test('randomString return type to be string', t => {
	t.is(typeof randomString(), 'string');
});

test('randomString string length is 10', t => {
	t.is(randomString(10).length, 10);
});
