// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router';
import AppRouter from './routes/index.jsx'
import Footer from './components/layouts/footer.jsx';
createRoot(document.getElementById('root')).render(
    <>
        <RouterProvider router={AppRouter} />
        <App />
        <ToastContainer />
        
    </>
)
