import {describe, it} from "mocha"
import {expect} from "chai"
import sinon from "sinon"
import {initialState, dispatch} from "@test/state.js"
import immutable from "immutable"

import * as ExampleActions from "../ExampleState"

describe('ExampleState', () => {

  	it("DEFAULT_VALUE", () => {
  		expect(initialState.getIn(["example", "value"])).to.equal(0)
  	})
  	it("INCREMENT", () => {
  		const plusFive = dispatch(initialState, ExampleActions.increment(5))
  		expect(plusFive.getIn(["example", "value"])).to.equal(5)
  		const plusTwentyfive = dispatch(plusFive, ExampleActions.increment(20))
  		expect(plusTwentyfive.getIn(["example", "value"])).to.equal(25)
  	})

  	it("DECREMENT", () => {
  		const minusFiveState = dispatch(initialState, ExampleActions.decrement(5))
  		expect(minusFiveState.getIn(["example", "value"])).to.equal(-5)
  		const minusTwentyFiveState = dispatch(minusFiveState, ExampleActions.decrement(20))
  		expect(minusTwentyFiveState.getIn(["example", "value"])).to.equal(-25)
  	})

  	it("MULTIPLY", () => {})
  	it("RESET", () => {
  		const plusFiveState = dispatch(initialState, ExampleActions.increment(5))
  		expect(plusFiveState.getIn(["example", "value"])).to.equal(5)
  		const resetState = dispatch(plusFiveState, ExampleActions.reset())
  		expect(resetState.getIn(["example", "value"])).to.equal(0)
  	})
  	it("RANDOM", () => {
  		//no-op, tested in ExampleSaga
  	})
});