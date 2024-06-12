import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Internet from './pages/Internet';
import About from './pages/About';
import Support from './pages/Support';
import Television from './pages/Television';
import Questions from './pages/Questions';
import InternetForBusiness from './pages/InternetForBusiness';
import Channels from './pages/Channels';
import Connection from './pages/Connection';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="body">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/internet' element={<Internet />} />
            <Route path='/about' element={<About />} />
            <Route path='/support' element={<Support />} />
            <Route path='/television' element={<Television />} />
            <Route path='/questions' element={<Questions />} />
            <Route path='/internet-for-business' element={<InternetForBusiness />} />
            <Route path='/channels' element={<Channels />} />
            <Route path='/connection' element={<Connection />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
