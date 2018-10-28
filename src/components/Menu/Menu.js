import React from 'react'
import './Menu.css'
import {
    Input,
    Icon
} from 'element-react'

const menus = [
	{
		name: '美食',
		value: 'food'
	},
	{
		name: '运动',
		value: 'sport'
	},
	{
		name: '旅行',
		value: 'traval'
	},
	{
		name: '数码',
		value: 'eletroic'
	},
	{
		name: '影音',
		value: 'movie'
	},
	{
		name: '居家',
		value: 'family'
	},
	{
		name: '读书',
		value: 'book'
	}
]

class Menu extends React.Component {

    render() {
        return (
            <div className="menus">
                {menus.map(item => (
                	<div key={item.value} className="menu">{item.name}</div>
                ))}
            </div>
        )
    }
}

export default Menu
