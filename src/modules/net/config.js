/**
 * Create By: Meng
 * Date: 2022-03
 * 网络配置项
 */

export const ENV_CONST = {
    // env: 'prod',
    env: 'test',
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
    prod: {
        base: 'http://prodbase123.com',
        auth: 'http://prodauth123.com'
    },
    test: {
        base: 'http://localhost:8197',
        auth: 'http://192.168.1.3:8197'
    },
}