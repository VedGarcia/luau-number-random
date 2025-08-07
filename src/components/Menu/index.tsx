
interface MenuProps {
  onSelectTheme: (theme: string) => void;
}

const Menu: React.FC<MenuProps> = ({ onSelectTheme }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Selecciona un tema</h1>
      <div className="space-y-4">
        <button
          className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg text-xl font-semibold transition-colors duration-300"
          onClick={() => onSelectTheme("luau")}
        >
          Luau
        </button>
        <button
          className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-lg text-xl font-semibold transition-colors duration-300"
          onClick={() => onSelectTheme("otro-tema")}
        >
          Otro Tema
        </button>
        {/* Agrega más botones aquí para otros temas */}
      </div>
    </div>
  );
};

export default Menu;