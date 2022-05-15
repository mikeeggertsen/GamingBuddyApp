import { useState } from 'react';
import CardBuddy from '../components/cards/CardBuddy';
import Container from '../components/layout/Container';
import InfiniteScrollList from '../components/lists/InfiniteScrollList';
import { getMatches, swipeOnUser } from '../requests/swipe';

const LIMIT = 10;

export default function Matches() {
  const [buddies, setBuddies] = useState([]);

  async function fetchBuddies(skip) {
    return await getMatches(skip, LIMIT);
  }

  async function swipe(id, status) {
    await swipeOnUser(id, status);
    const filtered = buddies.filter((item) => item.id !== id);
    setBuddies(filtered);
  }

  function renderMatch(item) {
    return <CardBuddy key={item.id} buddy={item} swipe={swipe} isMatch />;
  }

  function renderNoMatches() {
    return (
      <div className="flex flex-col h-full w-full justify-center items-center">
        <h2 className="text-white text-xl font-normal">
          You don't have any matches
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
      <h1 className="text-white text-2xl font-medium mb-4">Matches</h1>
      <InfiniteScrollList
        className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-12 h-full overflow-auto"
        items={buddies}
        setItems={setBuddies}
        getData={fetchBuddies}
        renderItem={renderMatch}
        renderEmptyListComponent={renderNoMatches}
        pagination={LIMIT}
      />
    </Container>
  );
}
