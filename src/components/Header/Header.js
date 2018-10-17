import React from 'react'
import './Header.css'
import * as E from 'element-react'


class Header extends React.Component {

	handleTimeChange = value => {
		console.log(value)
	}

	handleCancel = () => {
		console.log(1)
	}

    render() {
        return (
            <div className="header">
            	<E.Button type="success">123</E.Button>
            	<E.TimePicker type="success" onChange={value => this.handleTimeChange(value)}/>
            	<E.TimeRangePicker currentDates={[]}/>
            	<E.Dialog title="132" onCancel={this.handleCancel}/>
            </div>
        )
    }
}

export default Header
