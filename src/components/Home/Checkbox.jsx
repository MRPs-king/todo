// import { list } from "postcss";
import { useState , useEffect } from "react";
import Deleteicon from "../Layout/Deleteicon";
import Editicon from "../Layout/Editicon";
import { list } from "postcss";

export default function Checkbox({Listico ,deletTodo , dotodo , addEditin }) {
    const[editmode,seteditmode]=useState(false)
    const setEditTitle = (event)=>{
        if(event.key=="Enter"){
          addEditin(Listico , event.target.value);
          seteditmode(false);
        }
    }
    useEffect(()=>{console.log(`the component created!=>${Listico?.title}`);
   
    return()=>{
        console.log(`the component deleted!=>${Listico?.title}`)  
    }
},)
    return(
        <div>
            <li className="relative flex items-center justify-between px-2 py-6 border-b">
                   
           
                        
                        {
                            editmode
                            ?(
                                <div className="w-full flex items-center">
                                <button type="button" className="absolute right-0 inline-flex items-center w-1/4   ">
                               <Deleteicon onClick={()=>seteditmode(false)} /> 
                           </button>
                           <input type="text" onKeyDown={setEditTitle} defaultValue={Listico?.title} className="rounded-sm border-slate-800 inline-flex
                             w-3/4 mr-0.5 mb-1 " ></input>
                  
                             </div>
                            )
                            :(
                                            <div>
                                                 <div>
                        <input onChange={()=>dotodo(Listico)}  checked={Listico?.status}  type="checkbox" className="shadow-md" />
                        <p  className={`inline-block mt-1 ml-2 text-gray-600 text-lg ${Listico?.status ?"line-through" : ""}`} >{Listico?.title}</p>
                    </div>
                    <button type="button" className="absolute right-0 flex items-center space-x-1 ">
                      <Editicon onClick={()=>seteditmode(true)} />
                        <Deleteicon onClick={()=>{deletTodo(Listico)}} /> 
                    </button>
                                            </div>
                            )
                        }
                       
                    </li>
                  
                  
                    {/* <div>
             <li className="relative flex items-center justify-between px-2 py-6 border-b">
                    <div>
                        <input type="checkbox" checked className="" />
                        <p  className="inline-block mt-1 ml-2 text-gray-600 line-through">Tailwind CSS To DO App List 2</p>
                    </div>
                    <button type="button" className="absolute right-0 flex items-center  space-x-1">
                       
                    </button>
                    </li>
        </div> */}
     
    
                   
        </div>
    )
    // Tailwind CSS To DO App List 1
    
}
// checked={Listico?.status}