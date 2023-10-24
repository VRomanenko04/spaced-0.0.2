import NavBar from "../../components/UI/NavBar/NavBar";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useAuth } from '../../hooks/useAuth';
import { useUsername } from "../../hooks/useUsername";

const Courses = () => {
    const dispatch = useDispatch<AppDispatch>();
    const authUser = useAuth();
    const username = useUsername(authUser, dispatch);

    return (
        <>
            <NavBar username={username}/>
            <h1 style={{color: '#000'}}>Courses</h1>
        </>
    )
}

export default Courses;