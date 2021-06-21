import './App.css';
import NavBar from './components/navbar/navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCountContainer from './containers/itemCountContainer/itemCountContainer'


function App() {


  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemCountContainer />
    

    </div>
  );
}

export default App;
