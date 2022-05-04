import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CardBuddy from '../components/cards/CardBuddy';
import Container from '../components/layout/Container';

const data = [
  { id: 1, username: '1', img: './gamer.jpeg' },
  { id: 2, username: '2', img: './gamer.jpeg' },
  { id: 3, username: '3', img: './gamer.jpeg' },
  { id: 4, username: '4', img: './gamer.jpeg' },
  { id: 5, username: '5', img: './gamer.jpeg' },
  { id: 6, username: '6', img: './gamer.jpeg' },
  { id: 7, username: '7', img: './gamer.jpeg' },
  { id: 8, username: '8', img: './gamer.jpeg' },
  { id: 9, username: '9', img: './gamer.jpeg' },
  { id: 10, username: '10', img: './gamer.jpeg' },
  { id: 11, username: '11', img: './gamer.jpeg' },
  { id: 12, username: '12', img: './gamer.jpeg' },
  { id: 13, username: '13', img: './gamer.jpeg' },
  { id: 14, username: '14', img: './gamer.jpeg' },
  { id: 15, username: '15', img: './gamer.jpeg' },
  { id: 16, username: '16', img: './gamer.jpeg' },
  { id: 17, username: '17', img: './gamer.jpeg' },
  { id: 18, username: '18', img: './gamer.jpeg' },
  { id: 19, username: '19', img: './gamer.jpeg' },
  { id: 20, username: '20', img: './gamer.jpeg' },
  { id: 21, username: '21', img: './gamer.jpeg' },
  { id: 22, username: '22', img: './gamer.jpeg' },
  { id: 23, username: '23', img: './gamer.jpeg' },
  { id: 24, username: '24', img: './gamer.jpeg' },
  { id: 25, username: '25', img: './gamer.jpeg' },
  { id: 26, username: '26', img: './gamer.jpeg' },
  { id: 27, username: '27', img: './gamer.jpeg' },
  { id: 28, username: '28', img: './gamer.jpeg' },
  { id: 29, username: '29', img: './gamer.jpeg' },
];

const PAGINATION = 10;

export default function FindBuddies() {
  const [buddies, setBuddies] = useState([]);
  const [canFetch, setCanFetch] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetchBuddies();
  }, []);

  useEffect(() => {
    if (!isLoading && buddies.length < 10) {
      fetchBuddies();
    }
  }, [buddies]);

  async function fetchBuddies() {
    if (!canFetch) return;
    // fetch buddies
    const searchParam = searchParams.get('filter');
    // brug searchParam i api kald
    const fetchedBuddies = data.slice(0, 10);
    // tjek om der er flere der kan fetches
    if (fetchedBuddies.length < PAGINATION) {
      // set can fetch til false hvis under forventet antal
      setCanFetch(false);
    }
    // tilføj buddies til state
    setBuddies((prev) => [...prev, ...fetchedBuddies]);
    setIsLoading(false);
  }

  function removeBuddy(id) {
    const filtered = buddies.filter((item) => item.id !== id);
    setBuddies(filtered);
  }

  function likeBuddy(id) {
    const filtered = buddies.filter((item) => item.id !== id);
    setBuddies(filtered);
  }

  function renderBuddy(item, index) {
    return (
      <CardBuddy
        key={index}
        buddy={item}
        likeBuddy={likeBuddy}
        removeBuddy={removeBuddy}
      />
    );
  }

  return (
    <Container>
      <h1 className="text-white text-2xl font-medium mb-6">Find Buddies</h1>
      {isLoading ? (
        <h1 className="text-white text-2xl">Loading...</h1>
      ) : (
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {buddies.map(renderBuddy)}
        </div>
      )}
    </Container>
  );
}
