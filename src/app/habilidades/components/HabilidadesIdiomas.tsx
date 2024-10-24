import HabilidadeItem from "@/app/components/HabilidadeItem";
import React from "react";
import Flag from "react-world-flags";
import HabilidadeLinguagemItem from "./HabilidadeLinguagemItem";

export default function HabilidadesIdiomas() {
  return (
    <div className="grid  grid-cols-1 h-full justify-center items-center lg:grid-cols-3 gap-8">

      <HabilidadeLinguagemItem nome="Brazilian Portuguese" nivel="Fluent" flag="BR" />
      <HabilidadeLinguagemItem nome="American English" nivel="Advanced" flag="US"  />
      <HabilidadeLinguagemItem nome="French" nivel="Basic" flag="FR"  />
      
    </div>
  );
}
