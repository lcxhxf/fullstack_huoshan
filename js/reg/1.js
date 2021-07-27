const str1 = '23isNBAbignumberNBA';
const str2 = '玩螳螂lol还是找蒋总';
// 部分查找 indexof reg
const reg = /nba$/i;
console.log(reg.test(str2));
console.log(reg.test(str1));