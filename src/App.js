
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import './styles/header.css'
function App() {
  return (
  <div className="app">
    <header className= "headerClassName">
    <NavBar />
    </header>
    <div>
      <ItemListContainer color="red" />
    </div>
  </div>  
  
  );
}

export default App;
