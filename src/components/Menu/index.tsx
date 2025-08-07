import FJUlogo from "../../assets/images/fju/LOGO FJU VENEZUELA.png";
import LuauLogo from "../../assets/images/luau/logo-luau.webp";
import MegaDanceLogo from "../../assets/images/mega-dance/logo-mega-dance.webp";

interface MenuProps {
  onSelectTheme: (theme: string) => void;
}

const Menu: React.FC<MenuProps> = ({ onSelectTheme }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-linear-to-tr from-red-900 to-blue-950 text-white">
      <div className="w-2/3 h-2/3 max-w-56 max-h-56">
        <img src={FJUlogo} alt="FJU" className="w-full h-full"/>
      </div>

      <h1 className="text-4xl font-bold mb-8 font">Eventos FJU</h1>
      <div className="space-y-4">
        <button
          className="w-60 h-60 duration-300 cursor-pointer"
          onClick={() => onSelectTheme("luau")}
        >
          <img src={LuauLogo} alt="Luau" className="w-full object-contain" />
        </button>
         <button
          className="w-60 h-60 duration-300 cursor-pointer"
          onClick={() => onSelectTheme("mega-dance")}
        >
          <img src={MegaDanceLogo} alt="Mega Dance" className="w-full object-contain" />
        </button>
      </div>
    </div>
  );
};

export default Menu;