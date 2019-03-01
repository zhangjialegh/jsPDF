## 功能简介

- 本地开发热更新PDF视图
- Node服务端自动导出PDF文件


## 使用
```
yarn start
```

### 本地开发
```
# 开发一个新的PDF模板
yarn start

# 生成一个新的PDF模板
yarn new

# 在images输出报告图表
yarn outcharts

# 根目录导出报告PDF
yarn out
```



> issue:

- *开发模式报错*
```
./node_modules/pdfkit/js/pdfkit.es5.js
SyntaxError: 'import' and 'export' may appear only with 'sourceType: module' (1:0)
```
将该文件删除后可正常工作
