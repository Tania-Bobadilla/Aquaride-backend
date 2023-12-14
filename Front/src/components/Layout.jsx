import { Outlet } from "react-router-dom"
import NavBar from "../routes/Navigation/NavBar"
import Footer from "../routes/Navigation/Footer"

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout