import { useEffect, useReducer, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Checkbox from "./Checkbox"
// import CheckboxF from "./components/Home/CheckboxF"
import { v4 as uuidv4 } from 'uuid';
import Course from './Course'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Reducer1 from '../../reducer/Reducer1';
import { TodoContext } from '../../context/TodoContext';
export default function Todos() {

    // var [Listico, setListico] = useState([]);

    const [Listico, listicoDispatcher] = useReducer(Reducer1, [])
    // const Newtodo=(event)=>{
    //     // console.log(event)
    // };
    // JSON.parse(localStorage.getItem('my-todo'))??[]

    const Addnewtodo = async (event) => {
        var todoTitle = event.target.value
        if (event.key == "Enter" && event.target.value) {
            var newtodo = {
                title: todoTitle,
                status: false,

            }
            try {
                let res = await fetch("https://67458246512ddbd807f84f68.mockapi.io/todos", {
                    method: "post",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(newtodo)
                })

                res = await res.json()

                listicoDispatcher({
                    type: "add",
                    id: res?.id,
                    title: res?.title,

                })
                event.target.value = '';
                toast.success("todo created");

            } catch (error) {
                //catch error
                console.log(error)
            }
        };
    }

    

    // if(event.key=='Enter' && event.target.value!="" ){

    //     // setListico([...Listico,
    //     //     { id:uuidv4(),
    //     //         title:event.target.value,
    //     //     status:false,

    //     // }]);
    //     event.target.value='';
    // }
    //   try {
    //     let res =  fetch("https://67458246512ddbd807f84f68.mockapi.io/todos",{
    //         method:"post",
    //         headers: {'content-type':'application/json'},
    //         body:JSON.stringify(newtodo)
    //     })

    //     if((await res).ok){
    //         console.log(res)
    //       }
    //   } catch (error) {
    //     //catch error
    //     console.log(error)
    //   }
    // };


    const deletTodo = (listico) => {
        let newlist = Listico.filter((ico) => {
            return listico.id != ico.id;

        })

        setListico(newlist)

    }

    
    const dotodo = (listico) => {
        //   let newtodo=listico;
        //   newtodo.status=! listico.status;
        //   console.log(newtodo)
        let doit = Listico.map((lico) => {
            if (listico.id == lico.id) {
                lico.status = !lico.status
            }
            return lico;


        })
        setListico(doit)
    }

    

    const addEditin = (listico, newttitle) => {
        let doit = Listico.map((lico) => {
            if (listico.id == lico.id) {
                lico.title = newttitle;

            }
            return lico;
        }
        )
        setListico(doit)
    }

    // useEffect(()=>{localStorage.setItem('my-todo',JSON.stringify(Listico));

    // },[Listico]);

    // localStorage.getItem(effect);
    const useapiform = async () => {
        try {
            let res = await fetch('https://67458246512ddbd807f84f68.mockapi.io/todos');
            let tto = await res.json();

            if (res.ok) {
                listicoDispatcher({
                    type: 'initial-Listico',
                    Listico: tto
                })
            }
        } catch (error) {
            //get error
            console.log(error)
        }
    }
    useEffect(() => {
        useapiform();

        //     setListico(JSON.parse(localStorage.getItem("todos-list"))??[])
        // },[]
    }, [])


    return (

        <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow sm:w-3/5  bg-white">
                <div className="flex items-center mb-6 text-center">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
                </div>
                <div className="relative">
                    <input type="text" placeholder='What do you need to do'
                        className="w-full px-2 py-3 border rounded outline-none border-grey-600 text-lg"

                        // onChange={Newtodo}
                        onKeyDown={Addnewtodo} />
                </div>

                <ul className="list-reset">
                    <TodoContext.Provider value={{ listico:Listico,
                       listicoDispatcher:listicoDispatcher 
                    }}>
                        <Course >
                            {Listico.map((Listico) => <Checkbox Listico={Listico}  key={Listico.id} />)}
                        </Course>
                        </TodoContext.Provider >
                </ul>
            </div>
        </div>
       
    )
}