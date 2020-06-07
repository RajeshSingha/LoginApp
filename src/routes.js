import React from 'react';
import SignIn from './SignIn';
import LandingPage from './LandingPage';

const routes = [
    { name: "SignIn", path: "/", exact: true, main: () => <SignIn /> },
    { name: "LandingPage", path: "/landing", exact: true, main: () => <LandingPage /> }
];

export default routes;