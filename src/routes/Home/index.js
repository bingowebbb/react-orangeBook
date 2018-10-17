import React from 'react'
import { Route, Switch } from 'router'

import Home from './routes/Home'

export default () => (
    <Switch>
        <Route
            path="/home"
            component={Home}
        />    
    </Switch>
)
