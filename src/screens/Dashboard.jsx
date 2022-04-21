import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import CardPlatformGame from '../components/cards/CardPlatformGame';
import Container from '../components/layout/Container';
import ScrollList from '../components/lists/ScrollList';

export default function Dashboard() {
  const games = [
    { name: 'CS:GO', image: './games/csgo.jpeg' },
    { name: 'Dota 2', image: './games/dota2.jpeg' },
    { name: 'Fifa 22', image: './games/fifa22.jpeg' },
    { name: 'Fortnite', image: './games/fortnite.jpeg' },
    { name: 'GTA V', image: './games/gtav.jpeg' },
    { name: 'LOL', image: './games/lol.jpeg' },
    { name: 'Minecraft', image: './games/minecraft.jpeg' },
    { name: 'Rocket League', image: './games/rocketleague.jpeg' },
    { name: 'Valorant', image: './games/valorant.jpeg' },
    { name: 'World of Warcraft', image: './games/wow.jpeg' },
  ];
  const platforms = [
    { name: 'Steam', image: './platforms/steam.jpg' },
    { name: 'Riot', image: './platforms/riot.png' },
    { name: 'Blizzard', image: './platforms/blizzard.jpg' },
    { name: 'Origin', image: './platforms/origin.png', background: 'white' },
    { name: 'Playstation', image: './platforms/playstation.jpeg' },
    { name: 'Xbox', image: './platforms/xbox.jpeg' },
    { name: 'Switch', image: './platforms/switch.png' },
  ];
  const navigate = useNavigate();

  function navigateToFindBuddies(filter) {
    navigate(`/findbuddies?filter=${filter}`);
  }

  function renderCard(item, index) {
    return (
      <CardPlatformGame
        key={index}
        item={item}
        onClick={navigateToFindBuddies}
      />
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
