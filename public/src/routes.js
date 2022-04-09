import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
    }
`;

const Wrapper = lazy(() => import('./components/wrapper/wrapper'));
const Layout = lazy(() => import('./components/layout/layout'));
const Expenses = lazy(() => import('./components/expenses/expenses'));
const Invoices = lazy(() => import('./components/invoices/invoices'));

export function createRoutes()
{
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <React.Fragment>
                        <Normalize />
                        <GlobalStyle />
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                <Route path="expenses" element={<Expenses />} />
                                <Route path="invoices" element={<Invoices />} />
                            </Route>
                        </Routes>
                    </React.Fragment>
                </Suspense>
            </BrowserRouter>
        </React.StrictMode>
    );
}
