import React from 'react';
import Attention from 'src/components/attention';
import PortalMaker from './components/protal-maker';
import './index.scss';

class Portal extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
            isOpen2: false,
        }
        // 不绑的话就要在使用时用箭头函数
        this.openHandle = this.openHandle.bind(this);
        this.closeHandle = this.closeHandle.bind(this);
        this.portalClick = this.portalClick.bind(this);
        this.openHandle2 = this.openHandle2.bind(this);
        this.closeHandle2 = this.closeHandle2.bind(this);
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
    openHandle2() {
        this.setState({
            isOpen2: true
        }) 
    }
    closeHandle2() {
        this.setState({
            isOpen2: false
        })
    }
    render() {
        return (
            <div className='protal' onClick={this.portalClick}>
                <h2>protal</h2>
                <div className="btn" onClick={this.openHandle}>显示portal弹窗</div>
                <PortalMaker>
                    <Attention isOpen={this.state.isOpen} width="560px" closeHandle={this.closeHandle}>
                        <div className="attention-inside-content">
                            <div className="title">title</div>
                            <div className="msg">如果你自己配置 Webpack，你可能要阅读下 Webpack 关于代码分割的指南。你的 Webpack 配置应该类似于此。</div>
                        </div>
                    </Attention>
                </PortalMaker>
                <div className="btn" onClick={this.openHandle2}>显示正常弹窗</div>
                <Attention isOpen={this.state.isOpen2} closeHandle={this.closeHandle2}>
                    <div className="attention-inside-content">
                        <div className="title">title</div>
                        <div className="msg">如果你自己配置 Webpack，你可能要阅读下 Webpack 关于代码分割的指南。你的 Webpack 配置应该类似于此。</div>
                    </div>
                </Attention>
            </div>
        )
    }
}

export default Portal;
