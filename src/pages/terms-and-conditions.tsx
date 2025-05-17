import { useState } from "react";
import { ArrowLeftIcon } from "@svg/arrow-left-icon-svg";
import { Button } from "@/components/ui/button";
const TermsAndConditions = () => {
  const [disable, setDisable] = useState(true);
  return (
    <section className="bg-gray-ga">
      <Button attr="m-2 hover:cursor-pointer">
        <ArrowLeftIcon />
      </Button>
      <h3 className="headline-small-ga text-center mx-10">
        Termos de Uso e Politica de Privacidade
      </h3>
      <section className="flex flex-col gap-6 m-6 h-96 overflow-y-auto">
        <p className="label-large-ga">
          1.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="body-medium-ga">
          Integer enim risus, elementum eget enim sed, vestibulum feugiat
          sapien. Morbi a felis massa.
        </p>
        <p className="label-large-ga">
          2.Phasellus nec erat ut felis dignissim fringilla eu mattis est. Duis
          faucibus a massa vitae vehicula.
        </p>
        <p className="body-medium-ga">Aliquam dictum eleifend sodales. </p>
        <p className="label-large-ga">
          3.Nullam ultricies, elit tincidunt ornare venenatis, massa felis
          auctor justo, a tempor risus nibh vitae purus.
        </p>
        <p className="body-medium-ga">
          Pellentesque sit amet tellus fermentum est interdum fringilla dictum
          quis dui. Sed interdum suscipit lectus, ut maximus purus.
        </p>
        <p className="label-large-ga">
          4.Donec enim erat, convallis vel pulvinar at, condimentum sed
          magna.Vivamus sit amet quam pretium, rutrum mauris non, elementum
          nisi.
        </p>
        <p className="body-medium-ga">
          Ut consectetur quis nulla id convallis. Aliquam at leo et tortor
          placerat interdum sed vel urna. Suspendisse non vehicula sapien.
        </p>
      </section>
      <footer className="flex flex-col items-center ">
        <div className="flex gap-1 m-6">
          <input
            onChange={() => setDisable(!disable)}
            type="checkbox"
            name="Aceito"
            id=""
          />
          <span className="body-small-ga m-2">
            Li e aceito os{" "}
            <span className="label-medium-ga">
              Termos de Uso e Politica de Privacidade.{" "}
            </span>
          </span>
        </div>
        <Button label="Continuar" disable={disable} />
      </footer>
    </section>
  );
};

export default TermsAndConditions;
