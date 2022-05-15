import {
  faClose,
  faGamepad,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollList from '../lists/ScrollList';
import { gameImageParser, platformImageParser } from '../../utils/imageParser';

export default function CardBuddy({ buddy, swipe, isMatch }) {
  function renderPlatformOrGame(item, index) {
    return (
      <img
        key={index}
        className={`h-8 w-8 rounded-md ${
          buddy.platforms.find(({ platform }) => platform === 'Origin')
            ? 'bg-white'
            : ''
        }`}
        src={item}
        alt="game"
      />
    );
  }

  return (
    <div className="h-96 w-full bg-theme-dark rounded-md flex flex-col justify-between p-4">
      <div className="flex flex-row items-center">
        <img
          src={'/gamer.jpeg'}
          alt="user"
          className="h-12 w-12 rounded-full mr-2"
        />
        <h5 className="text-white text-xl font-medium line-clamp-2">
          {buddy.username}
        </h5>
      </div>
      <div className="my-2">
        <h3 className="text-white font-medium">Bio</h3>
        <p className="text-xs text-neutral-300 line-clamp-3">{buddy.bio}</p>
      </div>
      <div>
        <h3 className="text-white font-medium">Platforms</h3>
        {buddy.platforms?.length > 0 ? (
          <ScrollList
            className={'gap-[1rem]'}
            data={buddy.platforms.map(({ platform }) =>
              platformImageParser(platform),
            )}
            renderItem={renderPlatformOrGame}
            horizontal
          />
        ) : (
          <p className="text-xs text-neutral-300 my-1">
            {buddy.username} is not on any platforms
          </p>
        )}
        <h3 className="text-white font-medium">Games</h3>
        {buddy.games?.length > 0 ? (
          <ScrollList
            className={'gap-[1rem]'}
            data={buddy.games.map(({ name }) => gameImageParser(name))}
            renderItem={renderPlatformOrGame}
            horizontal
          />
        ) : (
          <p className="text-xs text-neutral-300 mt-1">
            {buddy.username} is not playing any games
          </p>
        )}
      </div>
      <div className="flex flex-row justify-around">
        <div
          onClick={() => swipe(buddy.id, false)}
          className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
        >
          <FontAwesomeIcon
            className={'w-6 text-white'}
            icon={faClose}
            size={'lg'}
          />
        </div>
        {!isMatch ? (
          <div
            onClick={() => swipe(buddy.id, true)}
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
