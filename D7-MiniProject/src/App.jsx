
// ? Data Students
import {members} from "../data/index.js";
import TeamMember from "./components/TeamMember.jsx";

function App() {
  return (
  <>
      <section className="flex flex-col items-center justify-around">

      {
      members.map(member => 
        <TeamMember name={member.name} role={member.role} img={member.img} isOnline={member.isOnline}/>
        )
      }
      </section>
  </>
  );
}

export default App;