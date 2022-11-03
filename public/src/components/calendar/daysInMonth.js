import {
    addMonths, subMonths, getDaysInMonth, getDay,
    endOfMonth, setDate, startOfMonth, getDate,
    getMonth
} from 'date-fns';

export default function daysInMonth(nowDate) {
    let days = [];
    let currentDate = 1;

    let dayOfTheWeek = getDay(startOfMonth(nowDate)); //拿到這個月開頭是星期幾
    let allDays = getDaysInMonth(nowDate); // 當月幾天
    let weekNums = Math.ceil((allDays + dayOfTheWeek) / 7); // 當月幾週

    let preMonth = subMonths(nowDate, 1); // 上個月的資訊
    let preDate = endOfMonth(preMonth).getDate() - dayOfTheWeek + 1;

    let nextMonth = addMonths(nowDate, 1); // 下個月的資訊
    let nextDate = 1;

    let todayMonth = getMonth(new Date()); //實際上的該月
    let nowDateMonth = getMonth(nowDate); //要查詢的月份

    // day: 星期幾
    // date: 幾號
    for (let weekNum = 0; weekNum < weekNums; weekNum++)
    {
        for (let day = 0; day < 7; day++)
        {
            if (weekNum === 0 && day < dayOfTheWeek) // 上個月
            {
                days.push({
                    date: preDate,
                    day: getDay(setDate(preMonth, preDate)),
                    isOtherMonth: true,
                    isToday: false,
                    key: `preMonth${preDate}`
                });
                preDate++;
            }
            else if (currentDate > allDays) // 下個月
            {
                days.push({
                    date: nextDate,
                    day: getDay(setDate(nextMonth, nextDate)),
                    isOtherMonth: true,
                    isToday: false,
                    key: `nextMonth${nextDate}`,
                });
                nextDate++;
            }
            else // 要查的當月
            {
                days.push({
                    date: currentDate,
                    day: getDay(setDate(nowDate, currentDate)),
                    isOtherMonth: todayMonth === nowDateMonth ? false : true,
                    isToday: getDate(nowDate) === currentDate && todayMonth === nowDateMonth ? true : false,
                    key: `thisMonth${currentDate}`,
                });
                currentDate++;
            }
        }
    }

    return days;
};
