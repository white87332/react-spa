import React from 'react';
import { format } from 'date-fns';

export default function Month(props)
{
    const { nowDate } = props;
    return (
        <div className="c-month">
            <div className="arrow">
                {/* <img onClick={() => { props.toPrevMonth(); }} src="/assets/imgs/arrow-left.svg" /> */}
                <img src="/assets/imgs/arrow-left.svg" />
            </div>
            <div data-testid="month">
                {format(nowDate, 'yyyy年MM月')}
            </div>
            <div className="arrow">
                {/* <img onClick={() => { props.toNextMonth(); }} src="/assets/imgs/arrow-right.svg" /> */}
                <img src="/assets/imgs/arrow-right.svg" />
            </div>
        </div>
    );
}
