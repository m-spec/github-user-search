import {describe, it} from "mocha"
import {expect} from "chai"

import {getRandomInteger} from "../randomNumber"


function iterateNTimes(times, func, ...funcArgs) {
	var i = 0, results = [];
	for(i; i < 100; i++) {
		results.push(func(...funcArgs))
	}

	return results
}

describe("Random Number example test", () => {
	it("is clamped by maximum", () => {
		var results = iterateNTimes(100, getRandomInteger, 100)

		var filtered = results.filter((result) => result > 100)

		expect(filtered.length).to.equal(0)
	})

	it("is optionally clamped by minimum", () => {
		var results = iterateNTimes(100, getRandomInteger, 100, 60)

		var filtered = results.filter((result) => result > 100 && result < 60)

		expect(filtered.length).to.equal(0)
	})
})