const echarts = require('echarts')
const {toThousandFix,toThousandPrt} = require('../../utils')
const {dataType,dateType} = require('../../config')
class LineOption {
  constructor() {

  }
  outSimpleLineOption(data,type,xType=dateType['m']) {
      return {
        grid: {
          top:30,
          right: '2%',
          left: '0%',
          bottom:'2%',
          containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: data.map((item) => {
              return item.date
            }),
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLine: {
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

                    case dateType['ymd']:
                      text = val
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
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                color: '#9fa0a0',
                fontSize: 26,
                margin: 25,
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
            splitLine: {
                lineStyle: {
                    color: '#d3d3d4'
                }
            }
        },
        series: [{
            data: data.map((item) => {
              return Number(item.all)
            }),
            type: 'line',
            showSymbol: false,
            smooth: true,
            lineStyle: {
                width: 1,
                color: '#5b7899'
            },
            areaStyle: {
                opacity:0.8,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#5b7899'},
                        {offset: 0.5, color: '#7b92ae'},
                        {offset: 1, color: '#ddd'}
                    ]
                )
            }
        }]
    };
  }
  outMultiLineOption(data,type,xType=dateType['m']) {
      return {
        color: ['#edc361','#5a789f','#3d86f4','#aac8fa'],
        legend: {
            icon:'rect',
            x:'right',
            itemHeight: 8,
            itemGap: 15,
            textStyle: {
                padding: 5,
                fontSize: 26,
                color: '#9fa0a0'
            },
            formatter: function(name){
                const data = ['所有户型','大户型 (5-7室)','中户型 (3-4室)','小户型 (0-2室)']
                return data[name] 
            },
            data:['0','1','2','3']
        },
        grid: {
            left: '0%',
            right: '2%',
            bottom: '2%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisTick:{
                    show:false
                },
                axisLine:{
                    show:false
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
    
                        case dateType['ymd']:
                          text = val
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
                data : data.map((item) => {
                  return item.date
                })
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisTick:{
                    show:false
                },
                axisLine:{
                    show:false
                },
                axisLabel: {
                    color: '#9fa0a0',
                    fontSize: 26,
                    margin: 25,
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
                }
            }
        ],
        series : [
            {
                name:'0',
                type:'line',
                smooth:true,
                showSymbol: false,
                lineStyle: {
                  width: 1,
                  color: '#edc361'
                },
                data:data.map((item) => {
                  return item.all
                })
            },
            {
                name:'1',
                type:'line',
                smooth:true,
                showSymbol: false,
                lineStyle: {
                width: 1,
                color: '#609f8e'
            },
                areaStyle: {
                    opacity:0.8,
                    color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(90,120,159,0.85)'},
                        {offset: 1, color: 'rgba(90,120,159,0.2)'}
                    ]
                )
                },
                data:data.map((item) => {
                  return item.large
                })
            },
            {
                name:'2',
                type:'line',
                smooth:true,
                showSymbol: false,
                lineStyle: {
                width: 1,
                color: '#0d3685'
            },
                areaStyle: {
                    opacity:0.8,
                    color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(61,134,244,0.85)'},
                        {offset: 1, color: 'rgba(61,134,244,0.2)'}
                    ]
                )
                },
                data:data.map((item) => {
                  return item.medium
                })
            },
            {
                name:'3',
                type:'line',
                smooth:true,
                showSymbol: false,
                lineStyle: {
                width: 1,
                color: '#6a9ac2'
            },
                areaStyle: {
                    opacity:0.8,
                    color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(170,200,250,0.85)'},
                        {offset: 1, color: 'rgba(170,200,250,0.2)'}
                    ]
                )
                },
                data:data.map((item) => {
                  return item.small
                })
            }
        ]
      };
  }
}

module.exports = LineOption
