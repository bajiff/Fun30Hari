import {Button,Card,TeamMember,UserProfile,EventPractice, Counter} from "./components/Index";

// ? Data Students
import {students,members} from "../data/index.js";

function App() {
  students;
  return (
    <>
      <Counter/>
      <EventPractice/>
      <section style={{ padding:"10px",gap:"9px",display:"flex",flexWrap:"wrap" }}>
        {members.map((member) => <TeamMember key={member.id} id={member.id} name={member.name} role={member.role} img={member.img} isOnline={member.isOnline}/>)}
      </section>
    </>
  );
};

export default App;