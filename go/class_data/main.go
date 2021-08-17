package main
import "fmt"

type People struct {
	name string
}

func (p People)SayHi() {
	fmt.Println("------ say hi")
}

func main () {
	var People1 People
	People1.SayHi()
}