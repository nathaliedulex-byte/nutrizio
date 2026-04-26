import { Navigate, Route, Routes } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import AnalyzerPage from './pages/AnalyzerPage';
import MealLogPage from './pages/MealLogPage';
import ManualEstimatorPage from './pages/ManualEstimatorPage';
import BmiPage from './pages/BmiPage';
import ChatbotPage from './pages/ChatbotPage';
import { useAuth } from './context/AuthContext';
const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" replace />;
};
export default function App() {
  return (
    <div className="app-shell">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
        <Route path="/analyze" element={<PrivateRoute><AnalyzerPage /></PrivateRoute>} />
        <Route path="/meals" element={<PrivateRoute><MealLogPage /></PrivateRoute>} />
        <Route path="/estimator" element={<PrivateRoute><ManualEstimatorPage /></PrivateRoute>} />
        <Route path="/bmi" element={<PrivateRoute><BmiPage /></PrivateRoute>} />
        <Route path="/chatbot" element={<PrivateRoute><ChatbotPage /></PrivateRoute>} />
      </Routes>
    </div>
  );
}
