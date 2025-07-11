import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import User from './User'
import { useState } from 'react'
import Display from './Display';
import InputBox from './InputBox';

function App() {
  const [text,setText ] = useState('');
  return (
   <div>
   <InputBox setText={setText}/>
   <Display text={text}/>
   </div>
  )

}
export default App
