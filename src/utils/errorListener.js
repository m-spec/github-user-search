import store from "@redux/store"

//On uncaught errors, read up the store state and send it out.
window.onerror = () => {
	const serialized = store.getState().toJS()
	console.log("Serialized state", serialized)
	// console.log(action)
	// store.dispatch(action)
	// document.getElementById("root").innerHTML = "ERROR YO"
} 