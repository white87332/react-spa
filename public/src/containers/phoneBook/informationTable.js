import React from 'react';

const style = {
  table: {
    borderCollapse: 'collapse'
  }
}

export default function informationTable({ userFirstname, userLastname, userPhone })
{
    const renderUSer = () => {
        // const { userFirstname, userLastname, userPhone } = userFirstname.map

        let tr = [];
        for (let i = 0; i < userFirstname.length; i++)
        {
            tr.push((
                <tr key={`${userFirstname[i]}${userLastname[i]}${userPhone[i]}${i}`}>
                    <td>{userFirstname[i]}</td>
                    <td>{userLastname[i]}</td>
                    <td>{userPhone[i]}</td>
                </tr>
            ));
        }

        return tr;
    };

    return (
    <table style={style.table} className='informationTable'>
        <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
        {renderUSer()}
        </thead>
    </table>
  );
}
