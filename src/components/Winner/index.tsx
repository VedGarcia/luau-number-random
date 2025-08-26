import React from 'react';

interface WinnersProps {
  range: number[];
}

const Winners: React.FC<WinnersProps> = ({ range }) => {
  return (
    // He eliminado las clases de grid (row-span-3, col-start-5) para que el componente sea más reutilizable.
    // Puedes volver a añadirlas si son específicas de tu layout principal.
    <aside className="w-full p-4 md:p-10 relative z-30">
      <h4 className="text-white text-3xl md:text-5xl my-4 -translate-x-4 drop-shadow-xl">
        Ganadores
      </h4>
      {/* Se han eliminado las clases "overflow-auto", "h-full", "snap-y", y "snap-mandatory"
        para permitir que la lista crezca de forma natural con su contenido.
      */}
      <ol className="text-center">
        {range.map((a) => (
          <li key={a} className="mb-2">
            <p className="text-white text-4xl md:text-5xl font-bold mx-4 tracking-wide drop-shadow-xl">
              {a}
            </p>
            <hr className="text-white mt-2 opacity-25" />
          </li>
        ))}
      </ol>
    </aside>
  );
};

export default Winners;