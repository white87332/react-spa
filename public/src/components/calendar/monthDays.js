import React, { useState } from 'react';

export default function MonthDays({ days })
{
    const [ startDate, setStartDate ] = useState(null);
    const [ endDate, setEndDate ] = useState(null);

    const selectedDate = (item) => {
        const { date, isOtherMonth } = item;
        if (isOtherMonth)
        {
            return false;
        }

        if (startDate === null || date < startDate)
        {
            setStartDate(date);
        }

        if (date >= startDate)
        {
            setEndDate(date);
        }

        if (date < startDate)
        {
            setStartDate(date);
        }
    }

    const renderRows = () => {
        return days.map((item) => {
            const { date, isToday, isOtherMonth, key, day } = item;
            const isStartDate = (startDate === date && !isOtherMonth) ? true : false;
            const isEndDate = (endDate === date && !isOtherMonth) ? true : false;
            const isOptionDate = (date > startDate && date < endDate && !isOtherMonth) ? true : false;

            return (
                <div
                    onClick={() => selectedDate(item)}
                    data-isothermonth={isOtherMonth}
                    data-istoday={isToday}
                    data-active={isStartDate || isEndDate || isOptionDate}
                    key={key}
                >
                        {item.date}日
                </div>
            );
        })
    };

    return (
        <div className="c-monthDays">
            {renderRows()}
        </div>
    );
}
