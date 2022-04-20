import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useState } from 'react';
import CardPlatformGame from '../components/cards/CardPlatformGame';
import Container from '../components/layout/Container';
import ScrollList from '../components/lists/ScrollList';
import { ModalAdd } from '../components/modals/Modals';

export default function Profile() {
  const [user, setUser] = useState();
  const [showAddPlatform, setShowAddPlatform] = useState(false);
  const [showAddGame, setShowAddGame] = useState(false);

  useEffect(() => {
    //fetch user
    setUser({
      username: 'GamerDude',
      bio: 'Im a gamer',
      img: 'gamer.jpeg',
      platforms: [
        { image: './platforms/steam.jpg' },
        { image: './platforms/origin.png', background: 'white' },
        { image: './platforms/playstation.jpeg' },
      ],
      games: [
        { image: './games/csgo.jpeg' },
        { image: './games/dota2.jpeg' },
        { image: './games/fifa22.jpeg' },
      ],
    });
  }, []);

  function saveProfile() {
    console.log('Saving profile');
  }

  function setUserProperty(property) {
    setUser({ ...user, ...property });
  }

  function addPlatform(event) {
    event.preventDefault();
    setShowAddPlatform(false);
    console.log('Adding platform', event.target[0].value);
    event.target[0].value = '';
  }

  function addGame(event) {
    event.preventDefault();
    setShowAddPlatform(false);
    console.log('Adding game', event.target[0].value);
    event.target[0].value = '';
  }

  function renderCard(item, index) {
    return <CardPlatformGame key={index} item={item} />;
  }

  return (
    <Container>
      <h1 className="text-white text-2xl p-2">Profile</h1>
      {!user ? (
        <h1 className="text-white text-2xl p-2">Loading...</h1>
      ) : (
        <>
          <div className="flex flex-col items-center">
            <img
              className="h-32 w-32 rounded-full"
              src={user.img}
              alt="avatar"
            />
          </div>
          <div className="flex flex-col">
            <input
              className="rounded-md px-4 py-2 my-6"
              type={'text'}
              value={user.username}
              placeholder="Username"
              onChange={(e) => setUserProperty({ username: e.target.value })}
            />
            <textarea
              className="rounded-md px-4 py-2 mb-6"
              type={'text'}
              value={user.bio}
              placeholder="Bio"
              rows={6}
              onChange={(e) => setUserProperty({ bio: e.target.value })}
            />
            {/** PLATFORM LIST */}
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl">Platforms</h3>
              <button className="text-white text-md bg-theme-green w-8 rounded-md h-fit hover:bg-theme-green-dark duration-300">
                <FontAwesomeIcon
                  onClick={() => setShowAddPlatform(true)}
                  icon={faAdd}
                  size="sm"
                />
              </button>
            </div>
            <ScrollList
              data={user.platforms}
              renderItem={renderCard}
              horizontal
            />
            {/** GAME LIST */}
            <div className="flex items-center justify-between">
              <h3 className="text-white text-2xl">Games</h3>
              <button className="text-white text-md bg-theme-green w-8 rounded-md h-fit hover:bg-theme-green-dark duration-300">
                <FontAwesomeIcon
                  onClick={() => setShowAddGame(true)}
                  icon={faAdd}
                  size="sm"
                />
              </button>
            </div>
            <ScrollList data={user.games} renderItem={renderCard} horizontal />
          </div>
        </>
      )}
      <ModalAdd
        title={'Add Platform'}
        placeholder={'Platform'}
        onSubmit={addPlatform}
        visible={showAddPlatform}
        onClose={() => setShowAddPlatform(false)}
      />
      <ModalAdd
        title={'Add Game'}
        placeholder={'Game'}
        onSubmit={addGame}
        visible={showAddGame}
        onClose={() => setShowAddGame(false)}
      />
      <div className="flex flex-col items-center justify-center mt-6">
        <button
          onClick={saveProfile}
          className="text-white bg-theme-green hover:bg-theme-green-dark duration-300 w-32 py-2 rounded-md"
        >
          Save
        </button>
      </div>
    </Container>
  );
}
