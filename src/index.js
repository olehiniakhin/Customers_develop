import React from 'react'
import ReactDOM from 'react-dom'
import App from './bootstrap/App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

console.log("Env is here "+process.env.TEST);