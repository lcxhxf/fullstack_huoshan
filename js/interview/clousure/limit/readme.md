# promise 如何限流

12个promise任务，每次执行3个 怎么做？
- 如果要我们选择一个数据结构来解决这个问题
  选择队列 FIFO
  1. promise 任务 当前在执行的promise(花时间) 入队