import { useState } from 'react';// 引入useState 定义以及修改数据的方法
import './App.css' // 引入样式

const App = () => {
  const [todos, setTodos] = useState([
    {
      content: 'Pickup dry cleaning',
      isCompleted: true
    },
    {
      content: 'Get haircut',
      isCompleted: false
    },
    {
      content: 'Build a todo app in React',
      isCompleted: false
    }
  ]) 
  const toggleTodoCompleteAtIndex = (i) => {
    const newTodos = [...todos];
    // todos 某一条 ！
    newTodos[i].isCompleted = !newTodos[i].isCompleted
    console.log(todos[i]);
    setTodos(
      newTodos
    )
  }
  return (
    <div className="app">
      <form  className="todo-list">
        <ul>
          {
            todos.map((todo, i) => (
              <div className={`todo ${todo.isCompleted&&'todo-is-completed'}`}>
                <div className="checkbox" onClick={() => toggleTodoCompleteAtIndex(i)}>
                {
                  todo.isCompleted && (
                    <span>&#x2714;</span>
                  )
                }
                </div>
                <input type="text" value={todo.content}/>
              </div>
            ))
          }
          
        </ul>
      </form>
    </div>
  )
}
export default App
