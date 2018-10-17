import React from 'react';
import Router from 'router'
import Routes from './routes'
import Layouts from './layouts'
import 'element-theme-default';

class App extends React.Component {
  render() {
    return (
    	<Router>
        	<Layouts>
    		    <Routes/>
        	</Layouts>
    	</Router>
    )
  }
}

export default App;
