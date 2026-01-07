import {UserList} from './components/Index'
import { Routes, Route } from 'react-router';
import {ContactPage,HomePage,NotFoundPage} from "./pages/IndexPage";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/userlist' element={<UserList/>} />
      <Route path='/contact' element={<ContactPage/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
  );
};

export default App;