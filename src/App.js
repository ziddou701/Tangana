
import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Home from './Home';
import CreateRestaurant from './CreateRestaurant';
import CreateDish from './CreateDish';
import Restaurants from './Restaurants';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/CreateRestaurant' element={<CreateRestaurant/>} />
          <Route path='/CreateDish' element={<CreateDish/>} />
          <Route path='/Restaurants/:id' element={<Restaurants/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
