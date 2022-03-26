/**
 * Create By: Meng
 * Date: 2022-01
 * 网络配置项
 */

export const ENV_CONST = {
    env: 'prod',
    // env: 'dev',
    // env: 'test',
}

export function requestHost(env = 'prod', host = 'base') {
    const url = _ENV_HOST[env][host];
    return url;
}

export function requestHeader(header={}) {
    return {
        'Token': '123456789098765432123456789',
        ...header
    };
}

export function requestParams(params={}) {
    return {
        ...params
    };
}

const _ENV_HOST = {
    dev: {
        base: 'https://devbase123.com',
        auth: 'https://devauth123.com'
    },
    prod: {
        base: 'https://prodbase123.com',
        auth: 'https://prodauth123.com'
    },
    test: {
        base: 'https://testase123.com',
        auth: 'https://testauth123.com'
    },
}