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
import { Link } from 'react-router-dom';
export default function Bottombar() {
  const menuItems = [
    { title: 'Dashboard', icon: faHome, path: '/dashboard' },
    { title: 'Find buddies', icon: faGamepad, path: '/findbuddies' },
    { title: 'Matches', icon: faUsers, path: '/matches' },
    { title: 'Inbox', icon: faInbox, path: '/inbox' },
    { title: 'Profile', icon: faUser, path: '/profile' },
  ];
  return (
    <div
      className={`h-fit py-2 fixed bottom-0 duration-300 w-screen bg-theme-dark z-20`}
    >
      <ul className="flex flex-row items-center justify-around">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link className="items-center flex gap-x-4 p-4" to={item.path}>
              <FontAwesomeIcon
                className={`${
                  item.path === window.location.pathname
                    ? 'text-theme-green'
                    : 'text-slate-700'
                }`}
                icon={item.icon}
                size={'lg'}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
