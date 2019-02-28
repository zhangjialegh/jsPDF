const node_echarts = require('node-echarts');
const path = require('path')
const LineOption = require('./LineCharts')
const BarOption = require('./BarCharts')
const PieOption = require('./PieCharts')

const Line = new LineOption()
const Bar = new BarOption()
const Pie = new PieOption()

/**
 *   * :(800*500)   ** : (1200*500)
 * 
 * 
 * line_median_listing_price_single                 // 挂牌中位价(每年)*
 * line_median_sale_price_single                    // 成交中位价(每年)*
 * line_days_on_market_single                       // 整体成交周期(每年)*
 * line_rental_price_single                         // 租金(每年)*
 * line_rental_return_single                        // 租金回报率(每年)*
 * line_inventory_amount_single                     // 库存(每年)*
 * line_median_listing_price_perennial              // 挂牌中位价(历史)**
 * line_inventory_amount_perennial                  // 库存(历史)**
 * line_rental_price_perennial                      // 租金(历史) **
 * line_days_on_market_perennial                    // 整体成交周期(历史)**
 * 
 * multiline_median_diff_style_perennial            // 不同户型成交中位价(历史)**
 * multiline_rental_diff_style_perennial            // 不同户型租金(历史) **
 * multiline_market_diff_style_perennial            // 不同户型成交周期(历史)**
 * 
 * pie_vacancy_rate                                 // 空置率*
 * pie_house_style                                  // 房源类别 *
 * pie_lease_own                                    // 租赁或自有 *
 * 
 * multibar_rental_renturn_perennial    //不同户型租金回报率(历史)**
 */
const name = {
    a: 'line_median_listing_price_single',              
    b: 'line_median_sale_price_single',
    c: 'line_days_on_market_single',
    d: 'line_rental_price_single',
    e: 'line_rental_return_single',
    f: 'line_inventory_amount_single',
    g: 'line_median_listing_price_perennial',
    h: 'line_inventory_amount_perennial',
    i: 'line_rental_price_perennial',
    j: 'line_days_on_market_perennial',
    k: 'multiline_median_diff_style_perennial',
    l: 'multiline_rental_diff_style_perennial',
    m: 'multiline_market_diff_style_perennial',
    n: 'pie_vacancy_rate',
    o: 'pie_house_style',
    p: 'pie_lease_own',
    q: 'multibar_rental_renturn_perennial'
}
const size = {
    small: {
        width: 800,
        height: 500
    },
    large: {
        width: 1200,
        height: 500
    }
}
const arrOption = [
    {
        name: 'line',
        option: Line.outSimpleLineOption(),
        ...size.small
    },
    {
        name: 'multibar',
        option: Bar.outMultiBarOption(),
        ...size.large
    },
    {
        name: 'pie',
        option: Pie.outSimplePieOption(),
        ...size.small
    },
    {
        name: 'multiline',
        option: Line.outMultiLineOption(),
        ...size.large
    }
]



arrOption.forEach((item) => {
    const config = {
        width: item.width, // Image width, type is number.
        height: item.height, // Image height, type is number.
        option: item.option, // Echarts configuration, type is Object.
        //If the path  is not set, return the Buffer of image.
        path:  path.resolve(__dirname,`../images/${item.name}.png`), // Path is filepath of the image which will be created.
        enableAutoDispose: true  //Enable auto_dispose echarts after the image is created.
    }
    node_echarts(config)
})