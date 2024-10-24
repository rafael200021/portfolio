import { Dialog } from "primereact/dialog";
import React, { useEffect, useRef, useState } from "react";
import { IProjeto } from "../Interfaces/IProjeto";
import Badge from "./Badge";

interface ModalProps {
  isVisivel: boolean;
  setIsVisivel: React.Dispatch<React.SetStateAction<boolean>>;
  projeto: IProjeto | undefined;
}

export default function Modal({
  isVisivel,
  setIsVisivel,
  projeto,
}: ModalProps) {
  const [imagemAtual, setImagemAtual] = useState<string>("");
  const numeroAtual = useRef(0);

  useEffect(() => {
    if (projeto?.imagens && imagemAtual == "") {
      setImagemAtual(projeto.imagens[0]);
    }
    const intervalId = setInterval(() => {
      if (projeto?.imagens) {
        setImagemAtual(projeto?.imagens[numeroAtual.current]);

        if (numeroAtual.current + 1 >= projeto?.imagens.length) {
          numeroAtual.current = 0;
        } else {
          numeroAtual.current = numeroAtual.current + 1;
        }
      }
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Dialog
      visible={isVisivel}
      style={{ width: "80vw", height: "100vh" }}
      onHide={() => setIsVisivel(false)}
      resizable={false}
      draggable={false}
    >
      <div className="flex flex-row h-full  gap-12">
        <div className="hidden relative lg:flex rounded w-2/4 h-full">
          {projeto?.imagens && (
            <img
              src={imagemAtual}
              alt={projeto.titulo}
              className="w-full h-full rounded-lg object-cover transition-all duration-500"
            />
          )}
          <div className="absolute bottom-4 flex w-full justify-center items-center gap-2">
            {projeto?.imagens &&
              projeto?.imagens.map((projetoAtual, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setImagemAtual(projetoAtual);
                      numeroAtual.current = index;
                    }}
                    aria-label={`Selecionar imagem ${index + 1}`}
                    className="rounded-lg cursor-pointer bg-purple-500 transition-transform duration-300 ease-in-out hover:bg-purple-600 hover:scale-110 hover:border-2 hover:border-purple-500 h-6 w-6 flex items-center justify-center shadow-md"
                  >
                  </div>
                );
              })}
          </div>
        </div>
        <div className="w-full lg:w-2/4 flex flex-col justify-between">
          <div className="pb-4 overflow-y-auto">
            <h1 className="text-purple-500 font-bold  text-3xl">
              {projeto?.titulo}
            </h1>
            <div className="flex flex-wrap gap-4 mt-2">
              {projeto?.linguagens?.map((linguagem, index) => {
                return <Badge key={index}>{linguagem}</Badge>;
              })}
            </div>
            <div
              className="mt-4"
              dangerouslySetInnerHTML={{ __html: projeto?.texto ?? "" }}
            ></div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
