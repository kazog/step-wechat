# 简介


## 项目结构

```bash

├── cloud                           # 云环境
│──                                 # 测试代码
│── src                             # 源代码
    │── components                  # 公共组件
        |── mysql.ts                # - 数据库配置
    │── images                      # 实体/数据类
        |── icon                    # - 请求Body
        |── index.js                # - 
    │── modules                     # 模块
        |── api                     # - 接口
        |── auth                    # - 权限
        |── event                   # - 事件bus
        |── net                     # - 网络
        |── store                   # - 存储
    │── pages                       # 接口模块
        │── home                    # - 首页
        │── my                      # - 我的
        │── sort                    # - 分类
        │── test                    # - 测试页面
    │── subpack                     # 分包一
        │── components              # - 公共组件
        │── images                  # - 图标资源
        │── pages                   # - 分包页面
    │── utils                       # 工具类
        |── crypto                  # - 加密
        |── index.ts                # - 
├── .eslintrc                       # eslint配置文件
│── .gitignore                      # git忽视文件
│── project.config.json             # babel配置
│── package.json                    # 项目依赖等
│── README.md                       # 说明文件
```
