import UserList from "./components/users/userComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateUser from "./components/Update/update";
import ReadUser from "./components/Read/read";
import CreateUser from "./components/Create/create";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" index element={<UserList />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/read/:id" element={<ReadUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
