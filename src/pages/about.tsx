import { Button } from '@ui/button';
import { ArrowLeftIcon } from '@svg/arrow-left-icon-svg';
import { LogoGlicareSvg } from '@svg/logo-glicare-svg';
import { CollaboratorCard } from '@components/collaborator-card';


const About = () => {
  return (
    <section className="bg-gray-ga">
      <Button attr="m-2 hover:cursor-pointer" />

      <ArrowLeftIcon />
      <div className="flex flex-col p-6 items-center">

        <LogoGlicareSvg />
        <h3 className="headline-small-ga my-6">Sobre nós</h3>
        <section className="flex flex-col gap-2 body-small-ga max-w-2xl">
          <p className="text-justify">
            Somos uma equipe de voluntários que trabalhamos juntos para
            desenvolver uma aplicação que auxilia pessoas para controle e
            gerenciamento de glicemia tipo 2.
            <br />
            <br />
            Fazemos parte do Projeto Pipoca Ágil, projeto que tem como propósito
            mentorar profissionais a desenvolverem seus conhecimentos em
            metodologias ágeis utilizando o Framework Scrum.
          </p>
        </section>
        {/* COLABORADORES */}
        <section className="my-9">
          <CollaboratorCard />
        </section>
      </div>
    </section>
  );
};

export default About;
