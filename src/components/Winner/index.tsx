
interface WinnersProps {
  range: number[];
}

const Winners: React.FC<WinnersProps> = ({ range }) => {
  return (
    <aside className="hidden lg:block w-full p-10 relative z-30 row-span-3 col-start-5">
      <h4 className="text-white text-6xl my-4 -translate-x-4 font-[woodtrap] drop-shadow-xl">Ganadores</h4>
      <ol className="text-center overflow-auto h-full snap-y snap-mandatory">
        {range.map((a) => (
          <li key={a}>
            <p className="text-white text-5xl font-bold mx-4 font-[woodtrap] tracking-wide drop-shadow-xl snap-center snap-always">{a}</p>
            <hr className="text-white"/>
          </li>
        ))}
      </ol>
    </aside>
  );
};

export default Winners;
