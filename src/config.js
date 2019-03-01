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

const dataType = {
  day:'day',
  dollar:'dollar',
  ratio:'ratio'
}

const dateType = {
  m:'month',
  y:'year',
  d:'day',
  ymd: 'ymd'
}

const dataDesc = {
  page7: [
    {
      showDot: true,
      content: `截止到2018年12月，atlanta都会区最新挂牌房价为239900.0，2018年一整年房价的来看，挂牌房价全年增长2.09%；最新成交房价为$210000.0, 成交房价全年增长2.09%`
    },
    {
      showDot: true,
      content: `Atlanta都会区最新租金为1450.0,全年增长3.31%`
    }
  ],
  page9: [
    {
      showDot: true,
      content: `2007-2012年\n受美国次贷危机影响，这段期间房价下跌34%`
    },
    {
      showDot: true,
      content: `2013-2018年\n这段期间房价快速上涨，幅度达74%,年平均增长12.4%`
    },
    {
      showDot: true,
      content: `2018年\n截止到2018年12月，atlanta都会区最新挂牌房价为239900.0，2018年一整年房价的来看，挂牌房价全年增长2.09%；最新成交房价为210000.0, 成交房价全年增长2.09%`
    },
    {
      showDot: false,
      content: `Atlanta都会区最新租金为1450.0,全年增长3.31%`
    },
    {
      showDot: true,
      content: `2019年预测\n美国在线房产数据网站Zillow预计未来一年该地区房价将继续保持7.4%的年增长。`
    }
  ],
  page11: [
    {
      showDot: true,
      content: `成交周期反映房源在市场上的消化速度,该指标是未来半年房价走势的方向标`
    },
    {
      showDot: true,
      content: `如图所示，目前atlanta都会区房源平均成交周期为49.75天，同比-21.65%，环比-1.97%`
    },
    {
      showDot: true,
      content: `从房源供应数量来看，atlanta都会区2018年12月市场库存数为27952套，同比7.3%，环比-1.1%`
    }
  ],
  page12: [
    {
      showDot: true,
      content: `亚特兰大都会区在过去8年间，租金增长百分比18%`
    },
    {
      showDot: true,
      content: `亚特兰大都会区,2018年10月租金中位数$1458,小户型$1366,中户型$1470,大户型$2010`
    },
    {
      showDot: true,
      content: `亚特兰大都会区最近几年的租金收益率位于区间7.0%-9.2%之间，其中中小户型租金收益率高于7.6%,而大户型的租金收益率中位数为5.9%附近`
    }
  ]
}
module.exports = {
  name,
  size,
  dataType,
  dateType,
  dataDesc
}