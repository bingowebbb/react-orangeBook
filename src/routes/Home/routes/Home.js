import React from 'react'
import { Header, Banner } from 'components'
import './Home.css'

class Home extends React.Component {

  render() {
    return (
      <div className="container">
        <Header
        	className="header"
        />
        <Banner/>
      </div>
    )
  }
}

export default Home
