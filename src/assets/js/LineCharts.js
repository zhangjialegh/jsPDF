const echarts = require('echarts')
class LineOption {
  constructor() {

  }
  outSimpleLineOption() {
      return {
        grid: {
          top:30,
          right: 0,
          left: '10%'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                fontSize: 24
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
                fontSize: 24
            },
            splitLine: {
                lineStyle: {
                    color: '#d3d3d4'
                }
            }
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
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
  outMultiLineOption() {
      return {
        color: ['#edc361','#609f8e','#0d3685','#6a9ac2'],
        legend: {
            icon:'rect',
            x:'right',
            itemHeight: 8,
            itemGap: 15,
            textStyle: {
                padding: 5,
                fontSize: 22,
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
            right: '3%',
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
                    fontSize: 22
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
                axisLine:{
                    show:false
                },
                axisLabel: {
                    color: '#9fa0a0',
                    fontSize: 22
                }
            }
        ],
        series : [
            {
                name:'0',
                type:'line',
                stack: '总量',
                smooth:true,
                showSymbol: false,
                lineStyle: {
                  width: 1,
                  color: '#edc361'
                },
                areaStyle: {
                    opacity:0.8,
                    color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#edc361'},
                        {offset: 0.5, color: '#dfc381'},
                        {offset: 1, color: '#ddd'}
                    ]
                )
                },
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'1',
                type:'line',
                stack: '总量',
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
                        {offset: 0, color: '#609f8e'},
                        {offset: 0.8, color: '#60938e'},
                        {offset: 1, color: '#fff'}
                    ]
                )
                },
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'2',
                type:'line',
                stack: '总量',
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
                        {offset: 0, color: '#0d3685'},
                        {offset: 0.8, color: '#254285'},
                        {offset: 1, color: '#ddd'}
                    ]
                )
                },
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'3',
                type:'line',
                stack: '总量',
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
                        {offset: 0, color: '#6a9ac2'},
                        {offset: 0.8, color: '#6aafc2'},
                        {offset: 1, color: '#ddd'}
                    ]
                )
                },
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
      };
  }
}

module.exports = LineOption
