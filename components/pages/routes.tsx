import React, { lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import homePage from './homePage';
import signin from './signIn';

export default () => {
                                    /* webpackChunkName: "modulePublic"  */
 

  return <Router>
            <Switch>
                
            </Switch>
        </Router>
}
/* import React, { lazy } from 'reactn';
import { Route, Switch } from 'react-router';

export default () => {
  const Public      =    lazy(() => import(/* webpackChunkName: "modulePublic"  */ './public'  ));

  return <Switch>
  <Route path="/"        component={Public}  />
</Switch>
}
*/