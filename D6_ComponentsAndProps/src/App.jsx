
// ? Data Students
import {students} from "../data/";
import UserCard from "./components/UserCard";

function App() {
  return (
    students.map(s => <UserCard key={s.id} name={s.name} nim={s.nim} tier={s.tier} major={s.major} faculty={s.faculty} status={s.status} />)
  );
}

export default App;