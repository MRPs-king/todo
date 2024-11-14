import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Checkbox from "./Checkbox"
// import CheckboxF from "./components/Home/CheckboxF"
import { v4 as uuidv4 } from 'uuid';
import Course from './Course'

export default function Todos(){
    

    var[Listico,setListico]=useState(JSON.parse(localStorage.getItem('my-todo')));
    // const Newtodo=(event)=>{
    //     // console.log(event)
    // };
    const Addnewtodo=(event)=>{
        if(event.key=='Enter' && event.target.value!="" ){
          
            setListico([...Listico,
                { id:uuidv4(),
                    title:event.target.value,
                status:false,
                
            }]);
            event.target.value='';
        }
    };
    
   
    const deletTodo =(listico)=>{
        let newlist=Listico.filter((ico)=>{
          return  listico.id !=ico.id;

        })
            
      setListico(newlist)
      
    }
    const dotodo=(listico)=>{
    //   let newtodo=listico;
    //   newtodo.status=! listico.status;
    //   console.log(newtodo)
        let doit=Listico.map((lico)=>{
            if(listico.id==lico.id){
                lico.status=!lico.status
            }
            return lico;
           

        })
        setListico(doit)
    }
    const addEditin =(listico , newttitle)=>{
       let doit=Listico.map((lico)=>{
        if(listico.id==lico.id){
            lico.title=newttitle;

        }
        return lico;
       }
    )
setListico(doit)
}

useEffect(()=>{localStorage.setItem('my-todo',JSON.stringify(Listico));
    
},[Listico]);

// localStorage.getItem(effect);


    return(
        <div className="flex items-center justify-center h-screen">
        <div className="w-full px-4 py-8 mx-auto shadow sm:w-3/5  bg-white">
            <div className="flex items-center mb-6 text-center">
                <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
            </div>
            <div className="relative">
                    <input type="text" placeholder='What do you need to do'
                    className="w-full px-2 py-3 border rounded outline-none border-grey-600 text-lg" 
                    
                    // onChange={Newtodo}
                    onKeyDown={Addnewtodo}/>
                </div>
           
            <ul className="list-reset">
             <Course>
                {Listico.map((Listico)=><Checkbox key={Listico.id} Listico={Listico} addEditin={addEditin} deletTodo={deletTodo} dotodo={dotodo}/>)}
             </Course>
            </ul>
        </div>
    </div>
    )
}