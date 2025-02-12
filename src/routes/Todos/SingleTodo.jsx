import { useParams } from "react-router"

export default function SingleTodo(){
    const {Listicoid}=useParams()
    return(
        <>
        <h2>singleTodo:{Listicoid}</h2>
        </>
    )
}