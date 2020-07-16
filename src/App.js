
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
            <div className = "app" id="app-root">
                <Header loca={this.props.location}></Header>
                <div className = "main">
                    <RouteList/>
                </div>
                <div id="modal-root"></div>
            </div>
        );
    }
}

export default App;