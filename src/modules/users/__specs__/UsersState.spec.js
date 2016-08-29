import {describe, it} from "mocha"
import {expect} from "chai"
import sinon from "sinon"
import {initialState, dispatch} from "@test/state.js"
import immutable from "immutable"

import * as UsersActions from "../UsersState"
import UserRecord from "../UserModel"

describe('UsersState', () => {

	describe("ADD_USER", () => {
		it("can add users", () => {
			const user =  new UserRecord({
				firstName: "Fred",
				lastName: "Dunning"
			})

			const oneUserState = dispatch(initialState, UsersActions.addUser(user))
			const users = oneUserState.get("users")
			expect(users.length).to.equal(1)
			expect(users[0].firstName).to.equal("Fred")
			expect(users[0].lastName).to.equal("Dunning")
		})

		it("cannot add non-users", () => {
			const randomObject = {a: 2, b: "aosinoasnd"}
			var errored = false
			try {
				const erroringUserState = dispatch(initialState, UsersActions.addUser(randomObject))
			} catch (e) {
				errored = true
			}

			expect(errored).to.equal(true)
		})
	})

	it("REMOVE_USER", () => { expect("Still undone!").to.equal("TODO")})
	it("UPDATE_USER", () => { expect("Still undone!").to.equal("TODO")})
	it("REQUEST_USER", () => { expect("Still undone!").to.equal("TODO")})
});