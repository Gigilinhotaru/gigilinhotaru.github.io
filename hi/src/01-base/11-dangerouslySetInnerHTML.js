import React, { Component } from 'react'

export default class App extends Component {

  state = {
    myhtml:`<div>
    <!DOCTYPE html>
<body>
<div class="container">
  <div class="title delay1">T</div>
  <div class="title delay2">H</div>
  <div class="title delay3">E</div>
  <div class="space"> </div>
  <br>
  <div class="title delay4">T</div>
  <div class="title delay5">E</div>
  <div class="title delay6">C</div>
  <div class="title delay7">H</div>
  <div class="title delay8">O</div>
  <div class="space"> </div>
  <br>
  <div class="title delay9">W</div>
  <div class="title delay8">A</div>
  <div class="title delay7">V</div>
  <div class="title delay6">E</div>
  <div class="space"> </div>
  <br>
  <div class="title delay5">I</div>
  <div class="title delay4">S</div>
  <div class="space"> </div>
  <br>
  <div class="title delay3">B</div>
  <div class="title delay2">A</div>
  <div class="title delay1">C</div>
  <div class="title delay2">K</div>
  <div class="space"> </div>
  <!-- <br>
  <div class="title delay3">m</div>
  <div class="title delay4">p</div>
  <div class="title delay5">s</div>
  <div class="title delay6">o</div>
  <div class="title delay7">v</div>
  <div class="title delay8">e</div>
  <div class="title delay9">r</div>
  <div class="space"> </div>
  <br>
  <div class="title delay8">t</div>
  <div class="title delay7">h</div>
  <div class="title delay6">e</div>
  <div class="space"> </div>
  <br>
  <div class="title delay5">l</div>
  <div class="title delay4">a</div>
  <div class="title delay3">z</div>
  <div class="title delay2">y</div>
  <div class="space"> </div>
  <br>
  <div class="title delay1">d</div>
  <div class="title delay2">o</div>
  <div class="title delay3">g</div>
  <br> -->
</div>
<style>
body {
  background-color: #000000;
  margin: 60px;
  padding:0px;
}

.space {
  display: inline-block;
  width: 20px;
}

.container {
  display: inline-block;
  border-radius: 30px 30px;
  width: 100%;
  text-align: left;
}

.title {
  display: inline;
  line-height: 1.8;
  font-size: 75px;
  font-family: 'Press Start 2P', cursive;
  color: #393a3b;
  padding: 15px;
  margin: 0px;
  animation: blur-anime 1s ease-in-out infinite;
}

.delay1 {
  animation-delay: 0.1s;
}

.delay2 {
  animation-delay: 0.2s;
}

.delay3 {
  animation-delay: 0.3s;
}

.delay4 {
  animation-delay: 0.4s;
}

.delay5 {
  animation-delay: 0.5s;
}

.delay6 {
  animation-delay: 0.6s;
}

.delay7 {
  animation-delay: 0.7s;
}

.delay8 {
  animation-delay: 0.8s;
}

.delay9 {
  animation-delay: 0.9s;
}

.delay0 {
  animation-delay: 0.0s;
}



@keyframes blur-anime {
  0% {
    filter: blur(0px);
    color: #e4083f;
  }

  40% {
    filter: blur(10px);
    color: #000000;
  }

  60% {
    filter: blur(10px);
    color: #393a3b;
  }

  100% {
    filter: blur(00px);
    color: #e4083f;
  }
}
</style>
	</body>
    </div>
    `
  }
  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={
          {
            __html:this.state.myhtml
          }
        }></div>
      </div>
    )
  }
}
