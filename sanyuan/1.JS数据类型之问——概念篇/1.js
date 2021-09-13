function test(person) {
    person.age = 100
    person = {
        name: 'mengnan',
        age: 21
    }
    return person
}
const p1 = {
    name:'lc',
    age: 19
}
const p2 = test(p1)
console.log(p1);    //{ name: 'lc', age: 100 }
console.log(p2);    //{ name: 'mengnan', age: 21 }

console.log('1');
console.log('1'.toString()); 

console.log(9999999999999999);  //16个9=>10000000000000000
console.log(9007199254740992 === 9007199254740993);     // → true 居然是true!

//1.数字后面加n创建BigInt
console.log( 9007199254740995n );    // → 9007199254740995n	
console.log( 9007199254740995 );     // → 9007199254740996
//2.BigInt构造函数
BigInt("9007199254740995");    // → 9007199254740995n

10n + 20n;    // → 30n	
10n - 20n;    // → -10n	
+10n;         // → TypeError: Cannot convert a BigInt value to a number	
-10n;         // → -10n	
10n * 20n;    // → 200n	
20n / 10n;    // → 2n	
23n % 10n;    // → 3n	
10n ** 3n;    // → 1000n	

const x = 10n;	
++x;          // → 11n	
--x;          // → 9n
console.log(typeof x);   //"bigint"


