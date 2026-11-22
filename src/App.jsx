import { useState } from 'react'
import Counter from './component/Counter.jsx'
import './App.css'

function App() {
  let counter = 0;
  
  return (
    <div className='w-screen h-screen bg-[#344151] font-serif flex flex-col gap-y-7 justify-center items-center'>
        <h1 className='text-[#0398d4] text-3xl font-bold '>Increment &amp; Decrement</h1>
        <Counter counter = {counter}></Counter>
        
    </div>
  );
}

export default App
