import React, { useState } from "react";
import ModalInput from "./components/InputModal";
import Winners from "./components/Winner";
import bgDegrade from "./assets/images/fondo.webp";
import winner from "./assets/images/winner.webp";
import Luau from "./assets/images/logo-luau.webp";
import thisTime from "./assets/images/this-time.webp";
import sortImage from "./assets/images/sort.webp";
import start from "./assets/images/start.webp";
import palmeras from "./assets/images/palmeras.png";
import DecryptedText from "./TextAnimations/DecryptedText/DecryptedText";

const App: React.FC = () => {
  const [range, setRange] = useState<number[]>([]);
  const [input1, setInput1] = useState<number>(0);
  const [input2, setInput2] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  const [sort, setSort] = useState<number>(0);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleInput1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput1(Number(e.target.value));
  };

  const handleInput2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput2(Number(e.target.value));
  };

  const numberRandom = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handlerSort = () => {
    if (input1 !== 0 && input2 !== 0) {
      let newSort;
      do {
        newSort = numberRandom(input1, input2);
      } while (range.includes(newSort));

      setSort(newSort);
      setTimeout(() => {
        setRange(prevRange => [...prevRange, newSort]);
      }, 3000);
      return newSort;
    }
  };

  return (
    <>
      <main className="w-full h-screen bg-sky-950 grid grid-cols-5 grid-rows-4 overflow-hidden relative">
        <img
          src={bgDegrade}
          alt="bg"
          className="absolute w-screen h-screen bottom-0 right-0 z-0 "
        />
        <img
          src={palmeras}
          alt="palmeras"
          className="absolute bottom-0 w-full aspect-auto opacity-60"
        />
        <aside className="w-full h-screen relative grid place-content-center row-span-5 col-start-1 row-start-1">
          <ModalInput
            toggleModal={toggleModal}
            handleInput1={handleInput1}
            handleInput2={handleInput2}
            modal={modal}
          />
          <div className="w-[50vw] h-3/4 relative z-20">
            <img
              src={thisTime}
              alt="Hora del"
              className="w-72 aspect-auto absolute right-40 z-20"
            />
            <img
              src={sortImage}
              alt="sorteo"
              className="w-[30rem] ml-52 my-4 aspect-auto"
            />
          </div>
        </aside>
        <section className="col-span-3 row-span-5 col-start-2 flex flex-col w-full h-auto text-center relative">
          <img src={Luau} alt="Luau" className="w-full absolute opacity-30" />
          <button
            className="w-96 m-auto animate-pulse hover:animate-none relative z-20 cursor-pointer"
            onClick={handlerSort}
          >
            <img src={start} alt="Start Luau" className="w-full aspect-auto" />
          </button>

          <div className="w-2/3 h-full m-auto relative z-20">
            <p className="text-[200px] text-orange-800 font-bold drop-shadow-xl font-[woodpecker] tracking-wide">
              <DecryptedText 
              text={sort.toString()}
              animateOn="view"
              speed={100}
              revealDirection='end'
              maxIterations={30}
              />
            </p>
            {sort !== 0 ? (
              <img
                src={winner}
                alt="winner"
                className="w-96 aspect-auto animate-bounce duraction-800 m-auto"
              />
            ) : (
              <p className="text-xl text-orange-600 font-semibold tracking-wide animate-pulse font-[woodtrap]">
                agrega un rango y presiona el botón Comenzar
              </p>
            )}
          </div>
        </section>
        <Winners range={range} />
      </main>
    </>
  );
};

export default App;
