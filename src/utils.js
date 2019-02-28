const toThousandFix = (num, dot = 2) => {
  num = Number.parseFloat(Math.abs(num)).toFixed(dot);
  var str = num.toString();
  //n为小数部分
  var n = str.slice(str.lastIndexOf("."));
  if (n.indexOf(".") == -1) {
    n = "";
  }
  //str为整数部分
  var str = parseInt(num).toString();
  var list = str.split("").reverse();
  for (var i = 0; i < list.length; i++) {
    if (i % 4 == 3) {
      list.splice(i, 0, ",");
    }
  }
  return list.reverse().join("") + n;
  // return value ? Number.parseFloat(Number(value).toFixed(2)).toLocaleString('en-US') : "0"
};

const toThousandPrt = (value, dot=2) => {
  return value ? (value * 100).toFixed(dot) : "0";
};

module.exports = {
  toThousandFix,
  toThousandPrt
}