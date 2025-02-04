// Imports
import './App.css';
import HomePage from './pages/HomePage';
import AddProduce from './pages/AddProduce';
import UpdateForm from './pages/UpdateForm';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <nav>
        <Link to={'/'}>HomePage</Link> | |
        <Link to={'/create'}>App Produce</Link>
      </nav>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/create'} element={<AddProduce />} />
        <Route path={'/edit/:id'} element={<UpdateForm />} />
        <Route path={'*'} element={<h1>404 Not Found. Sorry</h1>} />
      </Routes>
    </>
  );
}

export default App;
