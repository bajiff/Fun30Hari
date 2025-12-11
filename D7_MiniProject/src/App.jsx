// import Button from "./components/Button";
// import UserProfile from "./components/UserProfile";
// import Card from "./components/Card";

import {Button,Card,UserProfile} from "./components/Index";

// ? Data Students
import {students} from "../data/index.js";

function App() {
  console.log(students);
  return (
    <>
    <UserProfile></UserProfile>
    <Button/>
      {students.map((student) => (
      <Card name={student.name} nim={student.nim} tier={student.tier} major={student.major}  faculty={student.faculty}/>
      ))
      }

    </>
  );
}

export default App;