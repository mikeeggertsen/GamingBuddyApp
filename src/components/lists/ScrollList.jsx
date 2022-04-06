export default function ScrollList({
  data,
  renderItem,
  horizontal,
  className,
}) {
  return (
    <ul
      className={`${className} flex ${
        horizontal ? 'flex-row' : 'flex-col'
      } gap-6 overflow-x-auto p-2`}
    >
      {data.map((item, index) => renderItem(item, index))}
    </ul>
  );
}
