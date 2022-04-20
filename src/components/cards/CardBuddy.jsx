import {
  faClose,
  faGamepad,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollList from '../lists/ScrollList';

export default function CardBuddy({ buddy, removeBuddy, likeBuddy }) {
  function renderPlatformOrGame(item, index) {
    return (
      <img key={index} className="h-8 w-8 rounded-md" src={item} alt="game" />
    );
  }

  return (
    <div className="h-96 w-64 bg-theme-dark rounded-md flex flex-col justify-between p-4">
      <div className="flex flex-row items-center">
        <img
          src={buddy.img}
          alt="user"
          className="h-12 w-12 rounded-full mr-2"
        />
        <h5 className="text-white text-xl font-medium">{buddy.username}</h5>
      </div>
      <div className="my-2">
        <h3 className="text-white font-medium">Bio</h3>
        <p className="text-xs text-neutral-300 line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          aliquid adipisci nesciunt distinctio delectus Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Mollitia aliquid adipisci nesciunt
          distinctio delectus
        </p>
      </div>
      <div>
        <h3 className="text-white font-medium">Platforms</h3>
        <ScrollList
          className={'gap-[1rem]'}
          data={['./platforms/steam.jpg', './platforms/riot.png']}
          renderItem={renderPlatformOrGame}
          horizontal
        />
        <h3 className="text-white font-medium">Games</h3>
        <ScrollList
          className={'gap-[1rem]'}
          data={[
            './games/csgo.jpeg',
            './games/valorant.jpeg',
            './games/lol.jpeg',
          ]}
          renderItem={renderPlatformOrGame}
          horizontal
        />
      </div>
      <div className="flex flex-row justify-around">
        <div
          onClick={() => removeBuddy(buddy.id)}
          className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
        >
          <FontAwesomeIcon
            className={'w-6 text-white'}
            icon={faClose}
            size={'lg'}
          />
        </div>
        {likeBuddy ? (
          <div
            onClick={() => likeBuddy(buddy.id)}
            className="bg-theme-green rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
          >
            <FontAwesomeIcon
              className={'w-6 text-slate-700'}
              icon={faGamepad}
              size={'lg'}
            />
          </div>
        ) : (
          <div className="bg-theme-green rounded-full w-12 h-12 flex items-center justify-center cursor-pointer">
            <FontAwesomeIcon
              className={'w-6 text-slate-700'}
              icon={faPaperPlane}
              size={'lg'}
            />
          </div>
        )}
      </div>
    </div>
  );
}
