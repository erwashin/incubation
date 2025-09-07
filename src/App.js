import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/globals.css';

// Components
import Header from './components/Header';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Ideas from './pages/Ideas';
import Workspace from './pages/Workspace';
import Discovery from './pages/Discovery';
import Resources from './pages/Resources';
import Analytics from './pages/Analytics';

// Context for global state management
const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

function AppProvider({ children }) {
  const [user] = useState({
    name: 'John Doe',
    role: 'Citizen Developer',
    avatar: '/api/placeholder/32/32'
  });

  const [notifications, setNotifications] = useState([]);
  const [theme, setTheme] = useState('light');

  const addNotification = (notification) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { ...notification, id }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value = {
    user,
    notifications,
    theme,
    addNotification,
    toggleTheme
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              } />
              <Route path="/ideas" element={
                <DashboardLayout>
                  <Ideas />
                </DashboardLayout>
              } />
              <Route path="/workspace" element={
                <DashboardLayout>
                  <Workspace />
                </DashboardLayout>
              } />
              <Route path="/discovery" element={
                <DashboardLayout>
                  <Discovery />
                </DashboardLayout>
              } />
              <Route path="/resources" element={
                <DashboardLayout>
                  <Resources />
                </DashboardLayout>
              } />
              <Route path="/analytics" element={
                <DashboardLayout>
                  <Analytics />
                </DashboardLayout>
              } />
            </Routes>
          </main>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
