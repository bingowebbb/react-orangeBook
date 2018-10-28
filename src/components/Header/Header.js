import React from 'react'
import './Header.css'
import {
    Input,
    Icon
} from 'element-react'
import cx from 'classnames'

class Header extends React.Component {
 
    state = {
        searchContent: ''
    }

    handleSearch = () => {
        console.log(this.state)
    }

    handleSearchContentChange = value => {
        this.setState({
            searchContent: value
        })
    }

    render() {
        return (
            <div>
                <div className="header">
                    <Icon name="menu" className="menuIcon"/>
                    <div className="logo">种草机</div>
                    <div className="search">
                        <Input
                            className="input"
                            placeholder="搜索..."
                            onChange={this.handleSearchContentChange}
                        />
                        <div 
                            className="searchIcon" 
                            onClick={this.handleSearch}
                        >
                            <Icon
                                name="search"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
