package main
import "fmt"

func main() {
	// var a int = 100
	// a := 100
	// if a < 20 {
	// 	fmt.Println("a 小于20\n")
	// }else{
	// 	fmt.Println("a大于20\n")
	// }
	var n[10]int
	var i,j int
	for i = 0; i < 10; i++ {
		n[i] = i+100
	}
	for j = 0; j < 10; j++ {
		fmt.Println("Element[%d] = %d\n", j, n[j])
	}
	// var countryCapitalMap map[string]string //map[key]value 集合
	// //静态语言
	// countryCapitalMap = make(map[string]string)
	// countryCapitalMap["France"] = "巴黎"
	// countryCapitalMap["Italy"] = "罗马"
	// countryCapitalMap["Japan"] = "东京"
	// countryCapitalMap["India"] = "新德里"

	// for country := range countryCapitalMap { // go()
	// 	fmt.Println(country,"首都是", countryCapitalMap[country])
	// }

	// capital,ok := countryCapitalMap["American"]
	// if ok {
	// 	fmt.Println("American的首都是", capital)
	// }else{
	// 	fmt.Println("American的首都不存在")
	// }

}