import './App.css';
import './components/NavBar/NavBar.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './components/ItemListContainer/ItemListContainer.css'

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <ItemListContainer greeting = "Bienvenido a la Tienda D'Amico" />
      </header>
    </div>
  );
}

export default App;
