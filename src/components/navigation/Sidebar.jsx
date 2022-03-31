import {
  faChevronLeft,
  faChevronRight,
  faHome,
  faGamepad,
  faInbox,
  faPlay,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const menuItems = [
    { title: 'Dashboard', icon: faHome },
    { title: 'Matches', icon: faUsers },
    { title: 'Platforms', icon: faGamepad },
    { title: 'Games', icon: faPlay },
    { title: 'Inbox', icon: faInbox },
  ];
  return (
    <div
      className={`${
        open ? 'w-72' : 'w-20'
      } relative duration-300 h-screen bg-theme-dark`}
    >
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="absolute bg-white flex justify-center items-center -right-3 top-9 w-7 h-7 border-2 rounded-full border-extra-dark-purple"
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
              className={`text-white hover:bg-gray-500 ${
                index === 0 && 'bg-gray-500'
              } rounded-md text-sm items-center flex gap-x-4 cursor-pointer p-2 mt-6`}
            >
              <FontAwesomeIcon
                className={'w-6 text-slate-700'}
                icon={item.icon}
                size={'lg'}
              />
              <h5 className={`${!open && 'scale-0'} origin-left duration-500`}>
                {item.title}
              </h5>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
