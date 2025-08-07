// src/App.tsx
import React, { useState } from "react";
import Luau from "./components/Themes/Luau";
import Menu from "./components/Menu";

const App: React.FC = () => {
  const [range, setRange] = useState<number[]>([]);
  const [input1, setInput1] = useState<number>(0);
  const [input2, setInput2] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  const [sort, setSort] = useState<number>(0);
  const [celebrate, setCelebrate] = useState<boolean>(false);
  const [theme, setTheme] = useState<string | null>(null);

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
        setCelebrate(true);
      }, 4500);

      setTimeout(() => {
        setCelebrate(false);
      }, 12000);

      setTimeout(() => {
        setRange((prevRange) => [...prevRange, newSort]);
      }, 5000);
      return newSort;
    }
  };

  const renderContent = () => {
    if (theme === "luau") {
      return (
        <Luau
          range={range}
          input1={input1}
          input2={input2}
          modal={modal}
          sort={sort}
          celebrate={celebrate}
          toggleModal={toggleModal}
          handleInput1={handleInput1}
          handleInput2={handleInput2}
          handlerSort={handlerSort}
        />
      );
    }
    // Si se agrega otro tema, aquí podrías tener un `else if` o un `switch`
    return <Menu onSelectTheme={setTheme} />;
  };

  return <>{renderContent()}</>;
};

export default App;