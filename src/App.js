import logo from './logo.svg';
import './App.scss';
import Nav from './views/Nav/Nav';
import './views/Nav/Nav.scss'
import React, { useState } from 'react';


// const App =() => {
//   let [name, setName] = useState('')
//   let [title, setTitle] = useState('')

//   const handleEventClick = () => {
//     setName(title)
//   }
//   const handleOnChangleInput = (event) => {
//     setTitle(event.target.value)
//   }
  
//   return (
//     <div className="App">
//       <Nav/>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>You can input Name : {name}</h1>
//         <input type='text' value={title} onChange={(event)=> handleOnChangleInput(event)}/>
//         <button type='button' onClick={() => handleEventClick()}>Click me</button>
//       </header>
//     </div>
    
//   );
// }

// export default App;


const App = () => {
  let [name, setName] = useState('')
  let [title, setTitle] = useState('')
  const hanleOnChangeTitle = (event) => {
    console.log(event.target.value)
    setTitle(event.target.value)
  }
  const hanleOnAdd = () => {
    setName(title)
  }
  return(
    <div className='App'>
      <Nav/>
      <header className='App-header'>
      <h1>You can input Name : {name}</h1>
      <input type='text' onChange={(event) => hanleOnChangeTitle(event)}/>
      <button type='button' onClick={() => hanleOnAdd()}>Add</button>
      </header>
    </div>
  );
}
export default App