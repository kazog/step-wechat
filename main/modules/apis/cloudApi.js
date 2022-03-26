/**
 * 
 */
import {query} from '../net/cloud';


export function onLogin(data = {}) {
  return query({
    name: 'login',
    data
  })
}

export function getTimes(data = {}) {
  return query({
    name: 'getTimes',
    data
  })
}

export function getInfo(data = {}) {
  return query({
    name: 'getInfo',
    data
  })
}

export function setBgImg(data={}) {
  return query({
    name: 'setBg',
    data
  })
}

export function getInvite(data={}) {
  return query({
    name: 'invites',
    data
  })
}

export function changeInvite(data = {}) {
  return query({
    name: 'changeInvite',
    data
  })
}

export function pushTimes(data = {}) {
  return query({
    name: 'pushTimes',
    data
  })
}

export function pushVow(data = {}) {
  return query({
    name: 'pushVow',
    data
  })
}

export function getVows(data = {}) {
  return query({
    name: 'getVows',
    data
  })
}
