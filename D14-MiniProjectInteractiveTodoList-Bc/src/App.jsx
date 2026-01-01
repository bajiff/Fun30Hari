import {Button,Card,TeamMember,UserProfile,Counter, EventPractice, Rumah,ProductForm, Products, ShoppingList, ProductList, TodoList, Home} from "./components/Index";

// ? Data Students
import {students,members} from "../data/index.js";

function App() {
  students;
  return (
    <>
      <TodoList/>
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