'use strict';
import ReactCookie from 'react-cookie';

export function SaveCookie(name, data) {
    ReactCookie.save(name, data, {path: '/'});
}

export function RemoveCookie(name) {
    ReactCookie.remove(name, {path: '/'});
}

export function LoadCookie(name){
    return ReactCookie.load(name);
}