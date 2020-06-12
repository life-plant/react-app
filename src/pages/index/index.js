
import React from 'react';
import Attention from 'src/components/attention';
import './index.scss';

class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
        }
        // 不绑的话就要在使用时用箭头函数
        this.openHandle = this.openHandle.bind(this);
        this.closeHandle = this.closeHandle.bind(this);
    }
    openHandle() {
        this.setState({
            isOpen: true
        }) 
    }
    closeHandle() {
        this.setState({
            isOpen: false
        })
    }
    render() {
        return ( 
            <div className = "index" >
                index 
                <div onClick={this.openHandle}>按钮</div>
                <Attention isOpen={this.state.isOpen}>
                    <div className="attention-inside-content">
                        <div className="title">title</div>
                        <div className="msg">如果你自己配置 Webpack，你可能要阅读下 Webpack 关于代码分割的指南。你的 Webpack 配置应该类似于此。</div>
                        <div className="attention-btn" onClick={this.closeHandle}>确定</div>
                    </div>
                </Attention>
            </div>
        );
    }
    componentDidMount() {
    }
}

export default Index;