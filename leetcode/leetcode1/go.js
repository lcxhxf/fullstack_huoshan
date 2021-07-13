// func twoSum(nums []int, target int) []int {
//     // m 是个变量，:=make 分配空间 map HashMap
//     // new make
//     m := make(map[int]int)
//     for k, v := range nums {
//         if idx, ok := m[target-v]; ok {
//             return []int{idx, k}
//         }
//         m[v] = k
//     }
//     return nil
// }