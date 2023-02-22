import './App.css';
import './components/NavBar/NavBar.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer'
import './pages/ItemListContainer/ItemListContainer.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path= '/' element = {<ItemListContainer />} />
      <Route path= "/item" element = {<ItemDetailContainer />} />
      <Route path= "/category/:categoryId" element = {<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
