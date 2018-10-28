import React from 'react'
import { Header, Banner, Menu } from 'components'
import './Home.css'

class Home extends React.Component {

  render() {
    return (
      <div className="container">
        <Header
        	className="header"
        />
        <Menu/>
      </div>
    )
  }
}

export default Home
