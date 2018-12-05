'use strict';
import fetch from 'isomorphic-fetch';

export function FetchPost(url, data) {
    return fetch(`${Config.URL}/${url}`, {
        headers: {"Content-Type": "application/json"},
        method: 'POST',
        body: JSON.stringify(data)
    }).then(response=> {
        return response.json();
    })
}

export function FetchGet(url) {
    return fetch(`${CONFIG.APIURL}/${url}`, {
        headers: {"Content-Type": "application/json"},
        method: 'GET'
    }).then(response=> {
        return response.json();
    })
}