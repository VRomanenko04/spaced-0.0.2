import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as SubscribePlanActions  } from '../store/subscribePlan/subscribePlan.slice';
import { actions as UserActions } from "../store/userAuth/userAuth.slice";

const rootActions = {
    ...SubscribePlanActions,
    ...UserActions,
}

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => 
    bindActionCreators(rootActions, dispatch)
    ,[dispatch])
}