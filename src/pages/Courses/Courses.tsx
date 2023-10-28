import NavBar from "../../components/UI/NavBar/NavBar";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";


const Courses = () => {
    const username = useSelector((state: RootState) => state.userData.username);

    return (
        <>
            <NavBar username={username ? username : ''}/>
            <h1 style={{color: '#000'}}>Courses</h1>
        </>
    )
}

export default Courses;