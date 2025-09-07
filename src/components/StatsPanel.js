import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Lightbulb, 
  Clock, 
  CheckCircle, 
  PlayCircle,
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import './StatsPanel.css';
import './Card.css';

function StatsPanel() {
  const [animateNumbers, setAnimateNumbers] = useState(false);

  const stats = [
    { 
      label: 'Total Ideas', 
      value: 247, 
      previousValue: 230,
      icon: Lightbulb,
      color: 'blue',
      trend: 'up',
      description: 'Ideas submitted this quarter'
    },
    { 
      label: 'In Triage', 
      value: 43, 
      previousValue: 38,
      icon: Clock,
      color: 'yellow',
      trend: 'up',
      description: 'Awaiting evaluation'
    },
    { 
      label: 'Ideas Adopted', 
      value: 10, 
      previousValue: 12,
      icon: CheckCircle,
      color: 'green',
      trend: 'down',
      description: 'Approved for development'
    },
    { 
      label: 'In Development', 
      value: 12, 
      previousValue: 8,
      icon: PlayCircle,
      color: 'cyan',
      trend: 'up',
      description: 'Currently being built'
    },
    { 
      label: 'Completed', 
      value: 8, 
      previousValue: 6,
      icon: Users,
      color: 'purple',
      trend: 'up',
      description: 'Successfully delivered'
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimateNumbers(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const calculateChange = (current, previous) => {
    const change = current - previous;
    const percentage = previous > 0 ? Math.round((change / previous) * 100) : 0;
    return { change, percentage };
  };

  const getTrendIcon = (trend) => {
    return trend === 'up' ? TrendingUp : TrendingDown;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="card stats-panel"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="stats-header">
        <h2>
          <Users size={24} />
          Program Overview
        </h2>
        <p className="stats-subtitle">Key metrics for your citizen development program</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = getTrendIcon(stat.trend);
          const { change, percentage } = calculateChange(stat.value, stat.previousValue);

          return (
            <motion.div 
              key={index} 
              className={`stat-card ${stat.color}`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="stat-header">
                <div className="stat-icon">
                  <Icon size={20} />
                </div>
                <div className="stat-trend">
                  <TrendIcon 
                    size={16} 
                    className={`trend-icon ${stat.trend}`}
                  />
                  <span className={`trend-value ${stat.trend}`}>
                    {Math.abs(percentage)}%
                  </span>
                </div>
              </div>

              <div className="stat-content">
                <motion.div 
                  className="stat-value"
                  initial={{ scale: 0 }}
                  animate={animateNumbers ? { scale: 1 } : { scale: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "backOut"
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>

              <div className="stat-change">
                <span className={`change-indicator ${stat.trend}`}>
                  {change > 0 ? '+' : ''}{change} from last period
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="stats-footer">
        <div className="stats-summary">
          <div className="summary-item">
            <AlertCircle size={16} />
            <span>Last updated: 2 hours ago</span>
          </div>
          <button className="refresh-btn btn btn-secondary">
            Refresh Data
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default StatsPanel;
