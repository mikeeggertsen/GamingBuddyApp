import {
  faChevronLeft,
  faChevronRight,
  faHome,
  faGamepad,
  faInbox,
  faUsers,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../../context/SidebarContext';
export default function Sidebar() {
  const { open, setOpen } = useContext(SidebarContext);

  const menuItems = [
    { title: 'Dashboard', icon: faHome, path: '/dashboard' },
    { title: 'Find buddies', icon: faGamepad, path: '/findbuddies' },
    { title: 'Matches', icon: faUsers, path: '/matches' },
    { title: 'Inbox', icon: faInbox, path: '/inbox' },
    { title: 'Profile', icon: faUser, path: '/profile' },
  ];
  return (
    <div
      className={`${
        open ? 'w-96' : 'w-20'
      } relative duration-300 h-screen bg-theme-dark`}
    >
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="absolute bg-white flex justify-center items-center -right-3 top-9 w-7 h-7 border-2 rounded-full"
      >
        <FontAwesomeIcon
          className={'cursor-pointer'}
          icon={open ? faChevronLeft : faChevronRight}
        />
      </div>
      <div className="flex flex-col p-4">
        <img
          src="./gaming.svg"
          alt="logo"
          className={`cursor-pointer h-32 w-32 p-2`}
        />
        <ul className="pt-6">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`text-white hover:bg-theme-light-dark ${
                item.path === window.location.pathname && 'bg-theme-light-dark'
              } rounded-md text-sm cursor-pointer mt-6`}
            >
              <Link
                className="items-center flex gap-x-4 p-2 py-4"
                to={item.path}
              >
                <FontAwesomeIcon
                  className={'w-6 text-slate-700'}
                  icon={item.icon}
                  size={'lg'}
                />
                <h5
                  className={`${!open && 'scale-0'} origin-left duration-500`}
                >
                  {item.title}
                </h5>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
