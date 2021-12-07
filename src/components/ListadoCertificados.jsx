import React from "react";
import Certificate from "./Certificate";

// No te olvides de recorrer los resultado con un for
const ListadoCertificados = ({ resultado, eliminarPaciente }) => {
  console.log(resultado);
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Certificados URL</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {""}{" "}
        <span className="text-indigo-600 font-bold">Certificados y URL</span>
      </p>
      {resultado.map((resultado) => (
        <Certificate
          key={resultado._id}
          resultado={resultado}
          eliminarPaciente={eliminarPaciente}
        />
      ))}
    </div>
  );
};

export default ListadoCertificados;
