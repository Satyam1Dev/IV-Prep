import logo from './logo.svg';
import './App.css';

function App() {
  
  // const handleSave = (item, index) => {
  //   // Send the updated data to the server
  //   const updatedItem = { ...item, ...data.data[index] };

  //   axios.patch(`https://dev-pricelist-api.websodev.com/api/price-list/${item.id}`, updatedItem)
  //        .then(() => setEditableRowIndex(null))
  //        .catch((error) => {
  //          console.error(error);
  //        });
  // };

  // const handleSave = (item, index) => {
  //   // Send the updated data to the server
  //   const updatedItem = { ...item, ...data.data[index] };

  //   axios.put(`https://dev-pricelist-api.websodev.com/api/price-list/${item.id}`, updatedItem)
  //        .then(() => setEditableRowIndex(null))
  //        .catch((error) => {
  //          console.error(error);
  //        });
  //   };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
