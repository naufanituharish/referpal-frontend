import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ByCategory from '../pages/ByCategory';

const Router = () => {
    return (
        <Switch>
            <Route path="/bycategory/:id" component={ByCategory}/>
            <Route path="/" component={Home}/>
        </Switch>
    )
}

export default Router;
