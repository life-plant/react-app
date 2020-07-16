import React from 'react';
import Attention from 'src/components/attention';
import PortalMaker from './components/protal-maker';
import './index.scss';

class Portal extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
        }
        // 不绑的话就要在使用时用箭头函数
        this.openHandle = this.openHandle.bind(this);
        this.closeHandle = this.closeHandle.bind(this);
        this.portalClick = this.portalClick.bind(this);
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
    portalClick(e) {
        // PortalMaker 的内容点击也会冒泡到React元素上层
        console.log(e.target);
    }
    render() {
        return (
            <div className='protal' onClick={this.portalClick}>
                <h2>protal</h2>
                <div onClick={this.openHandle}>按钮</div>
                <PortalMaker>
                    <Attention isOpen={this.state.isOpen} width="560px" closeHandle={this.closeHandle}>
                        <div className="attention-inside-content">
                            <div className="title">title</div>
                            <div className="msg">如果你自己配置 Webpack，你可能要阅读下 Webpack 关于代码分割的指南。你的 Webpack 配置应该类似于此。</div>
                        </div>
                    </Attention>
                </PortalMaker>
            </div>
        )
    }
}

export default Portal;
