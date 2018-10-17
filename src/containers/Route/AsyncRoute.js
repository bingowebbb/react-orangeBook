import React from 'react'
import { Route } from 'react-router-dom'

class AsyncRoute extends React.Component {
  state = {
    component: null
  }

  componentWillMount() {
    this.reload()
  }

  componentDidMount() {
    this.mount = true
  }

  componentWillUnmount() {
    this.mount = false
  }

  componentWillReceiveProps(nextProps) {
    this.reload(nextProps)
  }

  reload = (props = this.props) => {
    const loadComponent = props.component
    loadComponent().then(module => {
      if (this.mount) {
        this.setState({ component: module.default ? module.default : module })
      }
    })
  }

  render() {
    return <Route {...this.props} component={this.state.component} />
  }
}

export default AsyncRoute
