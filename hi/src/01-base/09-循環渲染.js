import React, { Component } from 'react'

export default class App extends Component {

  state = {
    list:[{
      id:1,
      text:"1111"
    },
    {
      id:2,
      text:"2222"
    },  
    {
      id:1,
      text:"1111"
    },
    {
    id:3,
    text:"3333"
    }
    ]
  }
  render() {

    // var newlist = this.state.list.map(item=><li>{item}</li>)
    return (
      <div>
        <ul>
          {
            this.state.list.map( (item,index)=>
              <li key={index}>{item.text}--{index}</li>
            )
          }
        </ul>
      </div>
    )
  }
}
/*
為了列表的複用和重排，設置key值，提高性能
理想key，item.id
不涉及到列表的增加和刪除，重排，設置成索引沒有問題
*/
/*
  原生js-map

var list= ["a","b","c"]

var newlist = list.map(item=>'<li>${item}</li>')

console.log(newlist.join(""))

*/