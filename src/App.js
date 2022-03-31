import Sidebar from './components/navigation/Sidebar';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function App() {
  const platforms = [
    { image: 'tba' },
    { image: 'tba' },
    { image: 'tba' },
    { image: 'tba' },
    { image: 'tba' },
    { image: 'tba' },
  ];

  function ScrollList() {
    return (
      <div className="mt-12">
        <h2 className="text-white text-2xl mb-4">Platforms</h2>
        <ul className="flex flex-row gap-6 overflow-auto">
          {platforms.map((item, index) => (
            <li key={index} className="w-48 h-64 rounded-md bg-gray-500"></li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex-1 overflow-scroll px-24 py-8 bg-theme-light-dark">
        {/** HEADER */}
        <div className="flex flex-row justify-between">
          <h1 className="text-white font-medium text-2xl">Dashboard</h1>
          <div className="flex flex-row items-center gap-x-5">
            <FontAwesomeIcon className="text-white" size={'lg'} icon={faBell} />
            <div className="bg-theme-green h-8 w-8 rounded-full"></div>
          </div>
        </div>
        {/** BANNER */}
        <div className="bg-gray-500 rounded-md w-full h-80 mt-12"></div>
        {/** PLATFORM LIST */}
        <ScrollList />
        {/** GAME LIST */}
        <div className="mt-12">
          <h2 className="text-white text-2xl mb-4">Games</h2>
          <ul className="flex flex-row gap-6">
            {platforms.map((item, index) => (
              <li key={index} className="w-48 h-64 rounded-md bg-gray-500"></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
