import React,{ Component } from 'react'
// export {Component}

class Child extends Component{
  render(){
    return<div>child</div>
  }
}

class Navbar extends Component{
  render(){
    return <div>navbar
      <Child></Child>
    </div>
  }
}

function Swiper(){
  return <div>swiper</div>
}

const Tabbar = ()=><div>tabbar</div>


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}
