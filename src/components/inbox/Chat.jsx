import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms/user';
import { getAllMessages, sendMessage } from '../../requests/messages';

export default function Chat({ selectedChat, onDismiss }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const user = useRecoilValue(userState);

  useEffect(() => {
    if (!!selectedChat) {
      fetchMessages();
    }
  }, [selectedChat]);

  async function fetchMessages() {
    const data = await getAllMessages(selectedChat.id);
    setMessages(data);
  }

  function handleInputChange(e) {
    const msg = e.target.value;
    setInput(msg);
  }

  async function send() {
    if (!input) {
      return;
    }
    const id = await sendMessage(selectedChat.id, input);
    const msg = {
      id,
      content: input,
      createdAt: Date.now(),
      user: {
        id: selectedChat.id,
        username: selectedChat.username,
      },
    };
    setMessages((prev) => [msg, ...prev]);
    setInput('');
  }

  function renderMessage(item) {
    const ownMsg = user.id !== item.user.id;
    return (
      <div key={item.id} className="w-full">
        <div
          className={
            ownMsg ? 'flex gap-2 flex-row-reverse' : 'flex gap-2 flex-row'
          }
        >
          <img
            className="rounded-full h-8 w-8"
            src={'/gamer.jpeg'}
            alt="User"
          />
          <div className="flex flex-col w-full">
            <div
              className={
                ownMsg
                  ? 'bg-theme-blue px-2 py-2 rounded-l-md rounded-br-md'
                  : 'bg-gray-200 px-2 py-2 rounded-r-md rounded-bl-md'
              }
            >
              <p className={ownMsg ? 'text-sm text-white' : 'text-sm'}>
                {item.content}
              </p>
            </div>
            <p className="text-[10px] text-gray-400">
              {dayjs(item.sentAt).format('D MMM hh.mm a')}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!selectedChat) {
    return null;
  }

  return (
    <div className="w-full h-full">
      <div className="flex flex-row justify-between bg-theme-light-dark lg:bg-theme-dark absolute top-0 p-4 w-full rounded-t-md">
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full h-10 w-10"
            src={'/gamer.jpeg'}
            alt="User"
          />
          <h3 className="text-sm text-white">{selectedChat.username}</h3>
        </div>
        <button className="text-white" onClick={onDismiss}>
          Close
        </button>
      </div>
      <div className="flex flex-col-reverse h-full gap-4 overflow-y-scroll p-4 pt-24">
        <div className="flex flex-row w-full relative rounded-md ">
          <textarea
            className="bg-gray-200 w-full rounded-md px-4 py-2 text-sm"
            type="text"
            placeholder="Write your message"
            onChange={handleInputChange}
            value={input}
          />
          <FontAwesomeIcon
            onClick={send}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-theme-blue text-xl cursor-pointer"
            icon={faPaperPlane}
          />
        </div>
        {messages.map(renderMessage)}
      </div>
    </div>
  );
}
