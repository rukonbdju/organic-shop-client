import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/shared/Navbar/Navbar"

const AuthLayout=()=>{
    return(
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
export default AuthLayout