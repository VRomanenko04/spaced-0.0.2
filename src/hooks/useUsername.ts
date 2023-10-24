import { useState, useEffect } from 'react';
import { AppDispatch } from '../store/store';
import { IUser } from '../store/userAuth/userAuth.slice';
import { loadUserData } from '../store/userName/userName.slice';

export const useUsername = (authUser: IUser, dispatch: AppDispatch) => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const uid = authUser.id;
        if (uid !== null) {
            dispatch(loadUserData(uid))
                .then((response) => {
                    const userData = response.payload;
                    if (userData && userData.username) {
                        const fetchedUserName = userData.username;
                        setUsername(fetchedUserName);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [authUser, dispatch]);

    return username;
}