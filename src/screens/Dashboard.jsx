import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from '../components/layout/Container';
import ScrollList from '../components/lists/ScrollList';

export default function Dashboard() {
  const games = [
    { image: './games/csgo.jpeg' },
    { image: './games/dota2.jpeg' },
    { image: './games/fifa22.jpeg' },
    { image: './games/fortnite.jpeg' },
    { image: './games/gtav.jpeg' },
    { image: './games/lol.jpeg' },
    { image: './games/minecraft.jpeg' },
    { image: './games/rocketleague.jpeg' },
    { image: './games/valorant.jpeg' },
    { image: './games/wow.jpeg' },
  ];
  const platforms = [
    { image: './platforms/steam.jpg' },
    { image: './platforms/riot.png' },
    { image: './platforms/blizzard.jpg' },
    { image: './platforms/origin.png', background: 'white' },
    { image: './platforms/playstation.jpeg' },
    { image: './platforms/xbox.jpeg' },
    { image: './platforms/switch.png' },
  ];

  function renderCard(item, index) {
    return (
      <li
        key={index}
        className="min-w-48 w-48 h-64 hover:scale-105 duration-300 cursor-pointer"
      >
        <img
          className={`h-full object-cover rounded-md ${
            item?.background && 'bg-' + item.background
          }`}
          src={item.image}
          alt="gamelogo"
        />
      </li>
    );
  }

  return (
    <Container>
      {/** HEADER */}
      <div className="flex flex-row justify-between">
        <h1 className="text-white font-medium text-2xl">Dashboard</h1>
        <div className="flex flex-row items-center gap-x-5">
          <FontAwesomeIcon className="text-white" size={'lg'} icon={faBell} />
          <div className="bg-theme-green h-8 w-8 rounded-full"></div>
        </div>
      </div>
      {/** BANNER */}
      <img
        src={'./banner.jpeg'}
        alt="banner"
        className="rounded-md w-full h-80 mt-6 object-fit"
      />
      {/** PLATFORM LIST */}
      <h3 className="text-white text-2xl mt-6 mb-2">Platforms</h3>
      <ScrollList data={platforms} renderItem={renderCard} horizontal />
      {/** GAME LIST */}
      <h3 className="text-white text-2xl mt-6 mb-2">Games</h3>
      <ScrollList data={games} renderItem={renderCard} horizontal />
    </Container>
  );
}
