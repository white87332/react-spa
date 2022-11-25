import React, { useState, useEffect } from 'react';
// import { data } from '../../data';
import './index.scss';

export default function Index(props)
{
    // useEffect(() => {
    //     const divs = data.map((item) => {
    //         return (
    //             <div className="item">
    //                 <div className="bg" />
    //                 <div>123</div>
    //             </div>
    //         );
    //     });
    // }, []);
    //


    // const renderData = () => {
    //
    //     return data.map((item) => {
    //         return (
    //             <div className="item" key={item.post_id} onClick=>
    //                 <div className="bg" style={{ backgroundImage: `url('${item.display_resources.cover_url}')` }}/>
    //                 <div className="des">{item.desc}</div>
    //             </div>
    //         );
    //     });;
    // }

    return (
        <div className="index">
            {/* {renderData()} */}
        </div>
    );
}
