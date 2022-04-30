/**
 * Author: Meng
 * Date: 2022-03
 * 网络配置项
 */

export const ENV_CONST = {
  env: "prod",
  //   env: "dev",
};

export function requestHost(env = "prod", host = "base") {
  const url = _ENV_HOST[env][host];
  return url;
}

export function requestHeader(header = {}) {
    header.token = '123456789098765432123456789';
  return header;
}

export function requestParams(params = {}) {
  return params;
}

const _ENV_HOST = {
  prod: {
    base: "https://item.bnq.com.cn", //
    worker: "https://ds.bnq.com.cn", //
    pay: "https://zt.bnq.com.cn", //
  },
  dev: {
    base: "https://sales-dev.bnq.com.cn",
    worker: "https://ds-dev.bnq.com.cn",
    pay: "http://dev.zt.bnq.com.cn",
  },
};
