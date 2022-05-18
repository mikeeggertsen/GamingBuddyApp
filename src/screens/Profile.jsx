import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import CardPlatformGame from '../components/cards/CardPlatformGame';
import Container from '../components/layout/Container';
import ScrollList from '../components/lists/ScrollList';
import { ModalAddPlatform, ModalAddGame } from '../components/modals/Modals';
import { userState } from '../recoil/atoms/user';
import {
  addGameToProfile,
  addPlatformToProfile,
  updateUser,
} from '../requests/users';
import { gameImageParser, platformImageParser } from '../utils/imageParser';

export default function Profile() {
  const [user, setUser] = useRecoilState(userState);
  const [updateState, setUpdateState] = useState(user);
  const [showAddPlatform, setShowAddPlatform] = useState(false);
  const [showAddGame, setShowAddGame] = useState(false);
  const [prompt, setPrompt] = useState('');
  let promptTimeout = useRef();

  useEffect(() => {
    setUpdateState(user);
  }, [user]);

  useEffect(() => {
    clearTimeout(promptTimeout.current);
    if (prompt) {
      promptTimeout.current = setTimeout(() => {
        setPrompt('');
      }, 3000);
    }
  }, [prompt]);

  async function saveProfile() {
    const { password, repeatPassword } = updateState;
    if (password !== repeatPassword) {
      setPrompt({ error: true, msg: 'Passwords does not match' });
      return;
    }
    await updateUser(updateState);
    setUser({ ...updateState, password: '', repeatPassword: '' });
    setPrompt({ error: false, msg: 'Your profile has been updated' });
  }

  function setUpdateProperty(property) {
    setUpdateState({ ...updateState, ...property });
  }

  async function addPlatform(event) {
    event.preventDefault();
    setShowAddPlatform(false);
    const { selectedIndex } = event.target[0].options;
    const { value, text } = event.target[0].options[selectedIndex];
    const id = Number(value);
    if (id === 0 || user.platforms?.find((item) => item.id === id)) {
      return;
    }
    await addPlatformToProfile(id);
    setUpdateProperty({
      platforms: [...updateState.platforms, { id, platform: text }],
    });
    event.target[0].value = 0;
  }

  async function addGame(event) {
    event.preventDefault();
    setShowAddGame(false);
    const { selectedIndex } = event.target[0].options;
    const { value, text } = event.target[0].options[selectedIndex];
    const id = Number(value);
    if (id === 0 || user.games?.find((item) => item.id === id)) {
      return;
    }
    await addGameToProfile(id);
    setUpdateProperty({
      games: [...updateState.games, { id, name: text }],
    });
    event.target[0].value = 0;
  }

  function renderGameCard(item) {
    const game = { ...item };
    game.image = gameImageParser(item.name);
    return <CardPlatformGame key={game.id} item={game} />;
  }

  function renderPlatformCard(item) {
    const platform = { ...item };
    platform.image = platformImageParser(item.platform);
    return <CardPlatformGame key={item.id} item={platform} />;
  }

  function EmptyCard({ text }) {
    return (
      <div className="border border-white p-6 flex items-center rounded-md min-w-48 w-48 h-64">
        <p className="text-white text-center text-xs">{text}</p>
      </div>
    );
  }

  function renderEmptyGame() {
    return <EmptyCard text={'Add new games to find buddies to play with'} />;
  }

  function renderEmptyPlatform() {
    return (
      <EmptyCard text={'Add new platforms to find buddies to play with'} />
    );
  }

  return (
    <Container scroll>
      <div className="relative">
        {prompt && (
          <div
            className={`${
              prompt.error ? 'bg-red-400' : 'bg-theme-green'
            } fixed bottom-4 text-white text-center text-14 w-2/3 py-4 left-1/2 -translate-x-1/2 rounded-md z-10`}
          >
            <p>{prompt.msg}</p>
          </div>
        )}
        <h1 className="text-white text-2xl p-2">Profile</h1>
        {!user ? (
          <h1 className="text-white text-2xl p-2">Loading...</h1>
        ) : (
          <>
            <div className="flex flex-col items-center">
              <img
                className="h-32 w-32 rounded-full"
                src={'gamer.jpeg'}
                alt="avatar"
              />
            </div>
            <div className="flex flex-col">
              <input
                className="rounded-md px-4 py-2 my-6"
                type={'text'}
                value={updateState.username}
                placeholder="Username"
                onChange={(e) =>
                  setUpdateProperty({ username: e.target.value })
                }
              />
              <textarea
                className="rounded-md px-4 py-2 mb-6"
                type={'text'}
                value={updateState.bio ?? ''}
                placeholder="Bio"
                rows={6}
                onChange={(e) => setUpdateProperty({ bio: e.target.value })}
              />
              <input
                className="rounded-md px-4 py-2 mb-6"
                type={'password'}
                value={updateState.password}
                placeholder="Password"
                onChange={(e) =>
                  setUpdateProperty({ password: e.target.value })
                }
              />
              <input
                className="rounded-md px-4 py-2 mb-6"
                type={'password'}
                value={updateState.repeatPassword}
                placeholder="Repeat password"
                onChange={(e) =>
                  setUpdateProperty({ repeatPassword: e.target.value })
                }
              />
              <div className="flex flex-col items-center justify-center">
                <button
                  onClick={saveProfile}
                  className="text-white bg-theme-green hover:bg-theme-green-dark duration-300 w-32 py-2 rounded-md"
                >
                  Save
                </button>
              </div>
              {/** PLATFORM LIST */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white text-2xl">Platforms</h3>
                <button
                  onClick={() => setShowAddPlatform(true)}
                  className="text-white text-md bg-theme-green w-8 rounded-md h-fit hover:bg-theme-green-dark duration-300"
                >
                  <FontAwesomeIcon icon={faAdd} size="sm" />
                </button>
              </div>
              <ScrollList
                data={updateState.platforms}
                renderItem={renderPlatformCard}
                horizontal
                emptyListComponent={renderEmptyPlatform}
              />
              <br />
              {/** GAME LIST */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white text-2xl">Games</h3>
                <button
                  onClick={() => setShowAddGame(true)}
                  className="text-white text-md bg-theme-green w-8 rounded-md h-fit hover:bg-theme-green-dark duration-300"
                >
                  <FontAwesomeIcon icon={faAdd} size="sm" />
                </button>
              </div>
              <ScrollList
                data={updateState.games}
                renderItem={renderGameCard}
                horizontal
                emptyListComponent={renderEmptyGame}
              />
            </div>
          </>
        )}
        <ModalAddPlatform
          onSubmit={addPlatform}
          visible={showAddPlatform}
          onClose={() => setShowAddPlatform(false)}
        />
        <ModalAddGame
          onSubmit={addGame}
          visible={showAddGame}
          onClose={() => setShowAddGame(false)}
        />
      </div>
    </Container>
  );
}
