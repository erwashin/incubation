import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Bell, 
  User, 
  ChevronDown,
  Home,
  Lightbulb,
  Briefcase,
  Search,
  BookOpen,
  BarChart3
} from 'lucide-react';
import { useAppContext } from '../App';
import './Header.css';

const navigationItems = [
  { name: 'Dashboard', path: '/dashboard', icon: Home },
  { name: 'Ideas', path: '/ideas', icon: Lightbulb },
  { name: 'Workspace', path: '/workspace', icon: Briefcase },
  { name: 'Discovery', path: '/discovery', icon: Search },
  { name: 'Resources', path: '/resources', icon: BookOpen },
  { name: 'Analytics', path: '/analytics', icon: BarChart3 },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, notifications } = useAppContext();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo and Brand */}
        <div className="header-brand">
          <Link to="/dashboard" className="brand-link">
            <div className="brand-icon">
              <Briefcase size={24} />
            </div>
            <span className="brand-text">Citizen Development</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Section */}
        <div className="header-actions">
          {/* Notifications */}
          <button 
            className="notification-btn"
            aria-label={`Notifications ${notifications.length > 0 ? `(${notifications.length})` : ''}`}
          >
            <Bell size={20} />
            {notifications.length > 0 && (
              <span className="notification-badge">{notifications.length}</span>
            )}
          </button>

          {/* User Menu */}
          <div className="user-menu">
            <button 
              className="user-menu-trigger"
              onClick={toggleUserMenu}
              aria-expanded={isUserMenuOpen}
              aria-haspopup="true"
            >
              <div className="user-avatar">
                <User size={20} />
              </div>
              <div className="user-info">
                <span className="user-name">{user.name}</span>
                <span className="user-role">{user.role}</span>
              </div>
              <ChevronDown size={16} className={`chevron ${isUserMenuOpen ? 'open' : ''}`} />
            </button>

            {isUserMenuOpen && (
              <div className="user-dropdown">
                <div className="dropdown-header">
                  <div className="user-avatar large">
                    <User size={24} />
                  </div>
                  <div>
                    <div className="dropdown-user-name">{user.name}</div>
                    <div className="dropdown-user-role">{user.role}</div>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item">Profile Settings</button>
                <button className="dropdown-item">Preferences</button>
                <button className="dropdown-item">Help & Support</button>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item danger">Sign Out</button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
