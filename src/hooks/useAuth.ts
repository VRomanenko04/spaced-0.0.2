import { useSelector } from "react-redux/es/hooks/useSelector";
import { IUser } from "../store/userAuth/userAuth.slice";
import { RootState } from "../store/store";

export const useAuth = () => {
    const { id, email, token }: IUser = useSelector((state: RootState) => state.userAuth);

    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}