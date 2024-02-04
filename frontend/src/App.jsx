import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Index } from "./pages/index";
import { Login } from "./pages/login";
import { ProfileList } from "./pages/profile_list";
import { Profile } from "./pages/profile";
import { Register } from "./pages/register";
import { Layout } from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile_list" element={<ProfileList />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
