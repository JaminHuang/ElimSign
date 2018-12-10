'use strict';
import React, { Component } from 'react';
import { NoticeBar, Tabs, Grid, Toast, Button, Modal, NavBar, Popup } from 'antd-mobile';
import { SianNameList } from '../../../components/mobile/index';
import CountUp from 'react-countup';
import { Request, ResponseCode, Encrypt, Global } from '../../../server/index';
import moment from 'moment-timezone/moment-timezone';
import _ from 'lodash';

const TabPane = Tabs.TabPane;
const Prompt = Modal.prompt;

class ElimGather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:userList,
            preCount : 0,
            count: 0
        }
    }

    componentWillMount() {
        this.getSignCount("0");
    }

    componentDidMount() {

    }

    /*签到*/
    signOnClick(userName, gender, groupName) {
        /*判断是否属于其他*/
        if(userName === ""){
            userName = document.getElementById('txtUserName').value;
        }
        let data = { body : Encrypt({churchId: Global.ElimChurchId, userName: userName, gender: gender, groupName: groupName, gatherType: "0"})};
        Request.FetchPost("www/gather/sign", data).then(json=>{
            if (json.Code === ResponseCode.Success ) {
                Toast.show('签到成功', 1);
                this.getSignCount("0");
                this.delUser(userName);
            }
            else {
                Toast.show(json.Msg, 1);
            }
        })
    }

    /*判断列表是否存在,并删除*/
    delUser(username) {
        let { users } = this.state;
        let hsItem = _.findIndex(users.hs, function (n) {
            return n.text === username;
        });
        if (hsItem !== -1) {
            _.remove(users.hs, function (hs) {
                return hs.text === username;
            });
        }
        else {
            let ynItem = _.findIndex(users.yn, function (n) {
                return n.text === username;
            });
            if (ynItem !== -1) {
                _.remove(users.yn, function (yn) {
                    return yn.text === username;
                })
            }
            else {
                let zzItem = _.findIndex(users.zz, function (n) {
                    return n.text === username;
                });
                if (zzItem !== -1) {
                    _.remove(users.zz, function (zz) {
                        return zz.text === username;
                    })
                }
            }
        }
        this.setState({users: users});
    }

    /*获取未签到用户*/
    getList() {
        let nowDate = moment().locale('en').utcOffset(0);
        let data = {body : Encrypt({churchId:Global.ElimChurchId, gatherType: "0", date: nowDate})};
        let that = this;
        Request.FetchPost("www/gather/name/list", data).then(json=>{
            if (json.Code === ResponseCode.Success ) {
                _.forEach(json.Data, function (n) {
                    that.delUser(n.UserName);
                });
            }
            else {
                Toast.show(json.Msg, 1);
            }
        })
    }

    /*获取签到人数*/
    getSignCount(gatherType) {
        let that = this;
        let data = { body : Encrypt({churchId:Global.ElimChurchId, gatherType: gatherType})};
        Request.FetchPost("www/gather/count", data).then(json=>{
            if (json.Code === ResponseCode.Success) {
                that.setState({preCount:that.state.count===null?0:that.state.count, count:json.Data});
                that.getList();
            }
            else {
                Toast.show(json.Msg, 1);
            }
        });
    }

    /*获取当前签到列表*/
    getSignList() {
        let nowDate = moment().locale('en').utcOffset(0);
        let data = {body : Encrypt({churchId:Global.ElimChurchId, gatherType: "0", date: nowDate})};
        Request.FetchPost("www/gather/name/list", data).then(json=>{
            if (json.Code === ResponseCode.Success ) {
                Popup.show(<SianNameList list={json.Data} pop={Popup} />);
            }
            else {
                Toast.show(json.Msg, 1);
            }
        })
    }

    /*跳转到点名页面*/
    gotoCall() {
        window.location.href = "/elim-call";
    }

    render() {
        let { preCount, count, users } = this.state;
        return <div id="container">
            <NavBar leftContent="点名" mode="light" onLeftClick={this.gotoCall} rightContent={[
                <Button key="1" size="small" icon="check-circle" onClick={() => Prompt('请填写姓名', '',
                    [
                        { text: '取消' },
                        {
                            text: '确认',
                            onPress: value => new Promise((resolve) => {
                                if(value.length < 1) {
                                    Toast.show('姓名不能为空',1);
                                }else {
                                    setTimeout(() => {
                                        resolve();
                                        this.signOnClick(value, 2,'其他');
                                    }, 100);
                                }
                            }),
                        },
                    ])} />,
                <Button key="2" size="small" icon="ellipsis"  onClick={this.getSignList} />
            ]}><h3>今日签到人数 <span><CountUp start={preCount} end={count} duration={5} /></span></h3></NavBar>
            <NoticeBar mode="closable" icon={null}>亲爱的弟兄姊妹，感谢你为主的甘心摆上，愿主纪念你的劳苦。</NoticeBar>
            <Tabs defaultActiveKey="1" swipeable={false} destroyInactiveTabPane={true} >
                <TabPane tab="以诺组" key="1">
                    <Grid data={users.yn} carouselMaxRow={3} isCarousel onClick={(_el, index)=>this.signOnClick(_el.text,_el.gender,'以诺组')} />
                </TabPane>
                <TabPane tab="枝子组" key="2">
                    <Grid data={users.zz} carouselMaxRow={3} isCarousel onClick={(_el, index)=>this.signOnClick(_el.text,_el.gender,'枝子组')} />
                </TabPane>
                <TabPane tab="活石组" key="3">
                    <Grid data={users.hs} carouselMaxRow={3} isCarousel onClick={(_el, index)=>this.signOnClick(_el.text,_el.gender,'活石组')} />
                </TabPane>
            </Tabs>
            <div className="logo">
                <img src={Global.ElimLogo} />
            </div>
            <p className="foot">©版权所有  Grace & Elim 2016-2018 | 以琳 • 网络事工组</p>
        </div>
    }
}

export default ElimGather;