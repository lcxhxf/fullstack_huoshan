// 时间添加天数，返回字符串
// now
const addDaysToDate = (date, n) => {
    const d = new Date(date); //只要给个日期字符串，就可以得到一个日期对象
    console.log(d.getDate(), '++++++');
    // console.log(d.getDate(), d.getHours(), d.getMinutes()); // 日期，小时 分
    d.setDate(d.getDate() + n)
    return d.toISOString().split('T')[0]
}
console.log(addDaysToDate('2020-10-15',10)); 
// console.log(addDaysToDate('2020-10-15',-10));