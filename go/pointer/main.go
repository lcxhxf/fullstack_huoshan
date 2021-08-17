package main 
import "fmt"

func main() {
	var	a int = 10
	var b int = 20
	c := "Runoob" // 隐式类型转换
	fmt.Printf("a变量的地址：%x\n", &a)
	fmt.Printf("b变量的地址：%x\n", &b)
	fmt.Printf("c变量的值是：%s", c)
}
