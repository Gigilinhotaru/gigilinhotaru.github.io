import React, { Component } from 'react'
import './css/01-index.css' //導入CSS，webpack 的支持

export default class App extends Component {
  render() {
    var myname = "kerwin"
    var obj = {
      backgroundColor:"yellow",
      fontSize:"30px"
    }
    return (
      <div>
        {10+20}-{myname}

        {10>20?'aaa':'bbb'}

        <div style={obj}>11111</div>
        {
          // React 註釋要在大括號裡
        }

        <div className="active">333333</div>
        <div id="myapp">555</div>

        <label htmlFor="username">使用者:</label>
        <input type="text" id="username"/>
      </div>
    )
  }
}
