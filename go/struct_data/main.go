package main
import "fmt"

// commom.js require + module.exports
// es6 import + export default
// type ? JS 弱类型 动态语言 所以基本不用type
// type 自定义类型 class 关键字

type Books struct {
	title string
	author string
	subject string
	book_id int
}

func main() {
	// fmt.Println(Books{"Go语言", "google", "现代C", 123})
	// 面向对象的
	// fmt.Println(Books{title: "Go语言", author: "google", subject:"现代C", book_id: 123456})
	// fmt.Println(Books{title: "Go语言", author: "google"}) //{Go语言 google  0}
	var Book1 Books
	var Book2 Books

	Book1.title = "Go语言"
	Book1.author = "Google"
	Book1.subject = "Go 语言是现代C"
	Book1.book_id = 123456

	Book2.title = "Python"
	Book2.author = "龟叔"
	Book2.subject = "AI语言"
	Book2.book_id = 789012

	fmt.Printf("Book2 title: %s\n", Book2.title)
	fmt.Printf("Book2 title: %s\n", Book2.author)
	fmt.Printf("Book2 title: %s\n", Book2.subject)
	fmt.Printf("Book2 title: %d\n", Book2.book_id)
}
