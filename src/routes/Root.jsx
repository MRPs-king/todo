import { Outlet } from "react-router";
import Header from "../components/layouts/Layout";
import Footer from "../components/layouts/footer";

export default function Root() {
    return (
        <>

            <Header />

            <div className=" mx-auto max-w-7xl sm:px-6 lg:px-8" >
                <Outlet />
            </div>
            <Footer />
        </>
    )
}