import React from "react";


export default class HOCContent extends React.Component {
    render() {
        console.log(this.props.list);
        return (
            <div>
                <h2>{this.props.title}</h2>
                <ul className="list">
                    {
                        this.props.list.map((item, index) => <li className="item" key={index}>{item.text}</li>)
                    }
                </ul>
            </div>
        )
    }
}