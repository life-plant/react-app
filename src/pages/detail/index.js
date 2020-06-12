import React from 'react';


class Detail extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    render() {
        return (
            <div className="index">
                Detail{this.props.match.params.id}
            </div>
        )
    }
}
export default Detail;