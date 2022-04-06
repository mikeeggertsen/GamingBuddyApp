import Dashboard from './screens/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SidebarContext } from './context/SidebarContext';
import { useState } from 'react';
// screens
import FindBuddies from './screens/FindBuddies';
import Matches from './screens/Matches';
import Inbox from './screens/Inbox';

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
        </Routes>
      </BrowserRouter>
    </SidebarContext.Provider>
  );
}
