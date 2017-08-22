# HTML5-Game-App-Generator
# 模块生成器配置使用方法

## install
    npm install -g yo

## create
    npm init

input `generator-h5app`


`"keywords": [ "yeoman-generator"]`

`"files": ["generators"]`

    npm install --save yeoman-generator
    npm install --save chalk
    npm install --save yosay

## index.js

## debug
`.\HTML5-Game-App-Generator` 
    npm install -g & npm link

## publish

## 安装生成器
更新https://192.168.184.20:8443/svn/ST2/Tech/Tools/client

在目录`\Tools\client\generator-st2`下执行命令

    npm install -g & npm link

## 生成代码
假设你需要生成的模块的名字为foo,那么在目录`ClientDev\trunk\src\apps`下执行

    yo st2 foo

然后在交互控制台中输入你的以下信息：
- 名字。第二次使用的时候会保存上次的输入，回车即可输入保存的值。
- 版本号。

搞定。

## 参考
- [yeoman][yeoman]

[yeoman]:http://yeoman.io/