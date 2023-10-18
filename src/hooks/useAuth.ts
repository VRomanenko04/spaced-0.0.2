import { useSelector } from "react-redux/es/hooks/useSelector";
import { IUser } from "../store/userAuth/userAuth.slice";
import { RootState } from "../store/store";

export const useAuth = () => {
    const { id, email, token }: IUser = useSelector((state: RootState) => state.userAuth);
    console.log(useSelector((state: RootState) => state.userAuth))
    let isAuth;

    if (email === null || email === undefined) {
        isAuth = false;
    } else {
        isAuth = true;
    }
    console.log(isAuth)

    return {
        isAuth,
        email,
        token,
        id
    }
}