'use strict';
import React, { Component } from 'react';
import { NoticeBar, Grid, NavBar, Button, Toast } from 'antd-mobile';
import moment from 'moment-timezone/moment-timezone';
import { Request, ResponseCode, Encrypt, Global } from '../../../server/index';

let t;
let i;
let nList;

let bs = true;

class ElimGatherCall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameList : [],
            count : 0
        }
    }

    /*开始点名*/
    startClick(count) {
        loop();

        function loop() {
            t = setTimeout(loop, 25);
            let r = Math.random() * count;
            i = parseInt(r);

            if (bs) {
                nList[i].style.backgroundColor = "#108EE9";
                bs = false;
            } else {
                for (let j = 0; j < count; j++) { nList[j].style.backgroundColor = "#FFFFFF"; }
                bs = true;
            }
        }
    }

    /*结束点名*/
    endClick() {
        clearTimeout(t);
        nList[i].style.backgroundColor = "#108EE9";
        let chose = document.getElementById("chooseName");
        chose.innerHTML = nList[i].getElementsByClassName("am-grid-text")[0].innerHTML;
    }

    componentDidMount() {
        let nowDate = moment().locale('en').utcOffset(0);//获取当前时间
        nList = document.getElementsByClassName("am-grid-item-content");
        let data = {body : Encrypt({churchId:Global.ElimChurchId, gatherType: "0", date: nowDate})};
        Request.FetchPost("www/gather/name/list", data).then(json=>{
            if (json.Code === ResponseCode.Success ) {
                let sList = [];
                json.Data.map(n=> {
                    switch (n.Gender) {
                        case 0:
                            sList.push({
                                icon: require("../../../static/images/sister.png"),
                                gender: n.Gender,
                                text: n.UserName
                            });
                            break;
                        case 1:
                            sList.push({
                                icon: require("../../../static/images/brother.png"),
                                gender: n.Gender,
                                text: n.UserName
                            });
                            break;
                        case 2:
                            sList.push({
                                icon: "https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",
                                gender: n.Gender,
                                text: n.UserName
                            });
                            break;
                    }
                });
                this.setState({nameList:sList, count: json.Data.length});
            }
            else {
                Toast.show(json.Msg, 1);
            }
        })
    }

    /*跳转至签到页面*/
    gotoSign() {
        window.location.href = "/elim-gather";
    }

    render() {
        let { nameList, count} = this.state;
        return <div id="container">
            <NavBar leftContent="签到" mode="light" onLeftClick={this.gotoSign}  rightContent={count > 0 ?[
                <Button key="1" size="small" icon="cross"  onClick={this.endClick} />,
                <Button key="2" size="small" icon="check"  onClick={this.startClick.bind(this,count)} />] : []} >
                <h3>以琳·主日聚会点名</h3>
            </NavBar>
            <NoticeBar mode="closable" icon={null}>点名采用的是随机点名，如有重复，一切纯属巧合，求主怜悯</NoticeBar>
            <div className="callName" id="chooseName">{count > 0 ? "点击 √ 开始，点击 × 停止" : "暂时无人签到"}</div>
            <Grid data={nameList} columnNum={5} />
            <div className="logo">
                <img src={Global.ElimLogo} />
            </div>
            <p className="foot">©版权所有  Grace & Elim 2016-2018 | 以琳 • 网络事工组</p>
        </div>
    }
}

export default ElimGatherCall;
