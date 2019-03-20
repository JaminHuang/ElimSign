'use strict';
import React, { Component } from 'react';
import { Picker,List,Modal,NoticeBar,Toast } from 'antd-mobile'
import {Encrypt, Request, ResponseCode, Cookies, Global} from "../../../server";
import _ from 'lodash';
import { createForm } from 'rc-form';

import mankStyle from '../../../static/style/mank.css';
import weStyle from '../../../static/style/weui.min.css';

let sexList = [
    { 'label': '姊妹', 'value': '0'},
    { 'label': '弟兄', 'value': '1'},
];

let nameList = [];
let newList = [];
let verticalOpts = [{ 'width': 0 }, { 'width': '90%' }];
let groupName = '棵棵树';

class ElimMank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            isSelect:false,
            isFollow:false,
            item:Cookies.LoadCookie("elim-user"),
            list : [],
            selectValue:{},
            choose:{ 'FollowId':'', 'UserName':'', 'GroupName':'', 'FollowName':'', 'Gender':0, 'Status':0 }
        }
    }

    visibleModal() {
        //判断是否登录
        if(this.state.item != null) {
            this.setState({isLogin:true});
        }else {
            this.setState({isLogin:false});
        }
    }

    componentWillMount() {
        weStyle.use();
        mankStyle.use();

        //判断用户是否登录
        this.IsLogin();
    }

    /*判断是否登录*/
    IsLogin() {
        let that = this;
        let { item } = that.state;
        if(item != null) {
            //判断用户是否已经有关怀对象
            that.IsFollow();
            if(!that.state.isFollow) {
                //加载判断显示登录信息,过滤随机目标
                _.forEach(uList.kks,function (x) {
                    if(x.name != item.name && x.gender == item.gender) { newList.push(x); }
                });
            }
            that.setState({isLogin:true, list:newList});
            that.delFollowName(item.gender);
        }else {
            that.setState({isLogin:false});
        }
    }


    /*判断是否已经有关怀对象*/
    IsFollow() {
        let that = this;
        let { item } = that.state;
        let data = { body : Encrypt({churchId:Global.ElimChurchId, userName: item.name.toString(), groupName:groupName, gender:item.gender.toString() })};
        Request.FetchPost("www/userfollow/get", data).then(json=>{
            if (json.Code === ResponseCode.Success) {
                if(json.Data.Status == 1) {
                    Toast.show('您的关怀对象是：'+ json.Data.FollowName);
                    that.setState({isFollow:true,text:'您的关怀对象是：'+ json.Data.FollowName});
                }
            }
        });
    }

    /* 选择性别 */
    changeSex(val) {
        let that = this;
        let { list, selectValue } = that.state;
        nameList = [];
        selectValue.gender = val;
        //获取选中性别的用户列表
        _.filter(uList.kks, function (x) {
            return x.gender.toString() === val.toString()
        });
        //遍历插入选择器
        _.forEach(uList.kks, function (a) {
            if(a.gender === parseInt(val)) {
                nameList.push({ 'label':a.name.toString(), 'value': a.name.toString(), 'key':a.key });
                list.push(a);
            }
        });
        that.setState({isSelect:true,list,selectValue});
    }

    /*排除已被关怀的用户*/
    delFollowName(gender) {
        console.log()
        let that = this;
        let { list,item } = that.state;
        let data = { body : Encrypt({churchId:Global.ElimChurchId, groupName:groupName, gender:gender.toString() })};
        Request.FetchPost("www/userfollow/list", data).then(json=>{
            if (json.Code === ResponseCode.Success) {
                _.forEach(json.Data, function (x) {
                    _.remove(newList,function (y) {
                        return x.FollowName == y.name
                    })
                });
                this.setState({list:newList});
            }
            else {
                Toast.show(json.Msg);
            }
        });
    }

    /*选择姓名*/
    changeName(val) {
        let that = this;
        let { list,selectValue } = that.state;
        selectValue.name = val;
        newList = [];
        that.delFollowName(selectValue.gender);
        this.props.form.validateFields((errors, values)=> {
            if (!errors) {
                let user = { 'name' : selectValue.name, 'gender': selectValue.gender };
                //存入缓存Cookie
                Cookies.SaveCookie('elim-user', user);
                //过滤随机目标
                _.forEach(list,function (x) {
                    if(x.name != user.name) { newList.push(x); }
                });
                that.setState({isLogin:true, item:user,list:newList});
            }
        });



        turn($('#draw'), 400, verticalOpts);
    }

    /* 添加关怀对象 */
    addUserFollow() {
        let followName = $("#select").val();
        let that = this;
        let { item } = this.state;
        let data = { body : Encrypt({churchId:Global.ElimChurchId, userName: item.name.toString(), groupName:groupName, followName:followName, gender:item.gender.toString() })};
        Request.FetchPost("www/userfollow/add", data).then(json=>{
            if (json.Code === ResponseCode.Success) {
                Toast.show('您的关怀对象是：'+ json.Data.FollowName);
                that.setState({text:'您的关怀对象是：'+ json.Data.FollowName})
            }
            else {
                Toast.show(json.Msg);
            }
        });
    }

    render() {
        let { form } = this.props;
        const { isLogin, isSelect, isFollow, list, selectValue, text } = this.state;
        const { getFieldProps  } = form;

        return <div id="container">
            <img className="top" src={require('../../../static/images/top.jpg')} />
            <div className="m-div"><span>棵棵树小组·关怀链·随机翻牌</span></div>
            <div style={{display:!isFollow?'none':'block'}}><NoticeBar marqueeProps={{ loop: true }} mode="closable" icon={null}>{text}</NoticeBar></div>
            <Modal visible={!isLogin} width={300} height={100} >
                <Picker {...getFieldProps('gender')} data={sexList} value={selectValue.gender} cols={1} className="forss" onChange={(val)=>this.changeSex(val)}>
                    <List.Item arrow="horizontal">性别</List.Item>
                </Picker>
                <Picker {...getFieldProps('name')} data={nameList} cols={1} className="forss" disabled={!isSelect} onChange={(val)=>this.changeName(val)}>
                    <List.Item arrow="horizontal">请选择</List.Item>
                </Picker>
            </Modal>
            <input type="hidden" id="select" value="" />
            <div style={{display:'none'}}><button id="btnOK" onClick={()=>this.addUserFollow()} /></div>
            <div className="weui-grids" id="draw">
                {list.map((x,index)=>
                    <a id={'a' + (index + 1)} key={x.key} style={{margin:0}} className="weui-grid" >
                        <img className="img" src={require('../../../static/images/mank_bg.png')} alt={x.name} />
                        <img className="info" src={x.img} />
                    </a>
                )}
            </div>
            <img className="bottom" src={require('../../../static/images/bottom.jpg')} />
        </div>
    }
}

ElimMank = createForm()(ElimMank);

export default ElimMank;