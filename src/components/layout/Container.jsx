import Chatbar from '../navigation/Chatbar';
import Sidebar from '../navigation/Sidebar';

export default function Container({ children, showActivies }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen w-screen overflow-auto px-4 lg:px-20 py-8 bg-theme-light-dark">
        {children}
      </div>
      <Chatbar />
    </div>
  );
}
