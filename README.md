## 功能简介

- 本地开发热更新PDF视图
- Node服务端自动导出PDF文件


## 开始使用
```
# 开发一个新的PDF文档
yarn start

# 生成一个新的PDF文档
yarn new

# 给PDF文档添加水印
yarn mark <optional>(default: 'markwater')

# 根据数据生成图表
yarn outcharts

# 导出报告
yarn out <optional>(default: 'WeHome_report')

# 清空src目录下的某个文件夹
yarn clean <optional>(default: 'output')
```



> issue:

- *如果开发模式报错*
```
./node_modules/pdfkit/js/pdfkit.es5.js
SyntaxError: 'import' and 'export' may appear only with 'sourceType: module' (1:0)
```
将该文件删除后可正常工作
