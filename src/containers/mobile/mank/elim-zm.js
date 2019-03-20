'use strict';
import React, { Component } from 'react';

import mankStyle from '../../../static/style/mank.css';
import weStyle from '../../../static/style/weui.min.css';

class ElimMankZm extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        weStyle.use();
        mankStyle.use();
    }

    render() {
        return <div id="container">
            <img className="top" src={require('../../../static/images/top.jpg')} />
            <div className="m-div"><span>棵棵树小组·关怀链·随机翻牌</span></div>
            <div className="weui-grids" id="draw">
                <a href="javascript:;" id="a1" className="weui-grid">
                    <img className="img" src={require('../../../static/images/mank_bg.png')} />
                    <img className="info" src={require('../../../static/images/hyy.png')} />
                </a>
                <a href="javascript:;" id="a2" className="weui-grid">
                    <img className="img" src={require('../../../static/images/mank_bg.png')} />
                    <img className="info" src={require('../../../static/images/ysy.png')} />
                </a>
                <a href="javascript:;" id="a3" className="weui-grid">
                    <img className="img" src={require('../../../static/images/mank_bg.png')} />
                    <img className="info" src={require('../../../static/images/qjj.png')} />
                </a>
                <a href="javascript:;" id="a4" className="weui-grid">
                    <img className="img" src={require('../../../static/images/mank_bg.png')} />
                    <img className="info" src={require('../../../static/images/hjj.png')} />
                </a>
                <a href="javascript:;" id="a5" className="weui-grid">
                    <img className="img" src={require('../../../static/images/mank_bg.png')} />
                    <img className="info" src={require('../../../static/images/lly.png')} />
                </a>
                <a href="javascript:;" id="a6" className="weui-grid">
                    <img className="img" src={require('../../../static/images/mank_bg.png')} />
                    <img className="info" src={require('../../../static/images/yxc.png')} />
                </a>
                <a href="javascript:;" id="a7" className="weui-grid">
                    <img className="img" src={require('../../../static/images/mank_bg.png')} />
                    <img className="info" src={require('../../../static/images/xjj.png')} />
                </a>
            </div>
            <img className="bottom" src={require('../../../static/images/bottom.jpg')} />
        </div>
    }
}

export default ElimMankZm;