import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import Spinner from '../spinners/Spinner';

export default function InfiniteScrollList({
  items,
  setItems,
  getData,
  renderItem,
  renderEmptyListComponent,
  className,
  pagination,
  reverse,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const isFetchable = useRef(true);
  const listRef = useRef();

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    if (isFetchable.current) {
      setIsLoading(true);
      isFetchable.current = false;
      const data = await getData(items.length);
      if (data.length < pagination) {
        isFetchable.current = false;
      } else {
        isFetchable.current = true;
      }
      if (reverse) {
        setItems((prev) => [...data, ...prev]);
      } else {
        setItems((prev) => [...prev, ...data]);
      }
      setIsLoading(false);
    }
  }

  function onScroll() {
    if (listRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;

      const hasReachedTop = clientHeight - scrollHeight === scrollTop;
      const hasReachedBottom = scrollTop + clientHeight === scrollHeight;

      if (hasReachedTop || hasReachedBottom) {
        fetchItems();
      }
    }
  }

  if (items.length === 0) {
    return renderEmptyListComponent();
  }

  return (
    <>
      <div onScroll={onScroll} ref={listRef} className={className}>
        {items.map(renderItem)}
      </div>
      {isLoading && (
        <div className="flex flex-row justify-center">
          <Spinner />
        </div>
      )}
    </>
  );
}
