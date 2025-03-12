

import { useState } from 'react';
import './App.css'
import Form from './components/Form/Form.jsx';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';


function App() {
  const [toggle,setToggle]=useState(false)

  const handleToggle=()=>setToggle(prev=>!prev)

  return (
    <div className='App'>
      <Header toggle={toggle} handleClick={handleToggle}/>
      {toggle && <Form />}
      <Main />
    </div>
  )
}

export default App
