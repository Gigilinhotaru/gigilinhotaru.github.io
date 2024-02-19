import React, { Component } from 'react'
import './css/00-todolist.css'
export default class App extends Component {
  a = 100
  myref = React.createRef()

  state = {
    list:[{
      id:1,
      mytext:"aaa"
    },
    {
      id:2,

      mytext:"bbb"
    },
    {
      id:3,
      mytext:"ccc"
    }
  ]
  }
  render() {
    return (
      <div>
        {/* <input ref="mytext"/> */}
        <input ref={this.myref}/>
        <button className={this.handleClick2===0?'':'addTaskButton'}>Add Task</button>
        {/* <button onClick={this.handleClick2}>Add</button> */}

        <ul>
          {
            this.state.list.map( (item,index)=>
            <li key={item.id}>
              {/* {item.mytext} */}

              {/* 副文本展示 */}
              <span dangerouslySetInnerHTML={
                {
                    __html:item.mytext
                }
              }></span>
              {/* <button onClick={this.handleDelClick.bind(this,index)}>del</button> */}

              <button onClick={()=>this.handleDelClick
              (index)}>del</button>
            </li>
              )
          }
        </ul>
    
        {/* {this.state.list.length===0 ? <div>暫無待辦事項</div>:null}  */}

        {/* {this.state.list.length===0 && <div>暫無待辦事項</div>}  */}

        <div className={this.state.list.length===0?'':'hidden'}>暫無待辦事項</div>
      </div>
    )
  }

    handleClick2 = ()=>{
      console.log("click2",this.myref.current.value)
    
    // this.setState

    // 不要直接修改狀態，可能會造成不可預期的狀態
    // this.state.list.push(this.myref.current.value)

    let newlist = [...this.state.list]
    newlist.push({
      id:Math.random()*100000000, //生成不同id的函數
      mytext:this.myref.current.value
    })
    // console.log()
    this.setState({
      list:newlist
    })

    // 清空輸入框
    this.myref.current.value = ""
  }

  handleDelClick(index){
    console.log("del-click",index)

  // 不要直接修改狀態，可能會造成不可預期的狀態
  
  let newlist = this.state.list.concat()

  newlist.splice(index,1)

  this.setState({
    list:newlist
  })
  }
}

