import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingPage from "./pages/SettingPage";
import ProfilePage from "./pages/ProfilePage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { Loader } from "lucide-react";

function App() {
  const {authUser,checkAuth,isCheckingAuth}=useAuthStore();

  useEffect(()=>{
    checkAuth()
  },[checkAuth]);

  console.log({authUser});
  if(isCheckingAuth && !authUser){
    return(
      <div className="flex items-center justify-center h-screen">
          <Loader className="size-10 animate-spin"/>
      </div>
    )
  }
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={authUser ?<HomePage/>:<LoginPage/>}/>
        <Route path="/signup" element={!authUser?<SignUpPage/>:<Navigate to="/"/>}/>
        <Route path="/login" element={!authUser?<LoginPage/>:<Navigate to="/"/>}/>
        <Route path="/setting" element={<SettingPage/>}/>
        <Route path="/profile" element={authUser?<ProfilePage/>:<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default App
