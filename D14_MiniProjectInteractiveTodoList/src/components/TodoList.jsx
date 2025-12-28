import React from 'react'

const TodoList = () => {
  const infokan = ()  => (
    alert("Baji Gacor")
  );
  return (
  <section className='flex flex-col gap-4  justify-center items-center'>

      <section className='w-xl gap-3 p-5 mt-10 border-2 rounded-2xl'>

      <h1 className='text-center mb-8'>Baji To Do List</h1>

      <form className='grid grid-cols-1 border-2 rounded border-gray-500' action="/" onSubmit={infokan}>

        <input className='rounded border-2 w-md mx-auto my-5' type="text" name="input" id="input" placeholder="Inputkan dan tekan enter"/>

        <table>
          <thead>
            <th>Description</th>
            <th>Action</th>
          </thead>
          <tbody>
            <td>Belajar ReactJS</td>
            <td><button>Delete</button></td>
            <td><button>Done</button></td>
          </tbody>
        </table>
      </form>
      </section>

  </section>
  );
}

export default TodoList;