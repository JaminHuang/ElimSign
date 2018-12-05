'use strict';
import React,{ Component } from 'react';

import antdStyle from 'antd-mobile/dist/antd-mobile.min.css';
import indexStyle from '../static/style/index.css';

class Container extends Component {

    componentWillMount() {
        antdStyle.use();
        indexStyle.use();
    }

    render() {
        const { children,routes } = this.props;
        return (
            <div>{ children }</div>
        )
    }
}

export default Container;