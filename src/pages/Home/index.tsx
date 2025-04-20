import PerfilIcon from "../../assets/perfil-icon.svg";
import AboutIcon from "../../assets/about-icon.svg";
import AddIcon from "../../assets/add-icon.svg";
import LogoGlicare from "../../assets/logo.svg";
const Home = () => {
  return (
    <div className="flex flex-col items-center h-screen w-screen bg-cover bg-center bg-no-repeat bg-[url(/public/background-Glicare.svg)] ">
      <img className="mt-72" src={LogoGlicare} alt="Logo Glicare" />

      <footer className="fixed bottom-0 flex justify-evenly bg-white w-screen p-4 ">
        <button
          onClick={() => console.log("perfil")}
          className="flex flex-col items-center text-center gap-1 w-14"
        >
          <img className="w-9" src={PerfilIcon} alt="" />
          <span className="label-large-ga ">Perfil</span>
        </button>

        <button
          onClick={() => console.log("Adicionar medição")}
          className="flex flex-col  items-center text-center gap-1 w-36"
        >
          <img className="w-9" src={AddIcon} alt="" />
          <span className="label-large-ga text-blue-ga-800">
            Adicionar medição
          </span>
        </button>

        <button
          onClick={() => console.log("Sobre Nós")}
          className="flex flex-col items-center text-center gap-0.5"
        >
          <img className="w-9" src={AboutIcon} alt="" />
          <span className="label-large-ga">Sobre nós</span>
        </button>
      </footer>
    </div>
  );
};

export default Home;
