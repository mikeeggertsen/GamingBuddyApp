import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal({ visible, children }) {
  return (
    <>
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 bg-theme-black-transparent ${
          visible ? 'visible' : 'hidden'
        }`}
      />
      <div
        className={`z-10 h-full w-full lg:justify-start lg:h-1/2 lg:w-1/2 bg-theme-dark border-2 border-theme-green absolute top-1/2 left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1/2 rounded-md p-4 duration-300 ${
          visible ? 'scale-100' : 'scale-0'
        }`}
      >
        {children}
      </div>
    </>
  );
}

export function ModalAddGame({ visible, onClose, onSubmit }) {
  return (
    <Modal visible={visible}>
      <div className="flex flex-row justify-between">
        <h1 className="text-white text-xl mb-12">Add game</h1>
        <FontAwesomeIcon
          onClick={onClose}
          className="text-white text-2xl cursor-pointer"
          icon={faClose}
        />
      </div>
      <form onSubmit={onSubmit} className="flex flex-col items-center gap-6">
        <select className="w-full py-2 rounded-md">
          <option defaultValue={0}>Choose a game</option>
          <option value={1}>Fortnite</option>
          <option value={2}>CS:GO</option>
          <option value={3}>Valorant</option>
          <option value={4}>League of Legends</option>
          <option value={5}>Rocket League</option>
          <option value={6}>FIFA 22</option>
          <option value={7}>Dota 2</option>
          <option value={8}>World of Warcraft</option>
          <option value={9}>GTA V</option>
          <option value={10}>Minecraft</option>
        </select>
        <button
          className="w-full bg-theme-green h-10 rounded-md text-white"
          type="submit"
        >
          Add
        </button>
      </form>
    </Modal>
  );
}

export function ModalAddPlatform({ visible, onClose, onSubmit }) {
  return (
    <Modal visible={visible}>
      <div className="flex flex-row justify-between">
        <h1 className="text-white text-xl mb-12">Add platform</h1>
        <FontAwesomeIcon
          onClick={onClose}
          className="text-white text-2xl cursor-pointer"
          icon={faClose}
        />
      </div>
      <form onSubmit={onSubmit} className="flex flex-col items-center gap-6">
        <select className="w-full py-2 rounded-md">
          <option defaultValue={0}>Choose a platform</option>
          <option value={1}>Steam</option>
          <option value={2}>Riot</option>
          <option value={3}>Blizzard</option>
          <option value={4}>Origin</option>
          <option value={5}>Playstation</option>
          <option value={6}>Xbox</option>
          <option value={7}>Switch</option>
        </select>
        <button
          className="w-full bg-theme-green h-10 rounded-md text-white"
          type="submit"
        >
          Add
        </button>
      </form>
    </Modal>
  );
}
