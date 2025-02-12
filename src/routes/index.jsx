
import { createBrowserRouter } from 'react-router';
import Home from './Homepage';
import About from './Aboutpage';
import Todo from './Todos/Todopage';
import Root from './root';
import SingleTodo from './Todos/singleTodo';

const router = createBrowserRouter([
    {
        path: "/",
        element:<Root /> ,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/todo",
                element: <Todo />
            },
            {
                path: "/todo/:Listicoid",
                element:<SingleTodo />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    },

])
export default router