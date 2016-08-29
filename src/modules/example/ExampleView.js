import React, { Proptypes } from 'react'
// import "./example.css"

const ExampleView = ({ value, ...actions }) => (
  <div>
    <div>
      <button onClick={actions.subtractFive}>-5</button>
      <button onClick={actions.subtractOne}>-1</button>
      <span>{value}</span>
      <button onClick={actions.addOne}>+1</button>
      <button onClick={actions.addFive}>+5</button>
    </div>
    <div>
      <button onClick={actions.multiplyByFive}>MULTIPLY</button>
      <button onClick={actions.reset}>RESET</button>
      <button onClick={actions.asyncRandom}>ASYNC RANDOM</button>
    </div>
  </div>
)

ExampleView.propTypes = {
  value: Proptypes.number
}

export default ExampleView
