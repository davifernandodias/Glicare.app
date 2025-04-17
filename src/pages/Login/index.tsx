import Logo from "../../assets/logo.svg";
import GoogleIcon from "../../assets/googleIcon.svg";
import Button from "../../components/Button";
const Login = () => {
  return (
    <section className="bg-gray-ga mt-60 px-6 flex flex-col items-center gap-8 ">
      <img width={188} src={Logo} alt="Logo glicday" />
      <h1 className="title-large-ga text-center">
        Registro de glicose para pessoas com diabetes tipo 2.
      </h1>
      <Button width={18} icon={GoogleIcon} label="Entrar com o google" />

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
