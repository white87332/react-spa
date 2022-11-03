import React from 'react';
import { prettyDOM, render, fireEvent, screen } from '@testing-library/react';
import { format } from 'date-fns';

import Calendar from './calendar';

describe('check canlendar', () => {
    // 呈現當月
    test('today month', () => {
        render(
          <Calendar />
        );

        const month = screen.getByTestId("month");
        expect(month.textContent).toBe(format(new Date(), 'yyyy年MM月'));
    });

    // 當月點擊
    test('day isothermonth false', () => {
        const { container } = render(<Calendar />)
        const day = container.querySelector('[data-isothermonth="false"]');
        // console.log(prettyDOM(day));
        fireEvent.click(day);
        expect(day).toHaveAttribute('data-active', "true");
    });

    // 不是當月點擊
    test('day isothermonth true', () => {
        const { container } = render(<Calendar />)
        const day = container.querySelector('[data-isothermonth="true"]');
        fireEvent.click(day);
        expect(day).toHaveAttribute('data-active', "false");
    });

});
