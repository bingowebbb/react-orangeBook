import React from 'react'
import { Route, Switch, Redirect } from 'router'

import Home from './routes/Home'

export default () => (
    <Switch>
        <Route
            path="/home"
            component={Home}
        />
        <Redirect from="/" to="home" />
    </Switch>
)
