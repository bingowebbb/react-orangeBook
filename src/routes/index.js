import React from 'react'
import { Route, Switch } from 'router'
import Home from './Home'

export default () => (
	<Switch>
        <Route
        	exact
            path="/home"
            component={Home}
        />
    </Switch>
)

