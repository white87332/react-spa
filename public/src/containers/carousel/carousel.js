import React, { useEffect, useState } from 'react';
import './carousel.scss';

export default function Carousel()
{
    const imgSrc = [
        'https://www.mymypic.net/data/attachment/forum/202204/13/153333rrndz1u6sa1rdwrp.jpeg.thumb.jpg',
        'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0731%2Fa06c8a78j00qx3u2c001tc000r600r6m.jpg&thumbnail=650x2147483647&quality=80&type=jpg',
        'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0221%2F774c55e7j00qouuno000oc000c900gjm.jpg&thumbnail=650x2147483647&quality=80&type=jpg'
    ];

    let [ imgUrl, setImgUrl ] = useState(imgSrc[0]);

    useEffect(() => {
        let count = 0;
        const timeId = setInterval(() => {
            setImgUrl(imgSrc[(count++) % 3]);
        }, 2000);

        return () => clearInterval(timeId);

    }, []);

    return (
        <div className="p-carousel">
            <img src={imgUrl} />
        </div>
    );
}
