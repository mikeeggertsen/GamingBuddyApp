import { useState } from 'react';
import Container from '../components/layout/Container';
import Modal from '../components/modals/Modals';
import { useDimensions } from '../hooks/useDimensions';
import { getMatches } from '../requests/swipe';
import InfiniteScrollList from '../components/lists/InfiniteScrollList';
import Chat from '../components/inbox/Chat';

const LIMIT = 10;

export default function Inbox() {
  const [selectedChat, setSelectedChat] = useState();
  const [matches, setMatches] = useState([]);
  const dimensions = useDimensions();
  const isMobile = dimensions?.width <= 1024;

  async function fetchMatches(skip) {
    return await getMatches(skip, LIMIT);
  }

  function handleSearchChange(event) {
    const search = event.target.value;
    const searchMatches = matches.map((item) => {
      const score = simpleSearch(item.username, search);
      item.score = score;
      return item;
    });
    const sortedMatches = searchMatches.sort((a, b) => b.score - a.score);
    setMatches(sortedMatches);
  }

  function simpleSearch(username, search) {
    let numOfConsecutiveChars = 0;
    for (let i = 0; i < username.length; i++) {
      if (search.length >= i) {
        if (
          username.toLowerCase().charAt(i) === search.toLowerCase().charAt(i)
        ) {
          numOfConsecutiveChars++;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    return numOfConsecutiveChars;
  }

  function renderChat(item, index) {
    return (
      <div
        onClick={() => setSelectedChat(item)}
        key={item.id}
        className={`px-4 py-2 border-theme-green min-h-[6rem] flex flex-col justify-around cursor-pointer ${
          index !== matches.length - 1 && 'border-b-[1px]'
        }`}
      >
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2">
            <img
              className="rounded-full h-10 w-10"
              src={'/gamer.jpeg'}
              alt="User"
            />
            <h3 className="text-sm text-white">{item.username}</h3>
          </div>
        </div>
      </div>
    );
  }

  function renderNoChat() {
    return (
      <div className="flex flex-col h-full w-full justify-center items-center">
        <h2 className="text-white text-xl font-normal">
          You don't have any matches and therefore no chats
        </h2>
        <p className="text-white text-xs font-normal mt-2">
          So what are you waiting for? Find your Gaming Buddy!
        </p>
        <img className="w-2/3 h-2/3" src="/findbuddies.svg" alt="No matches" />
      </div>
    );
  }

  return (
    <Container>
      <div className="w-full h-full">
        <h1 className="text-white text-2xl font-medium mb-4">Inbox</h1>
        <div className="flex flex-row w-full h-full">
          <div className="flex flex-col lg:min-w-[18rem] w-full lg:w-fit h-full">
            <input
              className="bg-theme-dark rounded-md px-4 py-1 mb-4 text-white"
              type="text"
              placeholder="Search"
              onChange={handleSearchChange}
            />
            <InfiniteScrollList
              className="flex flex-col bg-theme-dark h-full mb-4 rounded-md overflow-y-scroll"
              items={matches}
              setItems={setMatches}
              getData={fetchMatches}
              renderItem={renderChat}
              renderEmptyListComponent={renderNoChat}
              pagination={LIMIT}
            />
          </div>
          {!isMobile && matches?.length > 0 && (
            <div className="flex flex-1 bg-theme-dark md:mb-4 md:ml-4 relative rounded-md">
              {!!selectedChat ? (
                <Chat
                  selectedChat={selectedChat}
                  onDismiss={() => setSelectedChat(undefined)}
                />
              ) : (
                <div className="flex flex-col justify-center items-center w-full p-4">
                  <img src="/chat.svg" alt="Start chatting" />
                </div>
              )}
            </div>
          )}
          <Modal visible={!!selectedChat && isMobile}>
            <div className="bg-theme-light-dark w-full h-full relative pb-12">
              <Chat
                selectedChat={selectedChat}
                onDismiss={() => setSelectedChat(undefined)}
              />
            </div>
          </Modal>
        </div>
      </div>
    </Container>
  );
}
