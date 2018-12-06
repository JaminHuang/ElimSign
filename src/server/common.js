'use strict';

import md5 from '../static/js/md5.min';

/*全局变量*/
export const Global = {
    ElimChurchId : "4455ba6a12f26e08",//以琳标识
    ElimLogo : "http://elim.jaminhuang.com/sign/logo/elim.png"//以琳logo地址
};

/*API接口错误代码*/
export const ResponseCode = {
    Success : 8200,
    Fail : 8300,
    IpAddressError : 8400,
    NotFound : 8404,
    ServerInternalError : 8500,
    MissParam : 8600,
    ParamValueInvalid : 8700,
    ResDataIsEmpty : 8800,
    EncryptInvalid : 8900
};

/*生成签名串*/
export function getSign(params) {
    if (typeof params === "string") {
        return paramsStrSort(params);
    } else if (typeof params === "object") {
        let arr = [];
        for (let i in params) {
            arr.push((i + "=" + params[i]));
        }
        return paramsStrSort(arr.join(("&")));
    }
}

/*获取随机字符串*/
export function randomString(len) {
    len = len || 32;
    let $chars = 'zyxwvutsrqponmlkjihgfedcba';
    let maxPos = $chars.length;
    let pwd = '';
    for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

/*字符串排序md5*/
function paramsStrSort(paramsStr) {
    let strSort = paramsStr.split("&").sort().join("&");
    return md5(strSort);
}
