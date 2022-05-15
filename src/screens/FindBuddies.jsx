import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CardBuddy from '../components/cards/CardBuddy';
import Container from '../components/layout/Container';
import InfiniteScrollList from '../components/lists/InfiniteScrollList';
import { swipeOnUser } from '../requests/swipe';
import { getUsers } from '../requests/users';

const LIMIT = 10;

export default function FindBuddies() {
  const [buddies, setBuddies] = useState([]);
  const [searchParams] = useSearchParams();
  const platform = searchParams.get('platform');
  const game = searchParams.get('game');

  async function fetchBuddies(skip) {
    return await getUsers(skip, LIMIT, platform, game);
  }

  async function swipe(id, status) {
    await swipeOnUser(id, status);
    const filtered = buddies.filter((item) => item.id !== id);
    setBuddies(filtered);
  }

  function renderBuddy(item) {
    return <CardBuddy key={item.id} buddy={item} swipe={swipe} />;
  }

  function renderNoUsers(item) {
    return (
      <div className="flex flex-col h-full w-full justify-center items-center">
        <h2 className="text-white text-xl font-normal">
          We didn't find any Buddies
        </h2>
        <p className="text-white text-xs font-normal mt-2">
          But don't worry! We are sure they will come soon
        </p>
        <img className="w-2/3 h-2/3" src="/findbuddies.svg" alt="No users" />
      </div>
    );
  }

  return (
    <Container>
      <h1 className="text-white text-2xl font-medium mb-4">Find Buddies</h1>
      <InfiniteScrollList
        className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-12 h-full overflow-auto"
        items={buddies}
        setItems={setBuddies}
        getData={fetchBuddies}
        renderItem={renderBuddy}
        renderEmptyListComponent={renderNoUsers}
        pagination={LIMIT}
      />
    </Container>
  );
}
