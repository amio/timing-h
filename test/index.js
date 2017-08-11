const assert = require('assert')
const parse = require('..')

const performanceTiming = require('./timing.json')
const readableTiming = parse(performanceTiming)
assert(Array.isArray(readableTiming))
