import React from 'react';

// 类似于mixin
export default function hocMaker(Com, dataMaker) {
    return class HOC extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
            dataMaker().then((list) => {
                this.setState({
                    list
                })
            })
        }
        render() {
            return (
                <Com {...this.props} list={this.state.list || []}></Com>
            )
        }
    }
}
