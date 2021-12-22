var chessMapArr=Array(25);
for(var i=0;i<chessMapArr.length;i++){
	chessMapArr[i]=Array(25);
}
// var chessMapArr = [];//记录棋盘落子情况
var flag = false;//判断游戏是否结束
//输赢检查方向模式
var checkMode = [
    [1,0],//水平
    [0,1],//竖直
    [1,1],//左斜线
    [1,-1],//右斜线
];
chessMapArr[0][0] = 0
chessMapArr[0][1] = 0
chessMapArr[0][2] = 0
chessMapArr[0][3] = 0
for(var i=0;i<4;i++){
    checkWin(0,4,0,checkMode[i]);
}
console.log(flag);
//胜负判断函数
function checkWin(x,y,color,mode)
{
    var count = 1;//记录分数
    for(var i=1;i<5;i++){
        if(chessMapArr[x + i * mode[0]]){
            if(chessMapArr[x + i * mode[0]][y + i * mode[1]] == color){
                count++;
            }else{
                break;
            }
        }
    }
    
    for(var j=1;j<5;j++){
        if(chessMapArr[x - j * mode[0]]){
            if(chessMapArr[x - j * mode[0]][y - j * mode[1]] == color){
                count++;
            }else{
                break;
            }
        }
    }
    if(mode == checkMode[0])
    { console.log("水平方向有： " + count + "个" + color);}
    if(mode == checkMode[1])
    { console.log("竖直方向有： " + count + "个" + color);}
    if(mode == checkMode[2])
    { console.log("左斜方向有： " + count + "个" + color);}
    if(mode == checkMode[3])
    { console.log("右斜方向有： " + count + "个" + color);}
   
    if(count >= 5){
        //alert(color + " you habe win!" + "帅~");
        // 游戏结束
        flag = true;
    }
}