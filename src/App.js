import Dashboard from './screens/Dashboard';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SidebarContext } from './context/SidebarContext';
import { useState } from 'react';
// screens
import FindBuddies from './screens/FindBuddies';
import Matches from './screens/Matches';
import Inbox from './screens/Inbox';
import Profile from './screens/Profile';
import LandingPage from './screens/LandingPage';
import { RecoilRoot } from 'recoil';

export default function App() {
  const [open, setOpen] = useState(true);
  const token = localStorage.getItem('token');

  return (
    <RecoilRoot>
      <SidebarContext.Provider value={{ open, setOpen }}>
        <BrowserRouter>
          <Routes>
            {token ? (
              <>
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/findbuddies" element={<FindBuddies />} />
                <Route exact path="/matches" element={<Matches />} />
                <Route exact path="/inbox" element={<Inbox />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route
                  exact
                  path="*"
                  element={<Navigate to={'/dashboard'} replace />}
                />
              </>
            ) : (
              <>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="*" element={<Navigate to={'/'} replace />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </SidebarContext.Provider>
    </RecoilRoot>
  );
}
