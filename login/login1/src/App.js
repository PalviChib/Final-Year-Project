
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout';
import Login from './Components/Login';
import MyInformation from './Components/MyInformation';
import NoPage from './Components/NoPage';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
function App() {
  return (
    <div className="App">
    <div className = "DemoGas"> Student Marks Filling and Evaluation System</div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={< Login/>} />
          <Route path="MyInformation" element={<MyInformation />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
