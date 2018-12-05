'use strict';
import React,{ Component } from 'react';
import { List } from 'antd-mobile';

let SignNameList = (list) => {
    return <List renderHeader="当前签到人员">
        {list.list.map((i, index) => (
            <List.Item key={index} thumb={i.Gender === 0 ? require("../../static/images/sister.png") :
                (i.Gender === 1 ? require("../../static/images/brother.png") :
                    "https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png")}>{i.UserName}</List.Item>
        ))}
    </List>
};

export default SignNameList;