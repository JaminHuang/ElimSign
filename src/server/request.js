'use strict';
import fetch from 'isomorphic-fetch';
import { getSign, randomString } from '../server/common';

let PublicKey = "www";
let PrivateKey = "aaX53gZpHngeB1O8Z3Ugpt906JzmZcIarD01oqznU/nfiZw452nkfr==";

export function FetchPost(url, data) {
    let headers = {
        "publickey" : PublicKey,
        "nonce" : randomString(10),
        "timestamp" : new Date().getTime(),
        "privatekey" : PrivateKey
    };
    headers.signature = getSign(headers);
    return fetch(`${Config.URL}/${url}`, {
        headers: {"Content-Type": "application/json", "publickey" : headers.publickey, "nonce": headers.nonce, "timestamp" : headers.timestamp, "signature" : headers.signature},
        method: 'POST',
        body: JSON.stringify(data)
    }).then(response=> {
        return response.json();
    })
}

export function FetchGet(url) {
    let headers = {
        "publickey" : PublicKey,
        "nonce" : randomString(10),
        "timestamp" : new Date().getTime(),
        "privatekey" : PrivateKey
    };
    headers.signature = getSign(headers);
    return fetch(`${CONFIG.APIURL}/${url}`, {
        headers: {"Content-Type": "application/json",  "publickey" : headers.publickey, "nonce": headers.nonce, "timestamp" : headers.timestamp, "signature" : headers.signature},
        method: 'GET'
    }).then(response=> {
        return response.json();
    })
}