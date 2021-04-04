import './App.css';
import React, { useState, useEffect } from 'react';
import { catchErrors } from '../utils';
import stylesheet from '../utils/stylesheet.module.css';
import { getUser } from '../spotify';

const UserInfo = () => {
    const [User, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getUser();
            console.log("yoooooooooooo" + data);
            setUserInfo(data);
        };
        catchErrors(fetchData());
    }, []);

    return (
        <>
            <div>
                <h3>User : </h3>
                
            </div>
        </>
    );
}


export default UserInfo;
