import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Signin from './components/Auth/Signin';
import Main from './components/Main/Main';
import Upload from './components/Upload/Upload';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/Main" element={<Main />} />
          {/* <Route path="/" element={<Upload />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
