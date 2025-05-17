import {LogoGlicareSvg} from "@svg/logo-glicare-svg";
import {GoogleIconSvg} from "@svg/google-icon-svg";
import Button from '@ui/button';
const Login = () => {
  return (
    <section className="bg-gray-ga mt-60 px-6 flex flex-col items-center gap-8 ">
      <LogoGlicareSvg width={188} height={66}/>
      <h1 className="title-large-ga text-center">
        Registro de glicose para pessoas com diabetes tipo 2.
      </h1>
      <Button width={18} icon={< GoogleIconSvg />} label="Entrar com o google" />

      <div className="title-small-ga text-center">
        <p>Ao fazer o login, você concorda com nossos</p>
        <a className="text-blue-ga-800" href="/">
          Termos de Uso e Política de Privacidade.
        </a>
      </div>
    </section>
  );
};

export default Login;
