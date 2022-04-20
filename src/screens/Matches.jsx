import { useState } from 'react';
import CardBuddy from '../components/cards/CardBuddy';
import Container from '../components/layout/Container';

const data = [
  { id: 1, username: '1', img: './gamer.jpeg' },
  { id: 2, username: '2', img: './gamer.jpeg' },
  { id: 3, username: '3', img: './gamer.jpeg' },
  { id: 4, username: '4', img: './gamer.jpeg' },
  { id: 5, username: '5', img: './gamer.jpeg' },
];

export default function Matches() {
  const [buddies, setBuddies] = useState(data);

  function removeBuddy(id) {
    const filtered = buddies.filter((item) => item.id !== id);
    setBuddies(filtered);
  }

  function renderMatch(item, index) {
    return <CardBuddy key={index} buddy={item} removeBuddy={removeBuddy} />;
  }

  return (
    <Container>
      <h1 className="text-white text-2xl font-medium mb-6">Matches</h1>
      <div className="flex flex-row flex-wrap gap-4">
        {buddies.map(renderMatch)}
      </div>
    </Container>
  );
}
