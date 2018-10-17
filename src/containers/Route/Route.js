import React from 'react'
import PropTypes from 'prop-types'
import StaticRoute from './StaticRoute'
import AsyncRoute from './AsyncRoute'

class Route extends React.Component {
  static propTypes = {
    async: PropTypes.bool
  }

  static propTypes = {
    title: PropTypes.string
  }

  render() {
    const Route = this.props.async ? AsyncRoute : StaticRoute
    return <Route {...this.props} />
  }
}

export default Route
