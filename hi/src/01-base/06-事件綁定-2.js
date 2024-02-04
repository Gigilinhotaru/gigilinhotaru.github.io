import React, { Component } from 'react'

export default class App extends Component {
a = 100

  render() {
    return (
      <div>
        <input />
        <button onClick={ ()=>{
          console.log("click1","事件處理邏輯過多，不推薦這種寫法",this.a)
        }}>add1</button>

        <button onClick={ this.handleClick2 }>add2</button>
        <button onClick={ this.handleClick3 }>add3</button>
        
      </div>
    )
  }


  handleClick2(){
    console.log("click2")
  }

  handleClick3(){
    console.log("click3")
  }
}

