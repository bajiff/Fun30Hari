import { useState } from 'react';
import {initialTodos} from '../../data'

const TodoList = () => {
  const [text, setText] = useState("");
  const [todoList,setTodoList] = useState(initialTodos);
  
  const sisaTugas = todoList.filter(todo => !todo.completed).length
  
  const addTodo = (e) => {
    e.preventDefault();
    
    console.log(text);
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodoList([...todoList, newTodo])
    setText("")
  };
  
  const checkboxToggler = (todoId) => {
    setTodoList(todoList.map(todo => {
      if (todo.id === todoId) return {...todo, completed: !todo.completed};
      return todo;
    }));
  };
  
  const deleteTodo = (todoId) => {

    if (confirm("Yakin mau Hapus?")) {
    return setTodoList(todoList.filter(todo => todo.id !== todoId))
    }

    return false
  }
  return (
    <section className={`flex items-center justify-center mt-10`}>
      <section className={`grid grid-cols-1 w-xl border-2 rounded-2xl px-15 py-10 `}>

        <h1 className={`text-center text-3xl mb-3`}>Baji Todo List</h1>
        <form className='grid' action="/" onSubmit={addTodo}>
          <input className={`border my-4 rounded px-2 py-1 text-left`} type="text" name="text" id="text" placeholder='Ketik sesuatu dan enter' value={text} onChange={e => setText(e.target.value)} autoFocus/>
          <button className={`rounded bg-green-500 ${text === "" ? "bg-green-800 cursor-not-allowed" : ""} transition-all duration-300 `} disabled={text === ""}>Save</button>
        </form>
        <table className={` mt-6`}>
          <thead>
            <tr className={`py-2`}>
              <th>ID</th>
              <th>Text</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
              {todoList.map(todo => (
              <tr className={`py-2 mt-3`} key={todo.id}>
                <td className={`py-2 mt-3`}>{todo.id}</td>

                <td className={`${todo.completed ? "line-through" : ""}`}>{todo.text}</td>

                <td className={`py-2 mt-3`}>
                  <input type="checkbox" name="completed" checked={todo.completed} onChange={() => checkboxToggler(todo.id)} />
                </td>

                <td>
                  <button className={`bg-red-500 px-4 py-1 rounded`} onClick={() => deleteTodo(todo.id)} >Delete</button>
                  </td>
              </tr>
              ))}
          </tbody>
        </table>

        <h1 className={`text-center mt-5`}>Sisa tugas tinggal {sisaTugas}</h1>
      </section>
    </section>
  )
}

export default TodoList;