const node_echarts = require('node-echarts');
const path = require('path')

const option = {
  title: {
      text: '堆叠区域',
      textStyle: {
          fontWeight: '400',
          fontSize: 18,
          lineHeight: '30'
      },
      subtextStyle: {
          color:'#666',
          fontSize: 14
      },
      subtext:'labels'
  },
  legend: {
      data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
  },
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis : [
      {
          type : 'category',
          boundaryGap : false,
          axisTick:{
              show:false
          },
          data : ['周一','周二','周三','周四','周五','周六','周日']
      }
  ],
  yAxis : [
      {
          type : 'value',
          axisTick:{
              show:false
          },
      }
  ],
  series : [
      {
          name:'邮件营销',
          type:'line',
          stack: '总量',
          areaStyle: {},
          lineStyle:{
              width:1
          },
          smooth:true,
          showSymbol:false,
          data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
          name:'联盟广告',
          type:'line',
          lineStyle:{
              width:1
          },
          stack: '总量',
          areaStyle: {},
          smooth:true,
          showSymbol:false,
          data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
          name:'视频广告',
          lineStyle:{
              width:1
          },
          type:'line',
          stack: '总量',
          areaStyle: {},
          smooth:true,
          showSymbol:false,
          data:[150, 232, 201, 154, 190, 330, 410]
      },
      {
          name:'直接访问',
          lineStyle:{
              width:1
          },
          type:'line',
          stack: '总量',
          smooth:true,
          showSymbol:false,
          areaStyle: {normal: {}},
          data:[320, 332, 301, 334, 390, 330, 320]
      },
      {
          name:'搜索引擎',
          type:'line',
          lineStyle:{
              width:1
          },
          stack: '总量',
          smooth:true,
          showSymbol:false,
          label: {
              normal: {
                  show: true,
                  position: 'top'
              }
          },
          areaStyle: {normal: {}},
          data:[820, 932, 901, 934, 1290, 1330, 1320]
      }
  ]
};



const config = {
    width: 700, // Image width, type is number.
    height: 500, // Image height, type is number.
    option, // Echarts configuration, type is Object.
    //If the path  is not set, return the Buffer of image.
    path:  path.resolve('download','1.png'), // Path is filepath of the image which will be created.
    enableAutoDispose: true  //Enable auto-dispose echarts after the image is created.
}

node_echarts(config)