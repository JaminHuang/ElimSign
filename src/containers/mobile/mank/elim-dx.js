'use strict';
import React, { Component } from 'react';

import mankStyle from '../../../static/style/mank.css';
import weStyle from '../../../static/style/weui.min.css';
class ElimMankDx extends Component {
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
                    <img className="img" src={require('../../../static/images/mank_bg.png')} /><img className="info" src={require('../../../static/images/dyh.png')} />
                </a>
                <a href="javascript:;" id="a2" className="weui-grid">
                    <img className="img" src={require('../../../static/images/mank_bg.png')} /><img className="info" src={require('../../../static/images/hsl.png')} />
                </a>
                <a href="javascript:;" id="a3" className="weui-grid">
                    <img className="img" src={require('../../../static/images/mank_bg.png')} /><img className="info" src={require('../../../static/images/hyl.png')} />
                </a>
                <a href="javascript:;" id="a4" className="weui-grid">
                    <img className="img" src={require('../../../static/images/mank_bg.png')} /><img className="info" src={require('../../../static/images/hyr.png')} />
                </a>
                <a href="javascript:;" id="a5" className="weui-grid">
                    <img className="img" src={require('../../../static/images/mank_bg.png')} /><img className="info" src={require('../../../static/images/hzm.png')} />
                </a>
                <a href="javascript:;" id="a6" className="weui-grid">
                    <img className="img" src={require('../../../static/images/mank_bg.png')} /><img className="info" src={require('../../../static/images/zgyk.png')} />
                </a>
                <a href="javascript:;" id="a7" className="weui-grid">
                    <img className="img" src={require('../../../static/images/mank_bg.png')} /><img className="info" src={require('../../../static/images/xwk.png')} />
                </a>
                <a href="javascript:;" id="a8" className="weui-grid">
                    <img className="img" src={require('../../../static/images/mank_bg.png')} /><img className="info" src={require('../../../static/images/zkt.png')} />
                </a>
                <a href="javascript:;" id="a9" className="weui-grid">
                    <img className="img" src={require('../../../static/images/mank_bg.png')} /><img className="info" src={require('../../../static/images/ysq.png')} />
                </a>
            </div>
            <img className="bottom" src={require('../../../static/images/bottom.jpg')} />
        </div>
    }
}

export default ElimMankDx;