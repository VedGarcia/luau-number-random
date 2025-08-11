interface ModalInputProps {
  modal: boolean;
  toggleModal: () => void;
  handleInput1: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInput2: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalInput: React.FC<ModalInputProps> = ({ modal, toggleModal, handleInput1, handleInput2 }) => {
  return (
    <>
      {modal ? (
        <div className="w-[80vw] h-auto lg:w-60 lg:h-60 bg-sky-400/30 p-4 rounded-lg shadow-lg m-2 absolute left-1 top-1 z-50">
          <button className="absolute top-4 right-4 cursor-pointer text-white" onClick={toggleModal} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <h4 className="text-center text-4xl text-white">Rango</h4>
          <input
            type="number"
            placeholder="max"
            pattern="[0-9]+"
            className="w-full p-2 my-2 border border-gray-300 rounded-lg outline-none  text-white text-xl"
            onChange={handleInput1}
          />
          <input
            placeholder="min"
            type="number"
            pattern="[0-9]+"
            className="w-full p-2 my-2 border border-gray-300 rounded-lg outline-none text-white text-xl"
            onChange={handleInput2}
          />
          <button className="w-24 p-1 my-2 border border-gray-300 text-white rounded-lg" onClick={toggleModal}>Ok</button>
        </div>
      ) : (
        <>
          <button
            onClick={toggleModal}
            className="absolute left-4 top-4 text-blue-300/60 cursor-pointer z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </>
      )}
    </>
  );
};

export default ModalInput;
