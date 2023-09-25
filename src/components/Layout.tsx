import { Outlet } from "react-router-dom";
import NavBar from "./UI/NavBar/NavBar";

const Layout = () => {
    return (
        <>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
            <footer>
            </footer>
        </>
    )
}

export default Layout;