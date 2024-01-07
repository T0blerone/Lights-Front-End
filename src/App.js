import Navbar from './Navbar';
import Clips from './Clips';
import Effects from './Effects';
import Receivers from './Receivers';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddReceiver from './AddReceiver';

function App() {
  return (
  <Router>
    <div className="app">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path ='/*' element={<Home />} />
          <Route path ='receivers/*' element={<Receivers />} />
          <Route path ='effects/*' element={<Effects />} />
          <Route path ='clips/*' element={<Clips />} />
          <Route path ='add-receiver/*' element={<AddReceiver />} />
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
