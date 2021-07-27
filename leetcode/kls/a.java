// public class happyNumbers {

//     public static void main(String[] args) {
//         System.out.println("please input a number:");
//         Scanner scanner = new Scanner(System.in);
//         int value = scanner.nextInt();
//         int res = isHappyNum(value);
//         System.out.println(res);
//     }

//     public static int isHappyNum(int num){
//         int res = 0;// 最终的返回值
//         if (num / 100 > 9 || num == 0) {
//             System.out.println("参数必须是十进制三位数！");
//             return res;
//         }
//         int unitsDigit = num %100%10;// 个位数
//         int tensDigit= num%100/10;// 十位数
//         int hundredsDigit = num/100;// 百位数
//         int sum = unitsDigit*unitsDigit+tensDigit*tensDigit+hundredsDigit*hundredsDigit;

//         if(sum == 1){
//             res = 1;// 确认是快乐数，返回1
//         }else if(sum != 1){
//             res = -1;// 确认是非快乐数，返回-1
//         }else{
//             return isHappyNum(sum);// 未得到确切结果，进行递归处理。*
//         }
//         return res;
//     }

// }
