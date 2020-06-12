
import React, {Suspense} from 'react';
import {Route} from 'react-router-dom'
import routerConfig from 'src/common/router-config'
import Header from 'src/components/header'

function RouteList() {
    const listItems = routerConfig.map((item) =>
        <Route key={item.path} path={item.path} exact component={item.component}/>
    );
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {listItems}
        </Suspense>
    );
}
class App extends React.Component {
    render() {
        return ( 
            <div className = "app">
                <Header loca={this.props.location}></Header>
                <RouteList/>
            </div>
        );
    }
}

export default App;