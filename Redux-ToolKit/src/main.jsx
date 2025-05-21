// main.jsx
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider, useSelector } from 'react-redux';
import { store } from "./App/store";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.jsx';
import LoginPage from './components/Login/LoginPage';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  </Provider>
);