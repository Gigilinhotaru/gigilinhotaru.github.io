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

        <button onClick={ this.handleClick2.bind(this) }>add2-不推薦這種寫法</button>
        <button onClick={ this.handleClick3 }>add3-推薦</button>
        <button onClick={ ()=>{ this.handleClick4() }}>add4-比較推薦-傳參數</button>
      </div>
    )
  }


  handleClick2(){
    console.log("click2",this.a)
  }

  handleClick3 = (evt)=>{
    console.log("click3",this.a,evt.target)
  }

  handleClick4 = ()=>{
    console.log("click4",this.a)
  }
}

/*
React並不會真正的綁定事件到每一個具體《》的元素上，而是採用事件代理的模式:
*/

/*
  call:改變this,自動執行函數
  apply:改變this,自動執行函數
  bind:改變this,.手動加小誇號執行函數
*/

var obj1 = {
  name:"obj1",
  getName(){
    console.log(this.name)
  }
}

var obj2 = {
  name:"obj2",
  getName(){
    console.log(this.name)
  }
}
obj1.getName.bind(obj2)()
obj2.getName()


// var obtn = document.getElementById("btn")
// obtn.onclick=gunction(){
//   console.log(this)
// }
