import React from "react";
import ReactCountryFlag from "react-country-flag";

export default function HabilidadeLinguagemItem({
  nome,
  nivel,
  flag,
}: {
  nome: string;
  nivel: string;
  flag: string;
}) {
  return (
    <div className="text-center flex flex-col items-center justify-center">
      <ReactCountryFlag
        countryCode={flag}
        svg
        style={{
          width: "8em",
          height: "8em",
        }}
      />

      <p className="text-lg font-bold mt-4">{nome}</p>
      <p className="text-[12px] font-normal">{nivel}</p>
    </div>
  );
}
