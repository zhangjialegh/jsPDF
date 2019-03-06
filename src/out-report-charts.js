const node_echarts = require('node-echarts');
const path = require('path')
const fs = require('fs')
const parse = require("csv-parse/lib/sync")
const LineOption = require('./assets/js/LineCharts')
const BarOption = require('./assets/js/BarCharts')
const PieOption = require('./assets/js/PieCharts')
const {name,size,dataType,dateType} = require('./config')

const Line = new LineOption()
const Bar = new BarOption()
const Pie = new PieOption()

const data0=fs.readFileSync(path.resolve(__dirname,'./data/listings_2018.csv'))
const listings_2018 = parse(data0,{columns:true})
const data1=fs.readFileSync(path.resolve(__dirname,'./data/sales_2018.csv'))
const sales_2018 = parse(data1,{columns:true})
const data2=fs.readFileSync(path.resolve(__dirname,'./data/dom_2018.csv'))
const dom_2018 = parse(data2,{columns:true})
const data3=fs.readFileSync(path.resolve(__dirname,'./data/rents_2018.csv'))
const rents_2018 = parse(data3,{columns:true})
const data4=fs.readFileSync(path.resolve(__dirname,'./data/rents_yield_2018.csv'))
const rents_yield_2018 = parse(data4,{columns:true})
const data5=fs.readFileSync(path.resolve(__dirname,'./data/inventory_2018.csv'))


const inventory_2018 = parse(data5,{columns:true})
const data6=fs.readFileSync(path.resolve(__dirname,'./data/listings.csv'))
const listings = parse(data6,{columns:true})
const data7=fs.readFileSync(path.resolve(__dirname,'./data/close_prices.csv'))
const close_prices = parse(data7,{columns:true})
const data8=fs.readFileSync(path.resolve(__dirname,'./data/dom_all.csv'))
const dom_all = parse(data8,{columns:true})
const data9=fs.readFileSync(path.resolve(__dirname,'./data/inventory_data.csv'))
const inventory_data = parse(data9,{columns:true})
const data10=fs.readFileSync(path.resolve(__dirname,'./data/rent_all.csv'))
const rent_all = parse(data10,{columns:true})
const data11=fs.readFileSync(path.resolve(__dirname,'./data/rental_return_all.csv'))
const rental_return_all = parse(data11,{columns:true})

const arrOption = [
    {
        name: name['a'],
        option: Line.outSimpleLineOption(listings_2018,dataType['dollar']),
        ...size.small
    },
    {
        name: name['b'],
        option: Line.outSimpleLineOption(sales_2018,dataType['dollar']),
        ...size.small
    },
    {
        name: name['c'],
        option: Line.outSimpleLineOption(dom_2018,dataType['day']),
        ...size.small
    },
    {
        name: name['d'],
        option: Line.outSimpleLineOption(rents_2018,dataType['dollar']),
        ...size.small
    },
    {
        name: name['e'],
        option: Line.outSimpleLineOption(rents_yield_2018,dataType['ratio']),
        ...size.small
    },
    {
        name: name['f'],
        option: Line.outSimpleLineOption(inventory_2018,dataType['dollar']),
        ...size.small
    },
    {
        name: name['g'],
        option: Line.outSimpleLineOption(listings,dataType['dollar'],dateType['my']),
        ...size.large
    },
    {
        name: name['h'],
        option: Line.outSimpleLineOption(inventory_data,dataType['dollar'],dateType['my']),
        ...size.large
    },
    {
        name: name['i'],
        option: Line.outSimpleLineOption(rent_all.map((item) => {
            return {
                date:item.date,
                all: item.all
            }
        }),dataType['dollar'],dateType['my']),
        ...size.large
    },
    {
        name: name['j'],
        option: Line.outSimpleLineOption(dom_all.map((item) => {
            return {
                date:item.date,
                all: item.all
            }
        }),dataType['day'],dateType['my']),
        ...size.large
    },
    {
        name: name['k'],
        option: Line.outMultiLineOption(close_prices,dataType['dollar'],dateType['my']),
        ...Object.assign(size.large,{height:700})
    },
    {
        name: name['l'],
        option: Line.outMultiLineOption(rent_all,dataType['dollar'],dateType['my']),
        ...size.large
    },
    {
        name: name['m'],
        option: Line.outMultiLineOption(dom_all,dataType['day'],dateType['my']),
        ...size.large
    },
    {
        name: name['q'],
        option: Bar.outMultiBarOption(rental_return_all,dataType['ratio'],dateType['y']),
        ...Object.assign(size.large,{height:480})
    }
]



arrOption.forEach((item) => {
    const config = {
        width: item.width, // Image width, type is number.
        height: item.height, // Image height, type is number.
        option: item.option, // Echarts configuration, type is Object.
        //If the path  is not set, return the Buffer of image.
        path:  path.resolve(__dirname,`./assets/images/${item.name}.png`), // Path is filepath of the image which will be created.
        enableAutoDispose: true  //Enable auto_dispose echarts after the image is created.
    }
    node_echarts(config)
})