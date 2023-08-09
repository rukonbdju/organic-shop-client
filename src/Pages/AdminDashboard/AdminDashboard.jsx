import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

const AdminDashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
            <Footer></Footer>
        </div>
    )
}

export default AdminDashboard