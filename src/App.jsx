/* eslint-disable react/jsx-key */

import { useRef, useState } from "react"
import Todos from "./components/Home/Todos"
import {UserContext} from "./context/UserContext"
function App() {
let user={name:'mahdi'}
  // const [count, setCount] = useState(0)
  // const [time ,settime]=useState(null)
  // const [now ,setnow]=useState(null)
  //  const st=useRef(null)

  // const start=()=>{
  //   settime(Date.now());
  //   setnow(Date.now());
  //   st.current=setInterval(() => {
  //     setnow(Date.now());

  //   },10);
  // }
  // const stop=()=>{
  //   clearInterval(st.current);
  //   st.current=null
  // }

  // let second=0
  // if(time!=null && now != null){
  //    second=(now-time)/1000
  // }

  return (

    // <div className="bg-white h-screen  ">
    <>
    <UserContext.Provider value={user}>
  
    </UserContext.Provider>
    </>
    //    <div className="items-center flex font-bold justify-center mt-44 ">
    //     Cornometer:{second}
    //    </div>

    //    <div className="items-center flex font-bold justify-center mt-4 ">
    //     <button className="mr-4 font-bold bg-lime-400 border border-gray-600 rounded-sm p-2" onClick={start} >Start</button>       
    //     <button className="font-bold bg-red-600 border border-gray-600 rounded-sm p-2"onClick={stop}>Stop</button>
    //    </div>
    // </div>

  )
}

export default App
