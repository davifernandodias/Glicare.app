import { LogoGlicareSvg } from '@svg/logo-glicare-svg';
import { ProfileIconSvg } from '@svg/profile-icon-svg';
import { AddedIconSvg } from '@svg/added-icon-svg';
import { AboutIconSvg } from '@svg/about-icon-svg';
import { Button } from '@ui/button';
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-cover bg-center bg-no-repeat bg-[url(/public/png/background-Glicare.png)] ">
      <LogoGlicareSvg width={188} height={62}  className='mb-26'/>

      <section className="fixed bottom-0 flex justify-evenly bg-white w-screen p-4 ">
        <Button
          onClick={() => console.log("perfil")}
          attr="flex flex-col items-center text-center gap-1 w-14"
        >
          <ProfileIconSvg width={30} height={30} />
          <span className="label-large-ga ">Perfil</span>
        </Button>

        <Button
          onClick={() => console.log("Adicionar medição")}
          attr="flex flex-col  items-center text-center gap-1 w-36"
        >
          <AddedIconSvg width={36} height={36} />
          <span className="label-large-ga text-blue-ga-800">
            Adicionar medição
          </span>
        </Button>

        <Button
          onClick={() => console.log("Sobre Nós")}
          attr="flex flex-col items-center text-center gap-0.5"
        >
          <AboutIconSvg width={31} height={31} />
          <span className="label-large-ga">Sobre nós</span>
        </Button>
      </section>
    </div>
  );
};

export default Home;
