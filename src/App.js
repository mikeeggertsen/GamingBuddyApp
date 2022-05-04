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
import { userState } from './recoil/atoms/user';
import { useRecoilValue } from 'recoil';
import { useCachedResources } from './hooks/useCachedResources';

export default function App() {
  const [open, setOpen] = useState(true);
  const isLoadingComplete = useCachedResources();
  const user = useRecoilValue(userState);

  if (!isLoadingComplete) {
    return (
      <div className="flex items-center justify-center bg-theme-light-dark">
        <h1 className="text-white text-9xl">LOADING</h1>
      </div>
    );
  }

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      <BrowserRouter>
        <Routes>
          {user ? (
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
  );
}
