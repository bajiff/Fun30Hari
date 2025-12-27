import {Button,Card,TeamMember,UserProfile,Counter, EventPractice, Rumah,ProductForm, Products, ShoppingList, ProductList} from "./components/Index";
import Home from "./components/Home.jsx";

// ? Data Students
import {students,members} from "../data/index.js";

function App() {
  students;
  return (
    <>
      <ProductForm/>
      <ProductList/>
      <ShoppingList/>
      <Products/>
      <Home/>
      <Rumah/>
      <Counter/>
      <EventPractice/>
      <section style={{ padding:"10px",gap:"9px",display:"flex",flexWrap:"wrap" }}>
        {members.map((member) => 
          <TeamMember key={member.id}
          id={member.id}
          name={member.name}
          role={member.role}
          img={member.img}
          isOnline={member.isOnline}/>
          )}
      </section>
    </>
  );
};

export default App;