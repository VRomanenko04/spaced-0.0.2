import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as UserActions } from "../store/userAuth/userAuth.slice";
import { actions as DataActions } from "../store/userData/userData.slice";

const rootActions = {
    ...UserActions,
    ...DataActions,
}

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => 
    bindActionCreators(rootActions, dispatch)
    ,[dispatch])
}