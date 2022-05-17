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
            />
            <InfiniteScrollList
              className="flex flex-col bg-theme-dark h-full mb-4 rounded-md overflow-y-scroll"
              items={matches}
              setItems={setMatches}
              getData={fetchMatches}
              renderItem={renderChat}
              renderEmptyListComponent={() => <h1>No chats</h1>}
              pagination={LIMIT}
            />
          </div>
          {!isMobile && (
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
            <div className="bg-theme-light-dark w-full h-full relative">
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
