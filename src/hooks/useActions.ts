import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as SubscribePlanActions  } from '../store/subscribePlan/subscribePlan.slice';

const rootActions = {
    ...SubscribePlanActions,
}

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => 
    bindActionCreators(rootActions, dispatch)
    ,[dispatch])
}