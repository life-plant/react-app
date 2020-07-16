
import React from 'react';
import {NavLink } from 'react-router-dom'
import routerConfig from 'src/common/router-config'
import './index.scss';

function NavList() {
    const listItems = routerConfig.map((item) => 
        (<NavLink key={item.path} exact to={item.path} className="nav-item" activeClassName="nav-active">{item.navName}</NavLink >)
    );
    return (
        <div className="index-nav">{listItems}</div>
    );
}

class Index extends React.Component {
    render() {
        return ( 
            <div className = "index" >
                <NavList/>
            </div>
        );
    }
    componentDidMount() {
    }
}

export default Index;