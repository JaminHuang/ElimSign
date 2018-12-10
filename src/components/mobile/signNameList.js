'use strict';
import React,{ Component } from 'react';
import { List, Toast } from 'antd-mobile';
import {Encrypt, Global, ResponseCode} from "../../server";
import * as Request from "../../server/request";


let SignNameList = ({list, pop}) => {

    /*删除签到人员*/
    function delItem(gatherId) {
        let data = { body : Encrypt({churchId:Global.ElimChurchId, gatherId: gatherId})};
        Request.FetchPost("www/gather/delete", data).then(json=>{
            if (json.Code === ResponseCode.Success) {
                Toast.show("删除成功", 1);
                pop.hide();
            }
            else {
                Toast.show(json.Msg, 1);
            }
        });
    }

    return <List renderHeader="当前签到人员—(点击可以删除)">
        {list.map((i, index) => (
            <List.Item key={index} onClick={(gatherId)=>delItem(i.GatherId)} thumb={i.Gender === 0 ? require("../../static/images/sister.png") :
                (i.Gender === 1 ? require("../../static/images/brother.png") :
                    "https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png")} >{i.UserName}</List.Item>
        ))}
    </List>
};

export default SignNameList;