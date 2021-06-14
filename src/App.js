import './App.css';
import NavBar from './components/navbar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  const greeting = 'Bienvenido a OPENMARKET!!'



  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = {greeting} />
    </div>
  );
}

export default App;
