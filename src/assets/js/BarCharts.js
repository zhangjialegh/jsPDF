const echarts = require('echarts')
const {toThousandFix,toThousandPrt} = require('../../utils')
const {dataType,dateType} = require('../../config')
class BarOption {
  constructor() {

  }
  outSimpleBarOption() {
      return 
  }
  outMultiBarOption(data,type,xType=dateType['m']) {
      return {
          legend: {
              icon:'rect',
              itemHeight: 8,
              x:'right',
              itemGap: 15,
              textStyle: {
                  padding: 5,
                  fontSize: 26,
                  color: '#9fa0a0'
              }
          },
          grid: {
              top:30,
              right: 0,
              left: '0%',
              bottom: '2%',
              containLabel: true,
          },
          dataset: {
              source: [
                  ['product', '所有户型', '大户型', '中户型','小户型'],
                  ...data.map((item) => {
                    return [
                      item.date,
                      item.all,
                      item.large,
                      item.medium,
                      item.small
                    ]
                  })
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
                  fontSize: 26,
                  formatter: function (val) {
                    let text = ''
                    const arr = val.split('-')
                    switch (xType) {
                      case dateType['m']:
                        text = Number(arr[1])+'月'
                        break;
                      case dateType['y']:
                        text = Number(arr[0])+'年'
                        break;
                      case dateType['d']:
                        text = Number(arr[2])+'日'
                        break;
                      case dateType['my']:
                        text = arr[1]+'/'+arr[0]
                        break;
                    }
                    return text
                  }
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
                  fontSize: 26,
                  formatter: function(val) {
                    let text = ''
                    switch (type) {
                      case dataType['day']:
                        text = val ? (val+'天') : ''
                        break;
                      case dataType['dollar']:
                        const dol = val / 1000
                        if(dol < 0.1) {
                          text = ''
                        } else if(dol>=1) {
                          text = '$'+toThousandFix(dol,0) +'k'
                        } else {
                          text = '$'+toThousandFix(dol,1) +'k'
                        }
                        break;
                      case dataType['ratio']:
                        const r = val >= 1 ? val : val * 100
                        text = r<0.1 ? '' : (toThousandPrt(r,1)+'%')
                        break;
                    }
                    
                    return text
                  }
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
