import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Signin from './components/Auth/Signin';
// import Main from './components/Main/Main';
// import BoxReply from './components/Ticket2/BoxReply';
// import User from './components/User/User';
import { UserProfile } from './component/userProfile';
import { Dashboard } from './component/dashboard';
import Ticket from './component/ticket/ticket';
import User from './component/user/user';
import Profile from './page/profile/profile';
import Admin from './page/admin/admin';
import ReplyBox from './page/reply/replyBox';
import Login from './page/login/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/" element={<Admin />} /> */}
          <Route path="/profil" element={<Profile />} />
          <Route path="/reply" element={<ReplyBox />} />
          {/* <Route path="/" element={<User />} /> */}
          {/* <Route path="/" element={<UserProfile />} /> */}
          {/* <Route path="/" element={<Ticket />} />
          <Route path="/" element={<Dashboard />} /> */}



          {/* <Route path="/" element={<User />} /> */}
          {/* <Route path="/" element={<BoxReply />} /> */}
          {/* <Route path="/" element={<Signin />} /> */}
          {/* <Route path="/Main" element={<Main />} /> */}
          {/* <Route path="/" element={<Upload />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
