// import { list } from "postcss";
import { useState, useEffect, useCallback } from "react";
import Deleteicon from "../Layout/Deleteicon";
import Editicon from "../Layout/Editicon";
import { list } from "postcss";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { TodoContext } from "../../context/TodoContext";
import { toast } from "react-toastify";
import { Link } from "react-router";
export default function Checkbox({ Listico }) {
    const [editmode, seteditmode] = useState(false)
    const user = useContext(UserContext)
    const {listico} = useContext(TodoContext)
    const{listicoDispatcher}=useContext(TodoContext)
    
    const setEditTitle = (event) => {
        if (event.key == "Enter") {
            addEditinAPI(Listico, event.target.value);
            seteditmode(false);
        }
    }
    //     useEffect(()=>{console.log(`the component created!=>${Listico?.title}`);

    //     return()=>{
    //         // console.log(`the component deleted!=>${Listico?.title}`)  
    //     }
    // },)


    const deletTodoapi = async (listico) => {
        try {
            let res = await fetch(`https://67458246512ddbd807f84f68.mockapi.io/todos/${listico?.id}`, {
                method: "DELETE",

            })
            if (res.ok) {
                listicoDispatcher({
                    type: 'delete',
                    id: listico.id
                })

                toast.success("todo deleted")

            } else {
                toast.error("Server Dose Not Response")
            }

        } catch (error) {
            //get error
            console.log(error)
        }
    }
    const dotodoAPI = async (listico) => {
        try {
            let res = await fetch(`https://67458246512ddbd807f84f68.mockapi.io/todos/${listico?.id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    status: !listico.status
                })

            })
            if (res.ok) {
                listicoDispatcher({
                    type: 'doit',
                    id: listico.id,

                })
            }

        } catch (error) {
            //get error
            console.log('error')
        }

    }
    const addEditinAPI = async (listico, newttitle) => {
        let res = await fetch(`https://67458246512ddbd807f84f68.mockapi.io/todos/${listico?.id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                title: newttitle
            })

        })
        if (res.ok) {
            listicoDispatcher({
                type: 'edit',
                id: listico.id,
                newtot: newttitle
            })
        }
    }
    return (
        <div>
            <li className="relative flex items-center justify-between px-2 py-6 border-b">



                {
                    editmode
                        ? (
                            <div className="w-full flex items-center">
                                <button type="button" className="absolute right-0 inline-flex items-center w-1/4   ">
                                    <Deleteicon onClick={() => seteditmode(false)} />
                                </button>
                                <input type="text" onKeyDown={setEditTitle} defaultValue={Listico?.title} className="rounded-sm border-slate-800 inline-flex
                             w-3/4 mr-0.5 mb-1 " ></input>

                            </div>
                        )
                        : (
                            <div>
                                <div>
                                    <input onChange={() => dotodoAPI(Listico)} checked={Listico?.status} type="checkbox" className="shadow-md" />
                                   <Link to={`/todo/${Listico.id}`}>
                                   <p className={`inline-block mt-1 ml-2 text-gray-600 text-lg ${Listico?.status ? "line-through" : ""}`} >{Listico?.title}</p>
                                   </Link >
                                </div>
                                <button type="button" className="absolute right-0 flex items-center space-x-1 ">
                                    <Editicon onClick={() => seteditmode(true)} />
                                    <Deleteicon onClick={() => { deletTodoapi(Listico) }} />
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