import React from "react";

const Certificate = ({ resultado, eliminarPaciente }) => {
  console.log(resultado);
  const domainName = resultado.imageURL;
  const domain = resultado.name;
  const descriptionDomain = resultado.description;
  const id = resultado._id;
  const domainDate = resultado.dateDomain;
  const daysExp = resultado.daysExp;
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre del certificado: {""}
        <span className="font-normal normal-case">{descriptionDomain}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        URL del certificado: {""}
        <span className="font-normal normal-case">{domain}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Description: {""}
        <span className="font-normal normal-case">{domainName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Dominio vence: {""}
        <span className="font-normal normal-case">{domainDate}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Dias a vencer: {""}
        <span className="font-normal normal-case">{daysExp}</span>
      </p>
      <div className="flex justify-end">
        <button
          type="button"
          className="py-2 px-10 mt-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={() => eliminarPaciente(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Certificate;
