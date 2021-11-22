import React, { lazy, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './homePage';
import SignIn from './signIn';
import NotFound from './404'

export default () => {
                                    /* webpackChunkName: "modulePublic"  */
 

  return <Router>
            <Routes>
                <Route exact path="*" element={ <NotFound /> } />
                <Route exact path="/home" element= { <HomePage /> } />
                
                <Route exact path="/" element={ <SignIn /> } />
            </Routes>
        </Router>
}
