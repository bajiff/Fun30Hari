import {NavLink} from "react-router-dom"

const NavBar = () => {
  return (
    <nav className=''>
        <ul className='flex items-center justify-between gap-2 w-lg mt-10 bg-red-200 max-w-xl py-2 mx-auto '>
          <li>
            <NavLink className={({isActive}) => `rounded border shadow px-3 py-2 ${isActive ? "bg-green-400 " : "bg-red-400"}`} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => `rounded border shadow px-3 py-2 ${isActive ? "bg-green-400 " : "bg-red-400"}`} to="/movie">Movie</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => `rounded border shadow px-3 py-2 ${isActive ? "bg-green-400 " : "bg-red-400"}`} to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => `rounded border shadow px-3 py-2 ${isActive ? "bg-green-400 " : "bg-red-400"}`} to="/about">About</NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar;