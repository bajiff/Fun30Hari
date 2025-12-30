import { useState } from "react"
import {initialTodos} from '../../data';

const TodoList = () => {
  const [name, setName] = useState("");
  const [todoList,setTodoList] = useState(initialTodos);

  const addNote = () => {

    if (name === "") {
      return  "di isi dulu";
    };
    
    const newTodo = {
      id: Date.now(),
      text: name,
      completed: false
    };
    setTodoList([...todoList, newTodo]);
    setName("");
  }
  
  const toggleTodo = (todoId) => {
    todoList.map(todo => {
      if (todo.id === todoId){
        return {...todo, completed: !todo.completed};
      }
      return todo;
    });
  };
  
  const deleteTodo = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }
  
  return (
  <section className='flex flex-col gap-4  justify-center items-center'>

      <section className='w-xl gap-3 p-5 mt-10 border-2 rounded-2xl'>

      <h1 className='text-center mb-8 text-2xl'>Baji To Do List</h1>

      <form className='grid grid-cols-1 rounded border-gray-500' action="/" onSubmit={addNote}>

        <input className='rounded border-2 w-md mx-auto my-5 p-2' type="text" name="input" id="input" placeholder="Ketik sesuatu dan tekan enter" value={name} onChange={e => setName(e.target.value)} required autoFocus/>

          <section className="flex justify-center">
            <button className="mb-5 p-2 rounded bg-green-400 hover:bg-green-500 transition-all duration-300" disabled={name === "" ? true : false}>Tambah</button>
          </section>

        <table className='table px-2 gap-4'>
          <thead className='table-header-group text-center bg-blue-400 '>
            <tr >
              <th className='text-center bg-green-400'>No</th>
              <th className='text-center bg-green-400'>Description</th>
              <th className='text-center bg-red-400' colSpan={2}>Action</th>
            </tr>
          </thead >
          <tbody className=" " >
              {todoList.map(todo => (
              <tr key={todo.id}>
                <td className="p-4">{todo.id}</td>

                <td className={`p-4 ${todo.completed ? "line-through" : ""}`}>{todo.text}</td>

                <td><input className={`bg-green-500`} type="checkbox" name="checkbox" id="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)}/></td>

                  {/* Delete button udah done */}
                <td className="p-4"><button onClick={() => deleteTodo(todo.id)} className="bg-red-500 px-2 py-1">Delete</button></td>

              </tr>
              ))}
          </tbody>
        </table>
      </form>
      </section>

  </section>
  );
}

export default TodoList;