

import { useState } from 'react';
import './App.css'


function App() {

  const[color,setColor]=useState("olive")
  return (
    <div className="w-1000 h-screen duration-200" 
     style={{backgroundColor:color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-full'>
          <button onClick={()=>setColor("red")}
          className='outline-none px-4 rounded-md' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("green")}
          className='outline-none px-4 rounded-md' style={{backgroundColor:"green"}}>green</button>
          <button onClick={()=>setColor("black")}
          className='outline-none px-4 rounded-md text-yellow-50' style={{backgroundColor:"black"}}>black</button>
          <button onClick={()=>setColor("orange")}
           className='outline-none px-4 rounded-md' style={{backgroundColor:"orange"}}>orange</button>
          <button onClick={()=>setColor("yellow")}
           className='outline-none px-4 rounded-md' style={{backgroundColor:"yellow"}}>yellow</button>
          <button onClick={()=>setColor("blue")}
           className='outline-none px-4 rounded-md' style={{backgroundColor:"blue"}}>blue</button>
        </div>

      </div>
    </div>
  );
}

export default App;
