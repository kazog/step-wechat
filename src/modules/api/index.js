/**
 * Create By: Meng
 * Date: 2022-03
 */

import { request } from '../net/index'

// 登录
export function login(data = {}) {
    return request({
        url: '',
        method: 'POST',
        // host: 'auth',
        data
    })
}

// 
export function queryHotBooks(data={}) {
    return request({
        url: '/book/hotBooks',
        method: 'GET',
        data
    });
}

// 获取首页数据
export function queryBooks(data={}) {
    return request({
        url: '/book/books',
        method: 'POST',
        data
    });
}

// 
export function queryDetail(data={}) {
    return request({
        url: '/book/detail',
        method: 'GET',
        data
    });
}

// 
export function createBook(data={}) {
    return request({
        url: '/book/create',
        method: 'GET',
        data
    });
}

// 
export function updateBook(data={}) {
    return request({
        url: '/book/update',
        method: 'GET',
        data
    });
}

// 
export function deleteOrDown(data={}) {
    return request({
        url: '/book/deleteOrDown',
        method: 'GET',
        data
    });
}

// 
export function bookUrl(data={}) {
    return request({
        url: '/book/bookUrl',
        method: 'GET',
        data
    });
}

// 
export function similarBooks(data={}) {
    return request({
        url: '/book/similarBooks',
        method: 'GET',
        data
    });
}

// 
export function queryAuthors(data={}) {
    return request({
        url: '/author/authors',
        method: 'GET',
        data
    });
}

// 
export function authorDetail(data={}) {
    return request({
        url: '/author/detail',
        method: 'GET',
        data
    });
}
