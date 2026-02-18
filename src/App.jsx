import { Routes, Route } from "react-router-dom";
import Discover from "./pages/discover";
import Liked from "./pages/liked";
import Create from "./pages/create";
import Profile from "./pages/profile";
import Notifications from "./pages/notifications";
import Navigation from "./components/navigation";

const App = () => {
  return (
    <>
      <div className="pb-28">
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
      <Navigation />
    </>
  );
};

export default App;
