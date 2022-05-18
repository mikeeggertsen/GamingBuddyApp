import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import CardPlatformGame from '../components/cards/CardPlatformGame';
import Container from '../components/layout/Container';
import ScrollList from '../components/lists/ScrollList';
import { userState } from '../recoil/atoms/user';

export default function Dashboard() {
  const games = [
    { name: 'CS:GO', image: './games/csgo.jpeg' },
    { name: 'Dota 2', image: './games/dota2.jpeg' },
    { name: 'Fifa 22', image: './games/fifa22.jpeg' },
    { name: 'Fornite', image: './games/fortnite.jpeg' },
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
    { name: 'PS', image: './platforms/playstation.jpeg' },
    { name: 'Xbox', image: './platforms/xbox.jpeg' },
    { name: 'Switch', image: './platforms/switch.png' },
  ];
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  function navigateToFindBuddies(platform, game) {
    navigate(`/findbuddies?platform=${platform}&game=${game}`);
  }

  function signOut() {
    localStorage.removeItem('token');
    setUser({});
    window.location = '/';
  }

  function renderCard(item, index, isPlatform) {
    return (
      <CardPlatformGame
        key={index}
        item={item}
        onClick={() =>
          navigateToFindBuddies(
            isPlatform ? item.name : '',
            isPlatform ? '' : item.name,
          )
        }
      />
    );
  }

  return (
    <Container scroll>
      {/** HEADER */}
      <div className="flex flex-row justify-between">
        <h1 className="text-white font-medium text-2xl">Dashboard</h1>
        <div className="flex flex-row items-center gap-x-5">
          <button
            onClick={signOut}
            className="bg-theme-green hover:opacity-80 text-white px-4 py-1 rounded-md text-sm"
          >
            Sign out
          </button>
        </div>
      </div>
      {/** BANNER */}
      <img
        src={'./banner.jpeg'}
        alt="banner"
        className="rounded-md w-full h-80 mt-6 object-cover md:object-fit"
      />
      {/** PLATFORM LIST */}
      <h3 className="text-white text-2xl mt-6 mb-2">Platforms</h3>
      <ScrollList
        data={platforms}
        renderItem={(item, index) => renderCard(item, index, true)}
        horizontal
      />
      {/** GAME LIST */}
      <h3 className="text-white text-2xl mt-6 mb-2">Games</h3>
      <ScrollList
        data={games}
        renderItem={(item, index) => renderCard(item, index, false)}
        horizontal
      />
    </Container>
  );
}
