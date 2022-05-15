import Chatbar from '../bars/Chatbar';
import Sidebar from '../bars/Sidebar';

export default function Container({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen w-screen overflow-hidden px-4 lg:px-20 py-8 bg-theme-light-dark">
        {children}
      </div>
    </div>
  );
}
