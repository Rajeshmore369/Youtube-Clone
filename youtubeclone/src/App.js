import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex mt-16">
        <Sidebar />
        video
      </div>
    </div>
  );
}

export default App;
