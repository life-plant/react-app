import React from 'react';
import {NavLink } from 'react-router-dom'
import routerConfig from 'src/common/router-config'
import './index.scss'


function NavList() {
    const listItems = routerConfig.map((item) => 
        item.showInNav ? (<NavLink key={item.path} exact to={item.path} className="nav-item" activeClassName="nav-active">{item.navName}</NavLink >) : null
    );
    return (
        <div className="nav">{listItems}</div>
    );
}

class Header extends React.Component {
    render() {
        return (<div className="header">
            <div className="title">HEADER</div>
            <NavList/>
        </div>)
    }
    componentDidMount() {
    }
}

export default Header;