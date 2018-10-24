import React from 'react'
import './Header.css'
import {
    Input
} from 'element-react'
import http from 'utils/http'


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
                <div className="logo">小橙书</div>
                <Input
                    className="search"
                    placeholder="搜索..."
                />
            </div>
        )
    }
}

export default Header
