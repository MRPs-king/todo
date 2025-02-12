
import Footer from "./footer"
import Header from "./Layout"

export default function Applayout({ children }) {
    return (
        <div>
       
            <Header />
           
            <div className=" mx-auto max-w-7xl sm:px-6 lg:px-8" >
                {children}
            </div>
        <Footer />
        </div>
    )
}