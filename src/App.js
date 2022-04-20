import Dashboard from './screens/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SidebarContext } from './context/SidebarContext';
import { useState } from 'react';
// screens
import FindBuddies from './screens/FindBuddies';
import Matches from './screens/Matches';
import Inbox from './screens/Inbox';
import Profile from './screens/Profile';

export default function App() {
  const [open, setOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/findbuddies" element={<FindBuddies />} />
          <Route exact path="/matches" element={<Matches />} />
          <Route exact path="/inbox" element={<Inbox />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </SidebarContext.Provider>
  );
}
