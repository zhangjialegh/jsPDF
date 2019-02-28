class PieOption {
  constructor() {

  }
  outSimplePieOption() {
      return {
        title: {
            text: '空置率',
            x:'29%',
            y:'center',
            subtext: '9%',
            itemGap: 33,
            top: 185,
            textStyle: {
                fontSize: 40,
                color: '#000000',
                fontWeight: 'normal'
            },
            subtextStyle: {
                fontSize: 80,
                color: '#333333',
                fontWeight:'bold'
            }
        },
        legend: {
            orient: 'vertical',
            right: 0,
            itemGap: 25,
            y: 'center',
            align:'left',
            itemWidth: 36,
            itemHeight:36,
            borderRadius: 0,
            textStyle: {
                fontSize: 36,
                padding: [0,10],
                color: '#000000',
            },
            icon: 'rect',
            data:['入住','空置']
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['65%', '100%'],
                center: ['38%','50%'],
                label: {
                    normal: {
                        show: false,
                    },
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:9000, name:'入住',itemStyle:{
                        color:'#284166'
                    }},
                    {value:310, name:'空置',itemStyle:{
                        color: '#728ebf',
                        borderWidth: 1,
                        borderColor: '#ffffff'
                    }}
                ]
            }
        ]
      }
  }
  outMultiPieOption() {
      return {}
  }
}

module.exports = PieOption
