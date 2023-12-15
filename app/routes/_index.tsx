import type { MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";
import { FiArrowRight } from "react-icons/fi";
import { GlowingButton } from "~/components/GlowingButton";
import titleImage from '~/images/wyrt-title.svg';

export const meta: MetaFunction = () => {
  return [
    { title: "Would You Rather Tech" },
    { name: "description", content: "Welcome to Would You Rather Tech!" },
  ];
};

export default function Home() {
  return (
    <div className="py-8 flex flex-col items-center gap-5 px-4 sm:px-8 md:px-12">
      <h1 className="text-2xl text-red-700">
        <span className="sr-only">Would You Rather Tech</span>
        <img src={titleImage} alt="Would You Rather Tech Title" />
      </h1>

      <div className="flex flex-col items-center gap-10 mdp:gap-5">
        <div className="flex flex-col items-center gap-8">
          <p className="py-1 px-[1.125rem] border border-gray text-gray rounded-full text-xs font-medium">Opções de jogo</p>

          <div className="grid mdp:grid-cols-[minmax(0,1fr),auto,minmax(0,1fr)] gap-10">
            <div className="max-w-[300px] min-w-[200px] w-full space-y-4 mdp:pt-3.5">
              <h2 className="text-center text-sm font-semibold">Como visitante</h2>
              <p className="text-sm font-medium text-text">Como <span className="text-red">visitante</span> você poderá disfrutar do jogo normalmente, mas seus votos e seções de jogo não serão salvos. Ou seja, na próxima vez que for jogar, algumas perguntas irão se repetir.</p>
            </div>

            <div role="separator" className="mdp:min-h-[200px] mdp:h-full mdp:w-0 w-full h-0 border-t mdp:border-l border-gray" />

            <div className="max-w-[300px] min-w-[200px] w-full space-y-4 mdp:pt-3.5">
              <h2 className="text-center text-sm font-semibold">Como registrado</h2>
              <p className="text-sm font-medium text-text">Enquanto estiver <span className="text-blue">registrado</span>, os votos e seções de jogo serão salvos e apenas perguntas novas aparecerão para você.</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <GlowingButton asChild>
            <NavLink to="/play">
              Vamos jogar!
            </NavLink>
          </GlowingButton>

          <a href="/#" className="flex items-center gap-1 font-semibold underline text-xs group">
            registrar com github
            <FiArrowRight size={12} strokeWidth={3} className="group-hover:animate-letsgo" />
          </a>
        </div>
      </div>
    </div>
  );
}
