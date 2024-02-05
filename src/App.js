
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './component/Footer';
import Home from './pages/home/Home';
import Nav from './component/Nav';
import Influencer from './pages/influencer/Influencer';

import { HomeData } from './Data';

function App() {

  const liInfluencer = HomeData.liInfluencer;



  return (
    <div className="App">

      <BrowserRouter>
        <Nav />

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/influencer' element={liInfluencer? <Influencer  liInfluencer={liInfluencer}/>:"404"} />

        </Routes>
        
        <Footer />
  
      </BrowserRouter>

    </div>
  );
}

export default App;
