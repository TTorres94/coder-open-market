import './App.css';
import NavBar from './components/navbar/navbar'
//import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer'




function App() {


  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer  />
    </div>
  );
}

export default App;
