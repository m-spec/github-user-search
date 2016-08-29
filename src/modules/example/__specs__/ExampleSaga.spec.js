import {describe, it} from "mocha"
import {expect} from "chai"

import {asyncRandom} from "../ExampleSaga"
import {call, put} from "redux-saga/effects"
import {promisedRandomInteger} from "@utils/randomNumber"
import {set} from "../ExampleState"

describe('ExampleSaga', () => {
	var iterator
	beforeEach(() => {
		iterator = asyncRandom()
	})


	it("calls the random integer promise", () => {
		expect(iterator.next().value).to.deep.equal(call(promisedRandomInteger, 100))
	})

	it("puts the random value via SET", () => {
		console.log(iterator.next()) //Get the promised stuff

		const action = set(0)
		expect(iterator.next().value.PUT.action).to.deep.equal(action)
	})
});