import { describe, it } from 'mocha'
import { expect } from 'chai'

import { getRandomInteger } from '../randomNumber'


function iterateNTimes(times, func, ...funcArgs) {
  let i = 0
  const results = []
  for (i; i < 100; i++) {
    results.push(func(...funcArgs))
  }

  return results
}

describe('Random Number example test', () => {
  it('is clamped by maximum', () => {
    const results = iterateNTimes(100, getRandomInteger, 100)
    const filtered = results.filter((result) => result > 100)
    expect(filtered.length).to.equal(0)
  })

  it('is optionally clamped by minimum', () => {
    const results = iterateNTimes(100, getRandomInteger, 100, 60)
    const filtered = results.filter((result) => result > 100 && result < 60)
    expect(filtered.length).to.equal(0)
  })
})
