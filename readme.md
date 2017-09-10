# live-moving-average

**An ever updating average of the last n values.** See [Moving Average](https://en.wikipedia.org/wiki/Moving_average).

Reuses the values array to prevent GC-thrashing. Does not slow down with an increasing window size:

```
window size 10, 1 push, 1 get x 38,591,962 ops/sec ±0.66% (89 runs sampled)
window size 10, 1 push, 10 get x 27,893,789 ops/sec ±0.80% (90 runs sampled)
window size 1000, 1 push, 1 get x 38,770,793 ops/sec ±0.56% (87 runs sampled)
window size 100, 1 push, 10 get x 28,240,783 ops/sec ±0.43% (96 runs sampled)
```

[![npm version](https://img.shields.io/npm/v/live-moving-average.svg)](https://www.npmjs.com/package/live-moving-average)
[![build status](https://img.shields.io/travis/derhuerst/live-moving-average.svg)](https://travis-ci.org/derhuerst/live-moving-average)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/live-moving-average.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install live-moving-average
```


## Usage

```js
const createWindow = require('live-moving-average')

const avg = createWindow(3, 0) // size of 3, fill with 0

avg.push(2)
avg.push(3)
avg.push(4)
avg.get() // 3, because (2 + 3 + 4) / 3

avg.push(5)
avg.push(6)
avg.get() // 5, because (4 + 5 + 6) / 3

avg.push(7)
avg.get() // 6, because (5 + 6 + 7) / 3
```


## API

### `const w = createWindow(size, fill = 0)`

`size` and `fill` must be a number.

### `w.push(val)`

`val` must be a number.

### `w.get()`

Returns a number.


## Contributing

If you have a question or have difficulties using `live-moving-average`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/live-moving-average/issues).
