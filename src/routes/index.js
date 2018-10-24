import React from 'react'
import { Route, Switch, Redirect } from 'router'
import Home from './Home'

export default () => (
	<Switch>
        <Route
        	exact
            path="/home"
            component={Home}
        />
        <Redirect from="/" to="home" />
    </Switch>
)

