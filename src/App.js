import React from 'react';
import Header from './components/Header';
import DashboardLayout from './components/DashboardLayout';
import StatsPanel from './components/StatsPanel';
import IdeaAdoption from './components/IdeaAdoption';
import RecentIdeas from './components/RecentIdeas';
import IdeaDiscovery from './components/IdeaDiscovery';
import Leaderboard from './components/Leaderboard';
import StatusTracking from './components/StatusTracking';
import ResourcesLibrary from './components/ResourcesLibrary';
import Navbar from './components/Navbar';
import Metrics from './components/Metrics';
import CTABox from './components/CTABox';
import DevStatus from './components/DevStatus';


function App() {
  return (
    <div className="App">
      <Header />
      <DashboardLayout>
        <StatsPanel />
        <IdeaAdoption />
        <RecentIdeas />
        <IdeaDiscovery />
        <Leaderboard />
        <StatusTracking />
        <ResourcesLibrary />
        <Navbar />
        <Metrics />
        <CTABox />
        <DevStatus />
      </DashboardLayout>
    </div>
  );
}

export default App;