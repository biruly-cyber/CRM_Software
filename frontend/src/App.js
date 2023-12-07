import "./App.css";
import AdminDashboard from "./components/admindashboard/AdminDashboard.js";
import SideBar from "./components/common_component/SideBar.js";

import LoginPage from "./components/login/LoginPage.js";

function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      {/* <SideBar /> */}
      <AdminDashboard />
    </div>
  );
}

export default App;
