/**
 * 全局API接口定义
 */
const net = require('../net/index');

/**
 * 
 * @param {*} data 
 */
export function login(data = {}) {
  return net.request({
    url: 'api/login',
    method: 'POST',
    data
  });
}

/**
 * 
 * @param {
 * query
 *    page: num, 第几页
 *    per_page: 30 // 每页个数
 * }  
 */
export function queryPhotos(data = {}) {
  return net.request({
    url: (data.query ? 'v1/search' : 'v1/curated'),
    method: 'GET',
    data
  });
}

/**
 * 
 * @param {
 *    query=nature
 *    per_page=1
 *    page
 * }  
 */
export function searchPhotos(data = {}) {
  return net.request({
    url: 'v1/search',
    method: 'GET',
    data
  });
}

/**
 * 
 * @param id 
 */
export function photoDetail(id = 0) {
  return net.request({
    url: 'v1/photos/' + id,
    method: 'GET',
    // data
  });
}

/**
 * 
 * @param {
 *    page: num, 第几页
 *    per_page: 30 // 每页个数
 * }  
 */
export function queryVideos(data = {}) {
  return net.request({
    url: (data.query ? 'videos/search' : 'videos/popular'),
    method: 'GET',
    data
  });
}

/**
 * 
 * @param {
 *    query=nature
 *    per_page=1
 *    page
 * }  
 */
export function searchVideos(data = {}) {
  return net.request({
    url: 'videos/search',
    method: 'GET',
    data
  });
}

/**
 * 
 * @param id 
 */
export function videoDetail(id = 0) {
  return net.request({
    url: 'videos/videos/' + id,
    method: 'GET',
    // data
  });
}