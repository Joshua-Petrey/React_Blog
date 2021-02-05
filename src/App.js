import Navbar from './components/navbar/navbar.component';
import Home from './components/home/home.component';

const App = () => {
  
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}
// export components to use in other files
export default App;
