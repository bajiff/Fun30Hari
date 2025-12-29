import { useState } from "react"

const TodoList = () => {
  const [name, setName] = useState("");
  const inputUser = (e) => {
    e.preventDefault
    setName(e)    
    console.log(e);
  };

  const infokan = (e)  => {
    e.preventDefault;
  };

  return (
  <section className='flex flex-col gap-4  justify-center items-center'>

      <section className='w-xl gap-3 p-5 mt-10 border-2 rounded-2xl'>

      <h1 className='text-center mb-8 text-2xl'>Baji To Do List</h1>

      <form className='grid grid-cols-1 rounded border-gray-500' action="/" onSubmit={e => infokan(e.target.value)}>

        <input className='rounded border-2 w-md mx-auto my-5 p-2' type="text" name="input" id="input" placeholder="Ketik sesuatu dan tekan enter" value={name} onChange={e => inputUser(e.target.value)} required autoFocus/>

        <table className='table px-2 gap-4'>
          <thead className='table-header-group text-center bg-blue-400 '>
            <tr >
              <th className='text-center bg-green-400'>Description</th>
              <th className='text-center bg-red-400' colSpan={2}>Action</th>
            </tr>
          </thead >
          <tbody className=" bg-yellow-400" >
            <tr>
              <td className="p-4">Belajar ReactJS</td>
              <td className="p-4"><button>Delete</button></td>
              <td className="p-4"><button>Done</button></td>
            </tr>
          </tbody>
        </table>
      </form>
      </section>

  </section>
  );
}

export default TodoList;