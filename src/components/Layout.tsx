import { Outlet } from "react-router-dom";
import NavBar from "./UI/NavBar/NavBar";
import { useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation()
    console.log(location)

    return (
        <>
            {location.pathname !== '/home' ?
                <NavBar/> 
                :
                <></>
            }
            <main>
                <Outlet/>
            </main>
            <footer>
            </footer>
        </>
    )
}

export default Layout;