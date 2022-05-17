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

export function ModalAdd({ visible, onClose, title, placeholder, onSubmit }) {
  return (
    <Modal visible={visible}>
      <div className="flex flex-row justify-between">
        <h1 className="text-white text-xl mb-12">{title}</h1>
        <FontAwesomeIcon
          onClick={onClose}
          className="text-white text-2xl cursor-pointer"
          icon={faClose}
        />
      </div>
      <form onSubmit={onSubmit} className="flex flex-col items-center gap-6">
        <input
          className="rounded-md px-4 py-2 w-full"
          type="text"
          placeholder={placeholder}
        />
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
