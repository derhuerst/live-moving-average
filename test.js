'use strict'

const a = require('assert')

const createWindow = require('.')

// basic test

const avg1 = createWindow(3, 0)
a.strictEqual(avg1.get(), 0)

avg1.push(2)
avg1.push(3)
avg1.push(4)
a.strictEqual(avg1.get(), 3) // (2 + 3 + 4) / 3

avg1.push(5)
a.strictEqual(avg1.get(), 4) // (3 + 4 + 5) / 3

avg1.push(6)
a.strictEqual(avg1.get(), 5) // (4 + 5 + 6) / 3

avg1.push(7)
a.strictEqual(avg1.get(), 6) // (5 + 6 + 7) / 3

a.strictEqual(avg1.push(5).get(), 6) // (6 + 7 + 5) / 3

// works with fill

const avg2 = createWindow(3, 3)

a.strictEqual(avg2.get(), 3)
avg2.push(6)
a.strictEqual(avg2.get(), (3 + 3 + 6) / 3)
