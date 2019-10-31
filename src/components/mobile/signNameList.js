'use strict';
import React,{ Component } from 'react';
import { List, Toast } from 'antd-mobile';
import {Encrypt, Global, ResponseCode} from "../../server";
import * as Request from "../../server/request";


let SignNameList = ({list, pop}) => {

    /*删除签到人员*/
    function delItem(gatherId) {
        let data = { body : Encrypt({churchId:Global.ElimChurchId, gatherId: gatherId})};
        Request.FetchPost("gather/delete", data).then(json=>{
            if (json.code === ResponseCode.Success) {
                Toast.show("删除成功", 1);
                pop.hide();
            }
            else {
                Toast.show(json.msg, 1);
            }
        });
    }

    return <List renderHeader="当前签到人员—(点击可以删除)">
        {list.map((i, index) => (
            <List.Item key={index} onClick={(gatherId)=>delItem(i.gatherId)} thumb={i.gender === 0 ? require("../../static/images/sister.png") :
                (i.gender === 1 ? require("../../static/images/brother.png") :
                    "https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png")} >{i.userName}</List.Item>
        ))}
    </List>
};

export default SignNameList;