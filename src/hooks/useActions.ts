import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as UserActions } from "../store/userAuth/userAuth.slice";

const rootActions = {
    ...UserActions,
}

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => 
    bindActionCreators(rootActions, dispatch)
    ,[dispatch])
}