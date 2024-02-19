import React, { Component } from 'react'

export default class App extends Component {
  a = 1
  // state = {
  //   mytext:"收藏",
  //   myShow:true
  // }

  constructor(){
    super()
    this.state = {
      mytext:"收藏",
      myShow:true,
      myname:"Gigi"
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome React Develope</h1>
        <button onClick={()=>{
          //  this.state.mytext = "取消" //不用直接修改狀態
          this.setState({
            // mytext:"取消收藏"
            myShow:!this.state.myShow,
            myname:"smallname"
          }) //間接修改狀態

          if(this.state.myShow){
            console.log("收藏的邏輯")
          }else{
            console.log("取消收藏的邏輯")
          }
        }}>{this.state.myShow?'收藏':"取消收藏"}</button>
      </div>
    )
  }
}
