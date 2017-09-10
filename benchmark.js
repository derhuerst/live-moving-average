'use strict'

const {Suite} = require('benchmark')

const createWindow = require('.')

const w10 = createWindow(10, 0)
for (let i = 0; i < 10; i++) w10.push(Math.random())

const w1000 = createWindow(1000, 0)
for (let i = 0; i < 1000; i++) w10.push(Math.random())

new Suite()

.add('window size 10, 1 push, 1 get', function () {
	w10.push(Math.random())
	w10.get()
})
.add('window size 10, 1 push, 10 get', function () {
	w10.push(Math.random())
	for (let i = 0; i < 10; i++) w10.get()
})

.add('window size 1000, 1 push, 1 get', function () {
	w1000.push(Math.random())
	w1000.get()
})
.add('window size 100, 1 push, 10 get', function () {
	w1000.push(Math.random())
	for (let i = 0; i < 10; i++) w1000.get()
})

.on('error', (err) => {
	console.error(err)
	process.exitCode = 1
})
.on('cycle', (e) => {
	console.log(e.target.toString())
})
.run()
