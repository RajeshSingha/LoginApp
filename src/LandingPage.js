import React, { Component, useState, useEffect, useContext } from 'react'
import { StatusContext } from './App'

export default function LandingPage() {
    const Status = useContext(StatusContext);
    const setStatus = Status.setStatus;
    const status = Status.status;

    return (
        <div>
            {status && <div> Welcome to the web application! You have successfully logged in!</div> }
            {!status && <div> Sorry, you are not a registered user.</div> }
        </div>    
    );
}