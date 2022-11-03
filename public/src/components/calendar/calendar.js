import React, { useState } from 'react';
import { addMonths, subMonths } from 'date-fns';
import Month from './month';
import MonthDays from './monthDays';
import daysInMonth from './daysInMonth';

import './calendar.scss';

export default function Calender(props)
{
    const [ nowDate, setDate ] = useState(new Date());
    const days = daysInMonth(nowDate);

    // const toNextMonth = () => {
    //     setDate(addMonths(nowDate, 1));
    // };
    //
    // const toPrevMonth = () => {
    //     setDate(subMonths(nowDate, 1));
    // };

    return (
        <div className="c-calender">
            <Month
                nowDate={nowDate}
                // toNextMonth={toNextMonth}
                // toPrevMonth={toPrevMonth}
            />
            <MonthDays
                days={days}
            />
        </div>
    );
}
