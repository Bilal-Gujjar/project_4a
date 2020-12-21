//import logo from './logo.svg';
import './App.css';
//import { useEffect, useRef, useState } from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';

function App() {
  const {ref,playState,getAnimation} = useWebAnimations({
    keyframes:[
      {transform: "translate(0px)",background:"pink"},
      {transform: "translate(500px)",background:"yellow"}
    ],
    timing:{
      duration: 3000,
      iterations:4,
      direction:"alternate",
      easing:"ease-in-out",
    },
    onUpdate:({playState,animate,animation}) => {
      console.log("Play State",playState);
      console.log("animate",animate);
      console.log("animation",animation);
    }
    
  });
  return (
    <div>
      <div>Animation State {playState}</div>
      <div ref={ref} style= {{background:'red',width:"100px",height:"250px"}}>
      Hello World
      </div>
      <button onClick={()=>{
        getAnimation().play();
      }}>Play</button>
      
      <button onClick={()=>{
        getAnimation().pause();
      }}>Pause</button>
      
     </div>
  );
}

export default App;



/* const inputE1 =useRef(null);
  const [val,setVal] = useState("");
  useEffect(()=>{
    inputE1.current.focus();

  },[]); */