// src/components/LuauTheme.tsx
import React from 'react';
import MegaDanceLogo from "../../../assets/images/mega-dance/logo-mega-dance.webp";
import BGMegaDance from "../../../assets/images/mega-dance/bgmd.webp";
import FJUbuttom from "../../../assets/images/fju/iconFJU.png";
import InputModal from "../../InputModal";
import DecryptedText from "../../../TextAnimations/DecryptedText/DecryptedText";
import start from "../../../assets/images/mega-dance/start.webp";
import Winners from "../../Winner";

// --- Interfaces y tipos ---
interface MegaDanceProps {
  range: number[];
  modal: boolean;
  sort: number;
  celebrate: boolean;
  toggleModal: () => void;
  handleInput1: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInput2: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlerSort: () => void;
  theme: (theme: string | null) => void;
}

// --- Componente Principal ---
const MegaDance: React.FC<MegaDanceProps> = ({
  range,
  modal,
  sort,
  celebrate,
  toggleModal,
  handleInput1,
  handleInput2,
  handlerSort,
  theme
}) => {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden text-center bg-linear-to-tr from-stone-800 via-black to-violet-950">
      {/* Imagen de fondo con opacidad */}
      <div
        style={{ backgroundImage: `url(${BGMegaDance})` }}
        className="absolute inset-0 bg-cover bg-center opacity-40"
      ></div>

      {/* Contenedor principal del layout de 3 columnas */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-center w-full max-w-7xl gap-8">
        {/* === COLUMNA IZQUIERDA: InputModal === */}
        <aside className="w-full lg:w-1/4 p-4 flex flex-col items-center">
          <InputModal
            toggleModal={toggleModal}
            handleInput1={handleInput1}
            handleInput2={handleInput2}
            modal={modal}
          />
        </aside>

        {/* === COLUMNA CENTRAL: Número Sorteado y Acción === */}
        <section className="relative z-20 w-full lg:w-2/4 p-4 flex flex-col items-center justify-center">
          <div className="relative flex flex-col items-center justify-center">
            {/* Contenedor del número para mantener el espacio */}
            <div className="h-[260px] flex items-center justify-center">
              <p className={`text-[16rem] ${celebrate ? 'animate-ping': 'animate-none' } text-violet-600 font-bold drop-shadow-xl tracking-wide leading-none`}>
                <DecryptedText
                  text={sort.toString()}
                  animateOn="view"
                  speed={100}
                  revealDirection="end"
                  maxIterations={45}
                />
              </p>
            </div>

            {/* --- INICIO DE LA MODIFICACIÓN --- */}
            {celebrate ? (
              <>
                {/* 1. La imagen del logo se sigue mostrando como antes */}
                <img
                  src={MegaDanceLogo}
                  alt="winner"
                  className="w-96 animate-bounce duration-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                {/* 2. Este es el marcador de posición invisible. Ocupa el mismo espacio que el párrafo. */}
                <div className="mt-4 h-7" aria-hidden="true"></div>
              </>
            ) : (
              // El párrafo se muestra normalmente cuando 'celebrate' es falso.
              <p className="text-sm mt-4 lg:text-xl text-violet-600 tracking-wide animate-pulse">
                Agrega un rango y presiona el botón para comenzar
              </p>
            )}
          </div>
          <button
            className="w-64 mt-8 animate-pulse hover:animate-none cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={handlerSort}
          >
            <img src={start} alt="Start Mega Dance" className="w-full" />
          </button>
        </section>

        {/* === COLUMNA DERECHA: Ganadores === */}
        <aside className="w-full lg:w-1/4 p-4 flex flex-col items-center">
          <div className="w-full">
            <Winners range={range} />
          </div>
        </aside>
      </div>

      {/* Botón para cambiar de tema */}
      <button
        className="absolute bottom-4 right-4 p-2 rounded-lg z-50 cursor-pointer transition-transform duration-300 hover:scale-110"
        onClick={() => theme(null)}
      >
        <img src={FJUbuttom} alt="FJU" className="w-12 h-12" />
      </button>
    </main>
  );
};

export default MegaDance;