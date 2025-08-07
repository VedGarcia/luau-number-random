// src/components/LuauTheme.tsx
import MegaDanceLogo from "../../../assets/images/mega-dance/logo-mega-dance.webp";
import FJUbuttom from "../../../assets/images/fju/iconFJU.png";


interface MegaDanceProps {
  range: number[];
  input1: number;
  input2: number;
  modal: boolean;
  sort: number;
  celebrate: boolean;
  toggleModal: () => void;
  handleInput1: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInput2: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlerSort: () => void;
theme: (theme: string | null) => void;
}

const MegaDance: React.FC<MegaDanceProps> = ({
 
  theme
}) => {
  return (
    <main className="w-full h-screen bg-linear-to-tr from-stone-800 via-black to-violet-950 overflow-hidden relative place-content-center">
      <img src={MegaDanceLogo} alt="Mega Dance Logo" className="hover:animate-pulse"/>

      <button className="absolute bottom-4 right-4 p-2 rounded-lg" onClick={() => theme(null)}><img src={FJUbuttom} alt="FJU" /></button>
    </main>
  );
};

export default MegaDance;