import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Signin from './components/Auth/Signin';
import Main from './components/Main/Main';
import BoxReply from './components/Ticket2/BoxReply';
import User from './components/User/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<User />} />
          {/* <Route path="/" element={<BoxReply />} /> */}
          {/* <Route path="/" element={<Signin />} /> */}
          <Route path="/Main" element={<Main />} />
          {/* <Route path="/" element={<Upload />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
