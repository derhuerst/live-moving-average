'use strict'

const test = require('tape')

const createWindow = require('.')

test('works', (t) => {
	const avg = createWindow(3, 0)

	t.equal(avg.get(), 0)

	avg.push(2)
	avg.push(3)
	avg.push(4)
	t.equal(avg.get(), 3) // (2 + 3 + 4) / 3

	avg.push(5)
	t.equal(avg.get(), 4) // (3 + 4 + 5) / 3

	avg.push(6)
	t.equal(avg.get(), 5) // (4 + 5 + 6) / 3

	avg.push(7)
	t.equal(avg.get(), 6) // (5 + 6 + 7) / 3

	t.end()
})

// todo: test with fill !== 0
