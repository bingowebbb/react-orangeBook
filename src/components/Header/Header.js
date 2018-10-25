import React from 'react'
import './Header.css'
import {
    Input,
    Icon
} from 'element-react'
import { Menu } from 'components'

class Header extends React.Component {

    render() {
        return (
            <div>
                <Menu/>
                <div className="header">
                    <Icon name="menu" className="menuIcon"/>
                    <div className="logo">小橙书</div>
                    <Input
                        className="search"
                        placeholder="搜索..."
                    />
                </div>
            </div>
        )
    }
}

export default Header
