
# 开发规范

    开发规范：每个公司都有自己习惯的规范。
    这里按照一个比较常规的规范操作。
    如有不同想法或者更好的规范可以补充通知其他人

## 项目结构

这里目前采用的规范如下：

目录：

```bash                  

│── components                          # 公共组建
    │── header                              # 标题栏
│── images                              # 静态资源
    │── icon                                # 小图标 -❗️注意：按功能命名❗️
    │── img                                 # 图片
│── modules                             # 功能模块
    │── api                                 # 接口
    │── auth                                # 授权
    │── chat                                # 聊天室
    │── constant                            # 全局常量
    │── event                               # 全局 EventBus 事件分发
    │── net                                 # 网络及环境
    │── store                               # 数据存储 - ❗️注意：不要代码中直接调用wx.setStore,getStore❗️
    │── system                              # 系统API封装
│── pages                               # 分包-不重要的二级界面
    │── api                             # 接口
    │── auth                            # 授权
    │── bridge                          # 获取账号信息-兼容平台
    │── native                          # 原生相关功能
    │── net                             # 网络及环境
│── styles                              # 分包-不重要的二级界面
    │── anim.wxss                          # 接口
    │── image.wxss                         # 授权
    │── text.wxss                          # 获取账号信息-兼容平台
    │── view.wxss                          # 原生相关功能
│── unpack                              # 分包-不重要的二级界面
    │── components                          # 分包组件
        │── icon                                # 
    │── images                              # 分包图片
        │── icon                                # 小图标-❗️注意：按功能命名❗️
        │── img                                 # 图片
    │── pages                               # 页面
        │── addres                              # 收货地址
│── utils                               # 帮助类库
    │── app                                 # 系统，日志，启动App场景，更新
    │── encrypt                             # 加解密
    │── sort                                # 排序
    │── index.js                            # 统一帮助类
    │── tools.wxs                           # 统一wxs封装
├── eslintrc                            # eslint配置文件
│── app.js                              # App 入口文件
├── app.json                            # 项目页面配置
│── Guide.md                            # 项目结构
│── project.config.json                 # 小程序配置
│── README.md                           # 项目规范

```
