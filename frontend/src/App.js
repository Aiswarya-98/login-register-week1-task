import './App.css';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import { Route, Routes } from 'react-router-dom';
import Admin from './Components/admin/Admin'
import { AuthProvider } from './Components/Context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <div className="App">
     
     <AuthProvider>
     <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path='/contact' element={<ProtectedRoute><Contact/></ProtectedRoute>}/>
      <Route path='/admin' element={<ProtectedRoute><Admin/></ProtectedRoute>}/>
     </Routes>
     </AuthProvider>

    </div>
  );
}

export default App;
