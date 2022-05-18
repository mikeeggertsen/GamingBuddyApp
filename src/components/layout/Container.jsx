import { useDimensions } from '../../hooks/useDimensions';
import Bottombar from '../bars/Bottombar';
import Sidebar from '../bars/Sidebar';

export default function Container({ children, scroll }) {
  const dimensions = useDimensions();
  const isMobile = dimensions?.width < 1024;
  return (
    <div className="flex">
      {isMobile ? <Bottombar /> : <Sidebar />}
      <div
        className={`h-screen w-screen overflow-hidden px-4 lg:px-20 pt-8 pb-24 md:pb-8 bg-theme-light-dark ${
          scroll && 'overflow-y-scroll'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
