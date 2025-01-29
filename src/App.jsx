import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  const [count, setcount]= useState(0)

  return (
      <div><h1 class="title">Flower Gallery</h1>
      <section class="main">
      <div>
          <img src="./img/one.png"></img>
          <h3>flower</h3>
      </div>
  
      <div><img src="./img/two.png"></img>
          <h3>flower</h3>
      </div>
  
      <div>
          <img src="./img/three.png"></img>
          <h3>flower</h3>
      </div>
      <div>
          <img src="./img/four.png"></img>
          <h3>flower</h3>
      </div>
  
      <div>
          <img src="./img/five.png"></img>
          <h3>flower</h3>
      </div>
  
      <div>
          <img src="./img/six.png"></img>
          <h3>flower</h3>
      </div>
  
      <div>
          <img src="./img/seven.png"></img>
          <h3>flower</h3>
      </div>
  
      <div>
          <img src="./img/eight.png"></img>
          <h3>flower</h3>
      </div>
  
      <div>
          <img src="./img/two.png"></img>
          <h3>flower</h3>
      </div>
  
      <div>
          <img src="./img/five.png"></img>
          <h3>flower</h3>
      </div>
  
      <div>
          <img src="./img/six.png"></img>
          <h3>flower</h3>
      </div>
  
      <div>
          <img src="./img/three.png"></img>
          <h3>flower</h3>
      </div>
      </section>
      </div>
  )
}



export default App
