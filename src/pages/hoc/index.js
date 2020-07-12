import React from 'react';
import hocMaker from './conponents/hoc-maker';
import HOCContent from './conponents/hoc-content';
import {getList1, getList2} from 'src/service/hoc';


class HocPage extends React.Component {
    render() {
        let List1 = hocMaker(HOCContent, getList1);
        let List2 = hocMaker(HOCContent, getList2);
        return (
            <div>
                <List1></List1>
                <List2></List2>
            </div>
        )
    }
}

export default HocPage;