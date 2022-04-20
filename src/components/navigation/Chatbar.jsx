import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollList from '../lists/ScrollList';

export default function Chatbar() {
  const buddies = [
    { username: 'Luca Ryholt', bio: 'Mostly into pc games' },
    { username: 'Mike Eggertsen', bio: "I'm the best csgo player ever" },
    { username: 'Asbjørn Garne', bio: 'I love The Witcher!' },
    { username: 'Phil Mykragen', bio: 'Give me anything animated' },
    {
      username: 'Hugh Jass',
      bio: 'Mainly playing on PS4 akwldjakwdjlkawjdlawkjdlakwjdlaj kawjdlkajwlk j',
    },
  ];

  const activities = [
    { username: 'Luca Ryholt', date: '30 min ago' },
    { username: 'Mike Eggertsen', date: '1 hour ago' },
    { username: 'Asbjørn Garne', date: '1 day ago' },
    { username: 'Asbjørn Garne', date: '1 day ago' },
    { username: 'Asbjørn Garne', date: '1 day ago' },
  ];

  function renderBuddy(item, index) {
    return (
      <div
        key={index}
        className="flex flex-row justify-between p-2 items-center w-56 h-18 rounded-md bg-theme-light-dark hover:scale-105 duration-300 cursor-pointer"
      >
        <div className="flex flex-row items-center">
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-theme-green mr-4">
            <FontAwesomeIcon className="text-white" icon={faUser} />
          </div>
          <div>
            <h5 className="font-medium text-sm text-white">{item.username}</h5>
            <p className="text-xs text-neutral-300 whitespace-nowrap overflow-hidden text-ellipsis w-32">
              {item.bio}
            </p>
          </div>
        </div>
        <FontAwesomeIcon className="text-white" icon={faChevronRight} />
      </div>
    );
  }

  function renderActivity(item, index) {
    return (
      <div
        key={index}
        className="flex flex-row justify-between p-2 items-center w-56 h-18 rounded-md bg-theme-light-dark"
      >
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-theme-green mr-4">
          <FontAwesomeIcon className="text-white" icon={faUser} />
        </div>
        <div className="flex-col flex-1">
          <h5 className="text-xs text-white">{`You've matched with ${item.username}`}</h5>
          <p className="text-2xs text-neutral-300">{item.date}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen min-w-[18rem] bg-theme-dark px-6 pt-4 overflow-y-scroll overflow-x-hidden hidden lg:block">
      <h3 className="text-white text-xl font-medium mt-4 mb-4">
        Recent buddies
      </h3>
      <ul className={` flex flex-col gap-6 p-2`}>
        {buddies.map((item, index) => renderBuddy(item, index))}
      </ul>
      <h3 className="text-white text-xl font-medium mt-4 mb-4">
        Recent activity
      </h3>
      <ul className={` flex flex-col gap-6 p-2`}>
        {activities.map((item, index) => renderActivity(item, index))}
      </ul>
    </div>
  );
}
