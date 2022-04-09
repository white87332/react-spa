import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
    ${Normalize}
    body {
        box-sizing: border-box;
    }
`;

export default function Wrapper({ children })
{
    return (
        <React.Fragment>
            <GlobalStyle />
            {children}
        </React.Fragment>
    );
}
