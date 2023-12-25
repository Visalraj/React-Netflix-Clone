import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { FireBase } from "./firebase/config";

function App() {
	
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
      </Routes>
	  <button onClick={()=>{
		FireBase.firestore().collection('Users').add({
			name:'Admin',
			password:'Admin'
		});
	  }}>Clicj</button>
    </>
  );
}

export default App;
