/**
 * Author: Meng
 * Date: 2022-03
 * 网络配置项
 */

export const ENV_CONST = {
  env: 'prod',
//   env: "test",
//   env: "dev",
};

export function requestHost(env = "prod", host = "base") {
  const url = _ENV_HOST[env][host];
  return url;
}

export function requestHeader(header = {}) {
  return {
    Token: "123456789098765432123456789",
    ...header,
  };
}

export function requestParams(params = {}) {
  return {
    ...params,
  };
}

const _ENV_HOST = {
  prod: {
    base: "https://item.bnq.com.cn", //
    worker: "https://ds.bnq.com.cn", //path:原bnq_worker->worker的接口域名
    yingxiao: "https://yingxiao.bnq.com.cn", // 营销
    trade: "https://trade.bnq.com.cn/trade-web", // 交易链路：结算、下单、支付
    tradeTest: "https://trade-test.bnq.com.cn/trade-web", // 交易链路：结算、下单、支付
    customer: "https://gw.bnq.com.cn/customerGateway", // 积分、地址
    customer2: "https://gw.bnq.com.cn/customerGateway", // 获取省市区街道
    cart: "https://cart.bnq.com.cn/cartwebService", // 购物车
    pay: "https://zt.bnq.com.cn", //
    zt: "https://wy.bthome.com", //
    ptDomain: "https://himiko.bthome.com",
    invoice: "https://invoice.bnq.com.cn/invoiceService/", //电子发票
    logistics: "https://logistics.bnq.com.cn/logisticsAdmin", // 物流
    H5Domain: "https://dhstatic.bthome.com/prod/web/designer/index.html#/", //榜单等H5入口
    ecardRSAPublicKey:
      "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDNNJh8MehfCAOCiD427N4D/LBqUzsfHUisLa+6TyXd0JrHlh2RvgFGzpGoOPdbmEjYI36bgddr5LhBK4ClIaCzE7eIqUbLW4G35M2GV72mE4sMuLqYGPjT5Ch6g+rgrA1sJvM2k0wJW9dq4W4HV5Y802TvB9ve2z1mf/MNcj4VYwIDAQAB",
    promotion: "https://promotion.bnq.com.cn/promotion-service", //促销中心
    marketWebDomain: "https://m.market.bnq.com.cn",
    promotionDomain: "https://promotion.bnq.com.cn/promotion-service", //促销中心
    dssDomain: "https://dss.bthome.com",
    mfsWebDomain: "https://mfs.bnq.com.cn",
  },
  dev: {
    base: "https://sales-dev.bnq.com.cn",
    worker: "https://ds-dev.bnq.com.cn", //path:原bnq_worker->work的接口域名
    yingxiao: "http://yingxiao-dev.bnq.com.cn",
    trade: "https://trade-dev.bnq.com.cn/trade-web",
    customer: "http://customer-dev.bnq.com.cn/customerGateway",
    customer2: "http://customer-dev.bnq.com.cn/customer",
    cart: "http://cart-dev.bnq.com.cn/cartwebService",
    pay: "http://dev.zt.bnq.com.cn",
    zt: "https://wy-dev.bthome.com",
    ptDomain: "https://scgw-test.bthome.com",
    invoice: "https://invoice-dev.bnq.com.cn/invoiceService/", //电子发票
    logistics: "https://logistics-dev.bnq.com.cn/logisticsAdmin", // 物流
    H5Domain: "https://dhstatic.bthome.com/test/web/designer/index.html#/", //榜单等H5入口
    ecardRSAPublicKey:
      "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDNNJh8MehfCAOCiD427N4D/LBqUzsfHUisLa+6TyXd0JrHlh2RvgFGzpGoOPdbmEjYI36bgddr5LhBK4ClIaCzE7eIqUbLW4G35M2GV72mE4sMuLqYGPjT5Ch6g+rgrA1sJvM2k0wJW9dq4W4HV5Y802TvB9ve2z1mf/MNcj4VYwIDAQAB",
    marketWebDomain: "https://m.market.bnq.com.cn",
    promotion: "http://promotion-dev.bnq.com.cn/promotion-service", //促销中心
    promotionDomain: "http://promotion-dev.bnq.com.cn/promotion-service", //促销中心
    dssDomain: "https://dss-dev.bthome.com",
    mfsWebDomain: "https://mfs-dev.bnq.com.cn",
  },
  test: {
    base: "https://sales-test.bnq.com.cn",
    worker: "https://ds-test.bnq.com.cn", //path:原bnq_worker->work的接口域名
    yingxiao: "https://yingxiao-test.bnq.com.cn",
    trade: "https://trade-test.bnq.com.cn/trade-web",
    customer: "https://customer-test.bnq.com.cn/customerGateway",
    customer2: "https://customer-test.bnq.com.cn/customer",
    cart: "http://cart-test.bnq.com.cn/cartwebService",
    pay: "https://test.zt.bnq.com.cn",
    zt: "https://wy-test.bthome.com",
    ptDomain: "https://scgw-test.bthome.com",
    invoice: "https://invoice-test.bnq.com.cn/invoiceService/",
    logistics: "https://logistics-test.bnq.com.cn/logisticsAdmin", // 物流
    H5Domain: "https://dhstatic.bthome.com/test/web/designer/index.html#/", //榜单等H5入口
    ecardRSAPublicKey:
      "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDNNJh8MehfCAOCiD427N4D/LBqUzsfHUisLa+6TyXd0JrHlh2RvgFGzpGoOPdbmEjYI36bgddr5LhBK4ClIaCzE7eIqUbLW4G35M2GV72mE4sMuLqYGPjT5Ch6g+rgrA1sJvM2k0wJW9dq4W4HV5Y802TvB9ve2z1mf/MNcj4VYwIDAQAB",
    marketWebDomain: "https://m.market.bnq.com.cn",
    promotion: "https://promotion-test.bnq.com.cn/promotion-service", //促销中心
    promotionDomain: "https://promotion-test.bnq.com.cn/promotion-service", //促销中心
    dssDomain: "https://dss-test.bthome.com",
    mfsWebDomain: "https://mfs-test.bnq.com.cn",
  },
};
