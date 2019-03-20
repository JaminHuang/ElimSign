'use strict';
let Config = {
    URL:"https://www.jaminhuang.com/elimsign"
};

let sisterIcon = "/public/5fedc1e4e13d04ec1f3579376b810d3f.png";
let brotherIcon = "/public/80873dcdb4481f978bc16e8d455c22c5.png";

let userList = {
    'yn': [
        {'icon' : sisterIcon, 'gender' : 0, 'text': '林慧敏'},
        {'icon' : sisterIcon, 'gender' : 0,  'text': '杨胜钰'},
        {'icon' : sisterIcon, 'gender' : 0, 'text': '吴婷婷'},
        {'icon' : sisterIcon, 'gender' : 0, 'text': '林璐瑶'},
        {'icon' : sisterIcon, 'gender' : 0, 'text': '陈莉莉'},
        {'icon' : sisterIcon, 'gender' : 0, 'text': '黄莺莺'},
        {'icon' : sisterIcon, 'gender' : 0, 'text': '王攀'},
        {'icon' : brotherIcon, 'gender' : 1, 'text': '庄俊旭'},
        {'icon' : brotherIcon, 'gender' : 1, 'text': '廖蒙福'},
        {'icon' : brotherIcon, 'gender' : 1, 'text': '徐旭'},
        {'icon' : brotherIcon, 'gender' : 1, 'text': '庄毓勋'},
        {'icon' : brotherIcon, 'gender' : 1, 'text': '黄益朗'},
        {'icon' : brotherIcon, 'gender' : 1, 'text': '董约翰'},
        {'icon' : brotherIcon, 'gender' : 1, 'text': '蔡福才'},
        {'icon' : brotherIcon, 'gender' : 1, 'text': '徐文凯'},
        {'icon' : brotherIcon, 'gender' : 1, 'text': '方益杰'},
        {'icon' : brotherIcon, 'gender' : 1, 'text': '黄益仁'}
    ],
    'zz': [
        {'icon' : sisterIcon, 'gender' : 0, 'text': '黄佳佳'},
        {'icon' : sisterIcon, 'gender' : 0, 'text': '徐晶晶'},
        {'icon' : sisterIcon, 'gender' : 0, 'text': '李莹'},
        {'icon' : sisterIcon, 'gender' : 0, 'text': '包莹莹'},
        {'icon' : sisterIcon, 'gender' : 0, 'text': '张欣悦'},
        {'icon' : sisterIcon, 'gender' : 0, 'text': '余雪纯'},
        {'icon' : sisterIcon, 'gender' : 0, 'text': '王靖鑫'},
        {'icon' : sisterIcon, 'gender' : 0, 'text': '朱淑怡'},
        {'icon' : brotherIcon, 'gender' : 1, 'text': '胡事乐'},
        {'icon' : brotherIcon, 'gender' : 1, 'text': '张光程'},
        {'icon' : brotherIcon, 'gender' : 1, 'text': '张凯特'},
        {'icon' : brotherIcon, 'gender' : 1, 'text': '章奇妙'},
        {'icon' : brotherIcon, 'gender' : 1, 'text': '黄章明'},
        {'icon' : brotherIcon, 'gender' : 1, 'text': '陈志伟'}

    ],
    'hs': [
        {'icon' : sisterIcon, 'gender' : 0, 'text': '黄文怡'},
        {'icon' : sisterIcon, 'gender' : 0, 'text': '许慈爱'},
        {'icon' : sisterIcon, 'gender' : 0, 'text': '秦佳佳'},
        {'icon' : sisterIcon, 'gender' : 0, 'text': '杜婕妤'},
        {'icon' : sisterIcon, 'gender' : 0, 'text': '邵明凤'},
        {'icon' : sisterIcon, 'gender' : 0, 'text': '周碧'},
        {'icon' : sisterIcon, 'gender' : 0, 'text': '蔡冰艳'},
        {'icon' : sisterIcon, 'gender' : 0, 'text': '雷园'},
        {'icon' : brotherIcon, 'gender' : 1, 'text': '蒋驰'},
        {'icon' : brotherIcon, 'gender' : 1, 'text': '诸葛衍昆'},
        {'icon' : brotherIcon, 'gender' : 1, 'text': '李强'},
        {'icon' : brotherIcon, 'gender' : 1, 'text': '彭书凡'},
        {'icon' : brotherIcon, 'gender' : 1, 'text': '胡习文'}

    ]
};

let uList = {
    'kks': [
        { 'name': '叶淑强', 'group': '棵棵树', 'gender':1, 'key':'ysq', 'img':'/public/ysq.png' },
        { 'name': '黄佳佳', 'group': '棵棵树', 'gender':0, 'key':'hjj', 'img':'/public/hjj.png' },
        { 'name': '董约翰', 'group': '棵棵树', 'gender':1, 'key':'dyh', 'img':'/public/dyh.png' },
        { 'name': '诸葛衍昆', 'group': '棵棵树', 'gender':1, 'key':'zgyk', 'img':'/public/zgyk.png' },
        { 'name': '黄鸯鸯', 'group': '棵棵树', 'gender':0, 'key':'hyy', 'img':'/public/hyy.png' },
        { 'name': '张恺特', 'group': '棵棵树', 'gender':1, 'key':'zkt', 'img':'/public/zkt.png' },
        { 'name': '余雪纯', 'group': '棵棵树', 'gender':0, 'key':'yxc', 'img':'/public/yxc.png' },
        { 'name': '杨胜钰', 'group': '棵棵树', 'gender':0, 'key':'ysy', 'img':'/public/ysy.png' },
        { 'name': '徐晶晶', 'group': '棵棵树', 'gender':0, 'key':'xjj', 'img':'/public/xjj.png' },
        { 'name': '黄章明', 'group': '棵棵树', 'gender':1, 'key':'hzm', 'img':'/public/hzm.png' },
        { 'name': '黄益朗', 'group': '棵棵树', 'gender':1, 'key':'hyl', 'img':'/public/hyl.png' },
        { 'name': '秦佳佳', 'group': '棵棵树', 'gender':0, 'key':'qjj', 'img':'/public/qjj.png' },
        { 'name': '林璐瑶', 'group': '棵棵树', 'gender':0, 'key':'lly', 'img':'/public/lly.png' },
        { 'name': '黄益人', 'group': '棵棵树', 'gender':1, 'key':'hyr', 'img':'/public/hyr.png' },
        { 'name': '许文凯', 'group': '棵棵树', 'gender':1, 'key':'xwk', 'img':'/public/xwk.png' }
    ]
};