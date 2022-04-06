import Container from '../components/layout/Container';
import ScrollList from '../components/lists/ScrollList';

export default function FindBuddies() {
  const buddies = [
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
    { username: 'test', img: './gamer.jpeg' },
  ];

  function renderPlatformOrGame(item, index) {
    return (
      <img key={index} className="h-8 w-8 rounded-md" src={item} alt="game" />
    );
  }

  function renderBuddy(item, index) {
    return (
      <div className="h-80 w-64 bg-theme-dark rounded-md relative" key={index}>
        <div className="absolute top-0 left-0 p-6">
          <div className="flex flex-row">
            <img
              src={item.img}
              alt="user"
              className="h-8 w-8 rounded-full mr-2"
            />
            <h5 className="text-white">{item.username}</h5>
          </div>
          <div>
            <h3 className="text-white">Bio</h3>
            <p className="text-xs text-neutral-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              aliquid adipisci nesciunt distinctio delectus{' '}
            </p>
          </div>
          <div>
            <h3 className="text-white">Platforms</h3>
            <ScrollList
              className={'gap-2 p-0 my-2'}
              data={['./platforms/steam.jpg', './platforms/riot.png']}
              renderItem={renderPlatformOrGame}
              horizontal
            />
          </div>
          <div>
            <h3 className="text-white">Games</h3>
            <ScrollList
              className={'gap-2 p-0 mt-2'}
              data={[
                './games/csgo.jpeg',
                './games/valorant.jpeg',
                './games/lol.jpeg',
              ]}
              renderItem={renderPlatformOrGame}
              horizontal
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Container>
      <h1 className="text-white text-2xl font-medium">Find Buddies</h1>
      <div className="flex flex-row">
        <ScrollList
          className={'flex-wrap'}
          data={buddies}
          renderItem={renderBuddy}
          horizontal
        />
      </div>
    </Container>
  );
}
