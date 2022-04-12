import React, { useState, useEffect, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useTranslation } from 'react-i18next';
import { increment, decrement } from '../../actions/counter';

function Counter(props)
{
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.numbers);

    // Declare a new state variable, which we'll call "count"
    // const [count, setCount] = useState(0);
    // const { t, i18n } = useTranslation('common');

    // 與 componentDidMount 和 componentDidUpdate 類似:
    useEffect(() => {
        // i18n.changeLanguage('zh-tw');
    });

    const add = () => {
        dispatch(increment());
        // setCount(count + 1);
    };

    const des = () => {
        dispatch(decrement());
        // setCount(count - 1);
    };

    return (
        <div>
            <p>
                YOU
                &nbsp;
                CLICK
                &nbsp;
                {count}
                &nbsp;
                ITEMS
            </p>
            <button onClick={add}>increase</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={des}>decrease</button>
        </div>
    );
}

export default Counter;
