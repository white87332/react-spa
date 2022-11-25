import React, { useState } from 'react';
import PhoneBookForm from './phoneBookForm';
import InformationTable from './informationTable';

export default function phoneBook(props)
{
    let [userFirstname, setUserFirstname] = useState([]);
    let [userLastname, setUserLastname] = useState([]);
    let [userPhone, setUserPhone] = useState([]);

    const addUser = (inputFirstname, inputLastname, inputPhone) => {
        setUserFirstname([...userFirstname, inputFirstname]);
        setUserLastname([...userFirstname, inputLastname]);
        setUserPhone([...userFirstname, inputPhone]);
    };

    return (
        <div>
            <PhoneBookForm
                propsAddUser={addUser}
            />
            <InformationTable
                userFirstname={userFirstname}
                userLastname={userLastname}
                userPhone={userPhone}
            />
        </div>
    );
}
