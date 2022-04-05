/**
 * Create By: Meng
 * Date: 2022-03
 */

import { request } from '../net/index'

// 登录
export function onLogin(data = {}) {
    return request({
        url: '/account/login',
        method: 'POST',
        // host: 'auth',
        data
    })
}

// 获取首页数据
export function onRegister(data={}) {
    return request({
        url: '/account/register',
        method: 'GET',
        data
    });
}

// 获取首页数据
export function queryUserinfo(data={}) {
    return request({
        url: '/account/info',
        method: 'GET',
        data
    });
}

// 获取首页数据
export function accountReset(data={}) {
    return request({
        url: '/account/reset',
        method: 'GET',
        data
    });
}

// 获取首页数据
export function onLogout(data={}) {
    return request({
        url: '/account/login',
        method: 'GET',
        data
    });
}

// 获取首页数据
export function onDeleteAccount(data={}) {
    return request({
        url: '/account/delete',
        method: 'GET',
        data
    });
}