export default function CardPlatformGame({ item }) {
  return (
    <li className="min-w-48 w-48 h-64 hover:scale-105 duration-300 cursor-pointer">
      <img
        className={`h-full object-cover rounded-md ${
          item?.background && 'bg-' + item.background
        }`}
        src={item.image}
        alt="gamelogo"
      />
    </li>
  );
}
