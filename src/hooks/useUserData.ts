import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useUserData = () => {
    const userData = useSelector((state: RootState) => ({
        email: state.userData.email,
        language: state.userData.language,
        selectedPlan: state.userData.selectedPlan,
        username: state.userData.username,
    }));

    return userData;
}