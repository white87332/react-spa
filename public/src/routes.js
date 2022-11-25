import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
    }
`;

const Layout = lazy(() => import('./components/layout/layout'));
const Index = lazy(() => import('./containers/index/index'));
const Counter = lazy(() => import('./containers/counter/counter'));
const PhoneBook = lazy(() => import('./containers/phoneBook/phoneBook'));
const Carousel = lazy(() => import('./containers/carousel/carousel'));

export function createRoutes(store)
{
    return (
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <Suspense fallback={<div>Loading...</div>}>
                        <>
                            <Normalize />
                            <GlobalStyle />
                            <Routes>
                                <Route path="/" element={<Layout />}>
                                    <Route path="index" element={<Index />} />
                                    <Route path="counter" element={<Counter />} />
                                    <Route path="phoneBook" element={<PhoneBook />} />
                                    <Route path="carousel" element={<Carousel />} />
                                </Route>
                            </Routes>
                        </>
                    </Suspense>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    );
}
