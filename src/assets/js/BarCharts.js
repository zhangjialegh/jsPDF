class BarOption {
  constructor() {

  }
  outSimpleBarOption() {
      return 
  }
  outMultiBarOption() {
      return {
          legend: {
              icon:'rect',
              itemHeight: 8,
              x:'right',
              itemGap: 15,
              textStyle: {
                  padding: 5,
                  fontSize: 22
              }
          },
          grid: {
              top:30,
              right: 0,
              left: '5%'
          },
          dataset: {
              source: [
                  ['product', '所有户型', '小户型', '中户型','大户型'],
                  ['Latte', 43.3, 85.8, 93.7,87],
                  ['Tea', 83.1, 73.4, 55.1,87],
                  ['Cocoa', 86.4, 65.2, 82.5,87],
                  ['Browni', 72.4, 53.9, 39.1,87],
                  ['Browne', 72.4, 53.9, 39.1,87],
                  ['Broie', 72.4, 53.9, 39.1,87],
                  ['Broe', 72.4, 53.9, 39.1,87]
              ]
          },
          xAxis: {
              type: 'category',
              axisTick: {
                  show: false
              },
              splitLine: {
                  show: false
              },
              axisLabel: {
                  color: '#9fa0a0',
                  fontSize: 22
              },
              axisLine: {
                  show:false
              }
          },
          yAxis: {
              axisTick: {
                  show: false
              },
              splitLine: {
                  show: false
              },
              axisLabel: {
                  color: '#9fa0a0',
                  fontSize: 22
              },
              axisLine: {
                  show:false
              }
          },
          series: [
              {type: 'bar',itemStyle:{
                  color:'#f9c202'
              }},
              {type: 'bar',itemStyle:{
                  color:'#99b3db'
              }},
              {type: 'bar',itemStyle:{
                  color:'#6f89b6'
              }},
              {type: 'bar',itemStyle:{
                  color:'#1d2f4e'
              }}
          ]
        };
  }
}

module.exports = BarOption
